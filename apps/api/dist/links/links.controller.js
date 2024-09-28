'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.LinksController = void 0;
const common_1 = require('@nestjs/common');
const links_service_1 = require('./links.service');
const create_link_dto_1 = require('@repo/api/links/dto/create-link.dto');
const update_link_dto_1 = require('@repo/api/links/dto/update-link.dto');
let LinksController = class LinksController {
  linksService;
  constructor(linksService) {
    this.linksService = linksService;
  }
  create(createLinkDto) {
    return this.linksService.create(createLinkDto);
  }
  findAll() {
    return this.linksService.findAll();
  }
  findOne(id) {
    return this.linksService.findOne(+id);
  }
  update(id, updateLinkDto) {
    return this.linksService.update(+id, updateLinkDto);
  }
  remove(id) {
    return this.linksService.remove(+id);
  }
};
exports.LinksController = LinksController;
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [create_link_dto_1.CreateLinkDto]),
    __metadata('design:returntype', void 0),
  ],
  LinksController.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', void 0),
  ],
  LinksController.prototype,
  'findAll',
  null,
);
__decorate(
  [
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  LinksController.prototype,
  'findOne',
  null,
);
__decorate(
  [
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String, update_link_dto_1.UpdateLinkDto]),
    __metadata('design:returntype', void 0),
  ],
  LinksController.prototype,
  'update',
  null,
);
__decorate(
  [
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  LinksController.prototype,
  'remove',
  null,
);
exports.LinksController = LinksController = __decorate(
  [
    (0, common_1.Controller)('links'),
    __metadata('design:paramtypes', [links_service_1.LinksService]),
  ],
  LinksController,
);
//# sourceMappingURL=links.controller.js.map
