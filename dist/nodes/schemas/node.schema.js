"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.NodeSchema = new mongoose.Schema({
    nodeid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    id: {
        type: String,
        unique: true,
    },
    type: String,
    tags: Array,
    attributes: Array,
    color: String,
}, {
    timestamps: true,
});
//# sourceMappingURL=node.schema.js.map