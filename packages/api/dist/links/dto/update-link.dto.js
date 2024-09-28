'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UpdateLinkDto = void 0;
const mapped_types_1 = require('@nestjs/mapped-types');
const create_link_dto_1 = require('./create-link.dto');
class UpdateLinkDto extends (0, mapped_types_1.PartialType)(
  create_link_dto_1.CreateLinkDto,
) {}
exports.UpdateLinkDto = UpdateLinkDto;
//# sourceMappingURL=update-link.dto.js.map
