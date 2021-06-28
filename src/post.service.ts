import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class PostService {
  createPost(post: Prisma.PostCreateArgs["data"]) {
    const prisma = new PrismaClient();
    return prisma.post.create({
      data: post,
    });
  }
}
