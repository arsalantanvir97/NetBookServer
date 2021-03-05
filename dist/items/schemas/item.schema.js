"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ItemSchema = new mongoose.Schema({
    name: String,
    email: String,
    imageUrl: String,
    access_token: String,
    expires_in: Number,
    expires_at: Number,
    AIQueries: { type: Number,
        default: 0 },
    query: String,
    packageid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package'
    },
});
//# sourceMappingURL=item.schema.js.map