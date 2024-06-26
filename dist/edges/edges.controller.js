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
const create_edge_dto_1 = require("./dto/create-edge.dto");
const edges_service_1 = require("./edges.service");
let EdgesController = class EdgesController {
    constructor(edgesService) {
        this.edgesService = edgesService;
    }
    findAll() {
        return this.edgesService.findAll();
    }
    findOne(id) {
        return this.edgesService.findOne(id);
    }
    create(createEdgeDto) {
        return this.edgesService.create(createEdgeDto);
    }
    creates(createEdgeDto) {
        return this.edgesService.creates(createEdgeDto);
    }
    filterEdge(CreateEdgeDto) {
        return this.edgesService.filterEdge(CreateEdgeDto.edgeid);
    }
    delete(id) {
        return this.edgesService.delete(id);
    }
    update(CreateEdgeDto, id) {
        return this.edgesService.update(id, CreateEdgeDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EdgesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EdgesController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_edge_dto_1.CreateEdgeDto]),
    __metadata("design:returntype", Promise)
], EdgesController.prototype, "create", null);
__decorate([
    common_1.Post('/many'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_edge_dto_1.CreateEdgeDto]),
    __metadata("design:returntype", Promise)
], EdgesController.prototype, "creates", null);
__decorate([
    common_1.Post('/get'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_edge_dto_1.CreateEdgeDto]),
    __metadata("design:returntype", Promise)
], EdgesController.prototype, "filterEdge", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EdgesController.prototype, "delete", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_edge_dto_1.CreateEdgeDto, Object]),
    __metadata("design:returntype", Promise)
], EdgesController.prototype, "update", null);
EdgesController = __decorate([
    common_1.Controller('edges'),
    __metadata("design:paramtypes", [edges_service_1.EdgesService])
], EdgesController);
exports.EdgesController = EdgesController;
//# sourceMappingURL=edges.controller.js.map