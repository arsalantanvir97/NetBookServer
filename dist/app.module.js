"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const items_controller_1 = require("./items/items.controller");
const items_service_1 = require("./items/items.service");
const items_module_1 = require("./items/items.module");
const nodes_module_1 = require("./nodes/nodes.module");
const edge_module_1 = require("./edges/edge.module");
const packages_module_1 = require("./packages/packages.module");
const mongoose_1 = require("@nestjs/mongoose");
const nodes_controller_1 = require("./nodes/nodes.controller");
const nodes_service_1 = require("./nodes/nodes.service");
const edges_controller_1 = require("./edges/edges.controller");
const edges_service_1 = require("./edges/edges.service");
const packages_controller_1 = require("./packages/packages.controller");
const packages_service_1 = require("./packages/packages.service");
const keys_1 = require("./config/keys");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [items_module_1.ItemsModule, nodes_module_1.NodesModule, edge_module_1.EdgesModule, packages_module_1.PackagesModule, mongoose_1.MongooseModule.forRoot(keys_1.default.mongoURI)],
        controllers: [app_controller_1.AppController, items_controller_1.ItemsController, nodes_controller_1.NodesController, edges_controller_1.EdgesController, packages_controller_1.PackagesController],
        providers: [app_service_1.AppService, items_service_1.ItemsService, nodes_service_1.NodesService, edges_service_1.EdgesService, packages_service_1.PackagesService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map