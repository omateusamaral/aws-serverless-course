import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const httpMethod = event.httpMethod;
  if (event.resource === "/products") {
    if (httpMethod === "GET") {
      console.log("get http  received");

      return {
        body: JSON.stringify({
          hello: "world",
          message: "GET - PRODUCTS - OK",
        }),
        statusCode: 200,
      };
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: "bad request",
    }),
  };
}
