"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.EdgeSchema = new mongoose.Schema({
    edgeid: String,
    source: String,
    target: String,
    tags: Array,
});
//# sourceMappingURL=edge.schema.js.map