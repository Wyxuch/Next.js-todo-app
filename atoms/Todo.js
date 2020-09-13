import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const showEdit = atom({
  key: "showEdit",
  default: {
    show: false,
    id: "",
  },
});
