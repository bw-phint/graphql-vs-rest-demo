import { CustomScalar, Scalar } from "@nestjs/graphql";
import * as dayjs from "dayjs";
import { Kind, ValueNode } from "graphql";

@Scalar("Date", (type) => Date)
export class DateScalar implements CustomScalar<string, Date> {
  description = "Date custom scalar type";

  parseValue(value: string): Date {
    return dayjs(value).toDate(); // value from the client
  }

  serialize(value: Date): string {
    return dayjs(value).format("YYYY-MM-DD HH:mm:ss"); // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
