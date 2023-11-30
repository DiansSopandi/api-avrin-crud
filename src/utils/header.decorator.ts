import { applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export default function KnowmeApi(...apiTag: string[]) {
  return applyDecorators(ApiTags(...apiTag));
}
