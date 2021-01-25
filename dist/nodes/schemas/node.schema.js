"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.NodeSchema = new mongoose.Schema({
    nodeid: String,
    id: String,
    type: String,
    tags: Array,
    attributes: Array
});
//# sourceMappingURL=node.schema.js.map