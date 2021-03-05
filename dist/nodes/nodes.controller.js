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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_node_dto_1 = require("./dto/create-node.dto");
const nodes_service_1 = require("./nodes.service");
let NodesController = class NodesController {
    constructor(nodesService) {
        this.nodesService = nodesService;
    }
    findAll() {
        return this.nodesService.findAll();
    }
    findOne(id) {
        return this.nodesService.findOne(id);
    }
    create(createNodeDto) {
        return this.nodesService.create(createNodeDto, createNodeDto.id);
    }
    filterNode(createNodeDto) {
        return this.nodesService.filterNode(createNodeDto.nodeid);
    }
    delete(id) {
        return this.nodesService.delete(id);
    }
    update(updateNodeDto, id) {
        return this.nodesService.update(id, updateNodeDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NodesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NodesController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_node_dto_1.CreateNodeDto]),
    __metadata("design:returntype", Promise)
], NodesController.prototype, "create", null);
__decorate([
    common_1.Post('/get'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_node_dto_1.CreateNodeDto]),
    __metadata("design:returntype", Promise)
], NodesController.prototype, "filterNode", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NodesController.prototype, "delete", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_node_dto_1.CreateNodeDto, Object]),
    __metadata("design:returntype", Promise)
], NodesController.prototype, "update", null);
NodesController = __decorate([
    common_1.Controller('nodes'),
    __metadata("design:paramtypes", [nodes_service_1.NodesService])
], NodesController);
exports.NodesController = NodesController;
//# sourceMappingURL=nodes.controller.js.map