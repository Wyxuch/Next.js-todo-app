import { Box, Flex } from "Rebass";
import { Button, Text } from "rebass";
import { Textarea } from "@rebass/forms";
import { useState, useRef } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import moment from "moment-timezone";
import { todoListState, showEdit } from "../../atoms/Todo";

function Edit(props) {
  const [inputValue, setInputValue] = useState("");
  const [complete, setComplete] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const todoList = useRecoilValue(todoListState);
  const setShowModal = useSetRecoilState(showEdit);
  const showModal = useRecoilValue(showEdit);

  const editWrapper = useRef(null);

  const handleClickOutside = (event) => {
    if (editWrapper.current === event.target) {
      hideEditModal();
    }
  };

  const hideEditModal = () => {
    setShowModal(() => false);
    setInputValue("");
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
        time: getTime(),
      },
    ]);
    setInputValue("");
    hideEditModal();
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const index = todoList.findIndex((listItem) => {
    return listItem.id === showModal.id;
  });

  const editItem = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoList[index],
      text: inputValue,
    });
    setTodoList(newList);
    setShowModal(() => false);
    setInputValue("");
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoList[index],
      isComplete: !todoList[index].isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
    setShowModal(() => false);
    setInputValue("");
  };

  useEffect(() => {
    if (showModal.id) {
      setInputValue(todoList[index].text);
      setComplete(todoList[index].isComplete);
    } else {
      setComplete(false);
    }
  }, [showModal.show, todoList[index]]);

  return (
    <Box
      sx={{
        display: showModal.show ? "block" : "none",
      }}
    >
      <Flex variant="editbg" ref={editWrapper} onMouseDown={handleClickOutside}>
        <Box
          variant="edit"
          sx={{
            backgroundColor: complete ? "#2e582c" : "dark",
          }}
        >
          <Flex
            sx={{
              justifyContent: "space-between",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Flex variant="editTop">
              <Text m={1}>
                {showModal.id
                  ? moment(todoList[index].time)
                      .tz(moment.tz.guess())
                      .format("DD.MM.YYYY HH:mm")
                  : moment().tz(moment.tz.guess()).format("DD.MM.YYYY HH:mm")}
              </Text>
              <Button
                onClick={deleteItem}
                variant="delete"
                sx={{
                  display: showModal.id ? "block" : "none",
                }}
              >
                delete
              </Button>
            </Flex>

            <Textarea
              variant="fillTextarea"
              id="editTextarea"
              value={inputValue}
              onChange={onChange}
            />
            <Flex>
              <Button
                onClick={showModal.id ? editItem : addItem}
                variant="success"
              >
                save
              </Button>
              <Button onClick={toggleItemCompletion} variant="done">
                done
              </Button>
              <Button onClick={hideEditModal} variant="danger">
                cancel
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Edit;

function getId() {
  return moment.utc().tz("Europe/Warsaw").valueOf();
}

function getTime() {
  return moment().tz(moment.tz.guess()).format();
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
