import { atom, selector } from "recoil";

export const userState = atom<{ autority: number } | undefined>({
  key: "userData",
  default: undefined,
});
