import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { NewUserInput } from "./new-user.input";
import { User } from "./user.model";
import { UserService } from "../../user.service";

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Mutation((returns) => User)
  async createUser(
    @Args("newUserData") newUserData: NewUserInput
  ): Promise<User> {
    const user = await this.userService.createUser(newUserData);
    return user;
  }
}
