import { Field, InputType } from "@nestjs/graphql";
import { MaxLength } from "class-validator";

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(10)
  name: string;

  @Field()
  @MaxLength(30)
  email: string;
}
