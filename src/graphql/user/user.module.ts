import { Module } from "@nestjs/common";
import { DateScalar } from "../common/scalars/date.scalar";
import { UsersResolver } from "./user.resolver";
import { UserService } from "../../user.service";

@Module({
  providers: [UsersResolver, UserService, DateScalar],
})
export class UserModule {}
