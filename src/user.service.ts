import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class UserService {
  getUsers() {
    const prisma = new PrismaClient();
    return prisma.user.findMany({
      include: {
        posts: true,
      },
    });
  }

  createUser(user: Prisma.UserCreateArgs["data"]) {
    const prisma = new PrismaClient();
    return prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });
  }
}
