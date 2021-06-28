import { Controller, Post, Req } from "@nestjs/common";
import { PostService } from "../post.service";
import { Request } from "express";

@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  post(@Req() request: Request) {
    return this.postService.createPost({
      title: request.body.title,
      content: request.body.content,
      published: request.body.published,
      author: {
        connect: { id: request.body.authorId },
      },
    });
  }
}
