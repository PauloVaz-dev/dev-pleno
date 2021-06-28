import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ProjectDTO } from 'src/projects/dto/projectDTO';
import { StreamServerDTO } from 'src/servers/dto/stream-serverDTO';
import { CameraDTO } from 'src/cameras/dto/cameraDTO';

@ObjectType()
export class AccountDTOAll {
  @Field((type) => Int, { nullable: false })
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  project?: ProjectDTO;

  @Field({ nullable: true })
  streamServer?: StreamServerDTO;

  @Field((type) => [CameraDTO], { nullable: true })
  cameras?: CameraDTO[];

  @Field({ nullable: true })
  remote_account?: string;
}
