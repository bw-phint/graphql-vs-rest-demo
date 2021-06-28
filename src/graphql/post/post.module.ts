import { Module } from "@nestjs/common";
import { DateScalar } from "../common/scalars/date.scalar";
import { PostResolver } from "./post.resolver";
import { PostService } from "../../post.service";

@Module({
  providers: [PostResolver, PostService, DateScalar],
})
export class PostModule {}
