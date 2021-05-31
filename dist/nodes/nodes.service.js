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
var _a, _b;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let NodesService = class NodesService {
    constructor(nodeModel, edgeModel) {
        this.nodeModel = nodeModel;
        this.edgeModel = edgeModel;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nodeModel.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nodeModel.findOne({ _id: id });
        });
    }
    create(node, id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('node', node);
            const checknode = yield this.nodeModel.findOne({ id, nodeid: node.nodeid });
            console.log('checkednode', checknode);
            if (checknode) {
                return { message: 'Node Already exists' };
            }
            else {
                const newNode = new this.nodeModel(node);
                console.log('newNode', newNode);
                return yield newNode.save();
            }
        });
    }
    creates(node) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('node', node, node[0].nodeid);
            let nodes;
            let noddes;
            noddes = yield this.nodeModel.find({ nodeid: node[0].nodeid });
            console.log('noddes', noddes);
            noddes = node.filter(nd => {
                let flag = true;
                for (let nod of noddes) {
                    if (nd.id === nod.id) {
                        flag = false;
                    }
                }
                return flag;
            });
            console.log('noded', noddes);
            try {
                nodes = yield this.nodeModel.insertMany(noddes, { ordered: false });
            }
            catch (error) {
                if (error.message.indexOf("11000") != -1) {
                    console.log("dup error");
                    console.log('nodee', nodes);
                    return nodes;
                }
            }
            finally {
                console.log('noddde', nodes);
                return nodes;
            }
        });
    }
    filterNode(nodeid) {
        return __awaiter(this, void 0, void 0, function* () {
            let nodes = yield this.nodeModel.find({ nodeid });
            let links = yield this.edgeModel.find({ edgeid: nodeid }).populate('source').populate('target');
            return { nodes, links };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.edgeModel.find({ source: id }).remove().exec();
            yield this.edgeModel.find({ target: id }).remove().exec();
            return yield this.nodeModel.findByIdAndRemove(id);
        });
    }
    update(id, node) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nodeModel.findByIdAndUpdate(id, node, { new: true });
        });
    }
};
NodesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Node')),
    __param(1, mongoose_2.InjectModel('Edge')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _b : Object])
], NodesService);
exports.NodesService = NodesService;
//# sourceMappingURL=nodes.service.js.map