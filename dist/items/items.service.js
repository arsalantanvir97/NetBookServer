"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ItemsService = class ItemsService {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.itemModel.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.itemModel.findOne({ _id: id });
        });
    }
    create(item, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkitem = yield this.itemModel.findOne({ email }).populate('packageid');
            if (checkitem) {
                return checkitem;
            }
            else {
                const newItem = new this.itemModel(item);
                yield newItem.save();
                const updateduser = yield this.itemModel.findById(newItem._id).populate('packageid');
                console.log('pop', updateduser);
                return updateduser;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.itemModel.findByIdAndRemove(id);
        });
    }
    updates(packageid, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.itemModel.findOne({ _id: id });
            console.log('users', user);
            if (user) {
                user.packageid = packageid;
            }
            yield user.save();
            const newwuser = yield this.itemModel.findById(user._id).populate('packageid');
            console.log('pops', newwuser);
            return yield newwuser.save();
        });
    }
    update(id, item) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.itemModel.findByIdAndUpdate(id, item, { new: true });
        });
    }
    queries(id, query, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.itemModel.findOne({ _id: id }).populate('packageid');
            if (user) {
                console.log('user', user);
                if (user.AIQueries < user.packageid.AIQueries) {
                    let userqueries = (yield user.AIQueries) + 1;
                    console.log('userqueries', userqueries);
                    user.AIQueries = userqueries;
                    let userupdated = yield user.save();
                    res.json({ userupdated, message: 'You have succesfully asked your API query  ' });
                }
                else {
                    res.json({ message: 'You have reached the limit of AI Queries please upgrade to basic or premium package ' });
                }
            }
            console.log('userq', user.AIQueries);
        });
    }
};
ItemsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Item')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map