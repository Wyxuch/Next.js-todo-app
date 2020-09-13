import { atom, selector } from "recoil";
import moment from "moment-timezone";

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

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    if (filter) {
      return list.filter(
        (item) =>
          item.text.toLowerCase().includes(filter.toLowerCase()) ||
          moment(item.time)
            .tz(moment.tz.guess())
            .format("DD.MM.YYYY HH:mm")
            .includes(filter)
      );
    } else {
      return list;
    }
  },
});
