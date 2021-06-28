import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AccountDTO } from 'src/accounts/dto/accountDTO';

@ObjectType()
export class CameraDTO {
  @Field((type) => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  streamid: string;

  @Field({ nullable: true })
  url: string;

  @Field({ nullable: true })
  account?: AccountDTO;
}
