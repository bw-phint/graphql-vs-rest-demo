import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { NewPostInput } from "./new-post.input";
import { Post } from "./post.model";
import { PostService } from "../../post.service";

@Resolver((of) => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation((returns) => Post)
  async createPost(
    @Args("newPostData") newPostData: NewPostInput
  ): Promise<Post> {
    const post = await this.postService.createPost(newPostData);
    return post;
  }
}
