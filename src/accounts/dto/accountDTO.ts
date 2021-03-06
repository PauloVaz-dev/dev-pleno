import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProjectDTO } from 'src/projects/dto/projectDTO';
import { StreamServerDTO } from 'src/servers/dto/stream-serverDTO';

@ObjectType()
export class AccountDTO {
  @Field((type) => Int, { nullable: false })
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  project?: ProjectDTO;

  @Field({ nullable: true })
  streamServer?: StreamServerDTO;

  @Field({ nullable: true })
  remote_account?: string;
}
