import { Field, InputType } from "@nestjs/graphql";
import { MaxLength, IsOptional } from "class-validator";

@InputType()
export class NewPostInput {
  @Field()
  authorId: string;

  @Field()
  @MaxLength(50)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(3000)
  content?: string;
}
