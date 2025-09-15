import { Dub } from "dub";

export let clientDubClientSingleton: Dub;

export const makeDubClient = () => {
  const client = new Dub();
  return client;
};

export const getDubClient = () => {
  if (globalThis.window === undefined) return makeDubClient();
  if (!clientDubClientSingleton) {
    clientDubClientSingleton = makeDubClient();
  }
  return clientDubClientSingleton;
};
