"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.EdgeSchema = new mongoose.Schema({
    edgeid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    source: { type: mongoose.Schema.Types.ObjectId,
        ref: 'Node'
    },
    target: { type: mongoose.Schema.Types.ObjectId,
        ref: 'Node'
    },
    tags: Array,
});
//# sourceMappingURL=edge.schema.js.map