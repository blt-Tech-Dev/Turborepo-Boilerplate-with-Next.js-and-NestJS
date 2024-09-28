import { LinksService } from './links.service';
import { CreateLinkDto } from '@repo/api/links/dto/create-link.dto';
import { UpdateLinkDto } from '@repo/api/links/dto/update-link.dto';
export declare class LinksController {
  private readonly linksService;
  constructor(linksService: LinksService);
  create(createLinkDto: CreateLinkDto): string;
  findAll(): import('@repo/api/links/entities/link.entity').Link[];
  findOne(id: string): string;
  update(id: string, updateLinkDto: UpdateLinkDto): string;
  remove(id: string): string;
}
//# sourceMappingURL=links.controller.d.ts.map
