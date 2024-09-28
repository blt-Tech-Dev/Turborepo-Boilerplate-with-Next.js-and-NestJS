import { Link } from '@repo/api/links/entities/link.entity';
import { CreateLinkDto } from '@repo/api/links/dto/create-link.dto';
import { UpdateLinkDto } from '@repo/api/links/dto/update-link.dto';
export declare class LinksService {
  private readonly _links;
  create(createLinkDto: CreateLinkDto): string;
  findAll(): Link[];
  findOne(id: number): string;
  update(id: number, updateLinkDto: UpdateLinkDto): string;
  remove(id: number): string;
}
//# sourceMappingURL=links.service.d.ts.map
