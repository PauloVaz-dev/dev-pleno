import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProjectCreateInputDTO {
  @Field({ nullable: true })
  name: string;
}
