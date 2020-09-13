import Head from "next/head";
import Navbar from "./Navbar";
import AddButton from "./AddButton";
import AddNoteTile from "./AddNoteTile";
import Note from "./Note";
import Edit from "./Edit";
import { Flex } from "rebass";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState, filteredTodoListState } from "../../atoms/Todo";
import { useEffect } from "react";

function Home() {
  const filteredList = useRecoilValue(filteredTodoListState);
  const setTodoList = useSetRecoilState(todoListState);
  console.log(filteredList);

  useEffect(() => {
    if (localStorage.todoListState) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        ...JSON.parse(localStorage.todoListState).value,
      ]);
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Flex variant="main">
        <AddNoteTile />

        {filteredList.map((todoItem) => (
          <Note key={todoItem.id} item={todoItem} />
        ))}
      </Flex>
      <AddButton />
      <Edit />
    </div>
  );
}

export default Home;
