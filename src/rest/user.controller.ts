import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "../user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  user(@Req() request: Request) {
    return this.userService.createUser({
      name: request.body.name,
      email: request.body.email,
    });
  }
}
