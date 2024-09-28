'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.links = void 0;
const link_entity_1 = require('links/entities/link.entity');
const create_link_dto_1 = require('links/dto/create-link.dto');
const update_link_dto_1 = require('links/dto/update-link.dto');
exports.links = {
  dto: {
    CreateLinkDto: create_link_dto_1.CreateLinkDto,
    UpdateLinkDto: update_link_dto_1.UpdateLinkDto,
  },
  entities: {
    Link: link_entity_1.Link,
  },
};
//# sourceMappingURL=index.js.map
