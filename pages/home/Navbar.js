import { Flex, Text, Link } from "Rebass";
import { Input } from "@rebass/forms";
import { todoListFilterState, todoListState } from "../../atoms/Todo.js";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import moment from "moment-timezone";

function Navbar() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const setTodoList = useSetRecoilState(todoListState);
  const todoList = useRecoilValue(todoListState);

  const url = "https://gorest.co.in/public-api/todos";

  const fetchApi = () => {
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + res.status
          );
          return;
        }
        res.json().then((data) => {
          fetchRandomPage(data.meta.pagination.pages);
        });
      })
      .catch((err) => {
        console.log("Fetch Error", err);
      });
  };

  const fetchRandomPage = (pages) => {
    fetch(`${url}?page=${Math.round(Math.random() * pages)}`)
      .then((res) => {
        if (res.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + res.status
          );
          return;
        }
        res.json().then((data) => {
          data.data.forEach((item) => addItem(item));
        });
      })
      .catch((err) => {
        console.log("Fetch Error", err);
      });
  };

  const addItem = (item) => {
    const existingIndex = todoList.findIndex(
      (listItem) => listItem.id === item.id
    );

    if (existingIndex != -1) {
      return;
    }

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: item.id,
        text: item.title,
        isComplete: item.completed,
        time: getTime(item.created_at),
      },
    ]);
  };

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <Flex variant="navbar">
      <Text p={2} width={1 / 5} fontWeight="bold">
        Todo!
      </Text>
      <Input
        variant="search"
        id="search"
        name="search"
        type="text"
        width={3 / 5}
        placeholder="Search..."
        onChange={updateFilter}
        value={filter}
      />
      <Link
        variant="nav"
        textAlign={"right"}
        onClick={fetchApi}
        width={1 / 5}
        href="#!"
      >
        Fetch
      </Link>
    </Flex>
  );
}

export default Navbar;

function getTime(time) {
  return moment(time).tz(moment.tz.guess()).format();
}
