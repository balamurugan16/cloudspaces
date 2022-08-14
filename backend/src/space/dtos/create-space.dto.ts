import { IsString } from 'class-validator';

export class CreateSpaceDTO {
  @IsString()
  name: string;
  @IsString()
  owner: string;
}
