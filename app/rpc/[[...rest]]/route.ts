import { CompressionPlugin, RPCHandler } from "@orpc/server/fetch";
import {
  CORSPlugin,
  ResponseHeadersPlugin,
  StrictGetMethodPlugin,
} from "@orpc/server/plugins";
import { router } from "@/orpc/router";

const handler = new RPCHandler(router, {
  plugins: [
    new StrictGetMethodPlugin(),
    new CompressionPlugin(),
    new ResponseHeadersPlugin(),
    new CORSPlugin(),
  ],
});

async function handleRequest(request: Request) {
  const { response } = await handler.handle(request, {
    context: {},
    prefix: "/rpc",
  });

  return response ?? new Response("Not found", { status: 404 });
}

export const HEAD = handleRequest;
export const GET = handleRequest;
export const POST = handleRequest;
export const PUT = handleRequest;
export const PATCH = handleRequest;
export const DELETE = handleRequest;
