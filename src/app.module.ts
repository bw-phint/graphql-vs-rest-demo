import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { UserModule as RestUserModule } from "./rest/user.module";
import { PostModule } from "./rest/post.module";
import { UserModule as GQLUserModule } from "./graphql/user/user.module";
import { PostModule as GQLPostModule } from "./graphql/post/post.module";

@Module({
  imports: [
    RestUserModule,
    PostModule,
    GQLUserModule,
    GQLPostModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      // playground: false,
    }),
  ],
})
export class AppModule {}
