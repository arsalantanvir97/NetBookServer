import { Injectable } from '@nestjs/common';
import { Package } from './interfaces/package.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

const Stripe = require('stripe');
const stripe = Stripe('sk_test_OVw01bpmRN2wBK2ggwaPwC5500SKtEYy9V');

@Injectable()
export class PackagesService {
  constructor(
    @InjectModel('Package') private readonly packageModel: Model<Package>,
  ) {}
  async findAll(): Promise<Package[]> {
    return await this.packageModel.find();
  }
  async create(email: string, res: any) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000,
      currency: 'eur',
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: 'accept_a_payment' },
      receipt_email: email,
    });

    res.json({ client_secret: paymentIntent['client_secret'] });
  }

  async createsubscription(
    payment_method: string,
    email: string,
    packageid: string,
    res: any,
  ) {
    console.log('payment_method', payment_method, packageid, email);
    const customer = await stripe.customers.create({
      payment_method: payment_method,
      email: email,
      invoice_settings: {
        default_payment_method: payment_method,
      },
    });
    console.log('customer', customer);

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: packageid,
        },
      ],
      expand: ['latest_invoice.payment_intent'],
    });
    console.log('subscriptionsubscription', subscription);
    const status = subscription['latest_invoice']['payment_intent']['status'];
    const client_secret =
      subscription['latest_invoice']['payment_intent']['client_secret'];

    res.json({ client_secret: client_secret, status: status });
  }
}
