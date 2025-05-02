import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage("user", null);

export const ServerFlag = atomWithStorage("ServerFlag", false);

export const chatServerAtom = atomWithStorage("chatserver", {
  type: "dm",
  id: "0",
  name: "",
  imageUrl: "",
});

export const chatSelectUserAtom = atomWithStorage("chatselecter", {
  name: "",
  avatar: "",
  id: "",
  // news: 0,
  // role: "",
  timezone: "",
});

export const chatMainBox = atomWithStorage("chatMainBox", "dm");

export const DmlistUpdate = atomWithStorage("DmlistUpdate", 0);
