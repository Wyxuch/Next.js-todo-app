import { Box, Flex } from "Rebass";
import { Button, Text } from "rebass";
import { Textarea } from "@rebass/forms";
import { useState, useRef } from "react";
import { useSetRecoilState, useRecoilValue, atom } from "recoil";
import moment from "moment-timezone";
import { todoListState, showEdit } from "../../atoms/Todo";

function Edit() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const showModal = useRecoilValue(showEdit);
  const showModalState = useSetRecoilState(showEdit);

  const editWrapper = useRef(null);

  const handleClickOutside = (event) => {
    if (editWrapper.current === event.target) {
      hideEditModal();
    }
  };

  const hideEditModal = (e) => {
    showModalState(() => false);
    setInputValue("");
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
        time: showModal.time,
      },
    ]);
    setInputValue("");
    hideEditModal();
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <Box sx={{ display: showModal.show ? "block" : "none" }}>
      <Flex variant="editbg" ref={editWrapper} onMouseDown={handleClickOutside}>
        <Box variant="edit">
          <Flex
            sx={{
              justifyContent: "space-between",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Text variant="time" p={2} m={1}>
              {moment(showModal.time)
                .tz(moment.tz.guess())
                .format("DD.MM.YYYY HH:mm")}
            </Text>
            <Textarea
              variant="fillTextarea"
              id="editTextarea"
              value={inputValue}
              onChange={onChange}
            />
            <Flex>
              <Button onClick={addItem} variant="success">
                ✓
              </Button>
              <Button onClick={hideEditModal} variant="danger">
                ✗
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
