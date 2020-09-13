import { Card, Text } from "Rebass";
import { useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import moment from "moment-timezone";
import { showEdit } from "../../atoms/Todo";

function Note(props) {
  const textRef = useRef(null);
  const showEditState = useSetRecoilState(showEdit);

  const cropNoteText = () => {
    const textElement = textRef.current;
    if (!textElement) {
      return;
    }
    const wordArray = textElement.innerHTML.split(" ");
    while (textElement.scrollHeight > textElement.offsetHeight) {
      wordArray.pop();
      textElement.innerHTML = wordArray.join(" ") + "...";
    }
  };

  window.addEventListener("resize", cropNoteText);

  useEffect(() => {
    cropNoteText();
  }, []);

  const showEditModal = () => {
    showEditState(() => {
      return { show: true, id: props.item.id };
    });
  };

  return (
    <Card variant="note" onClick={showEditModal}>
      <Text variant="time">
        {moment(props.item.time)
          .tz(moment.tz.guess())
          .format("DD.MM.YYYY HH:mm")}
      </Text>
      <Text variant="note" ref={textRef}>
        {props.item.text}
      </Text>
    </Card>
  );
}

export default Note;
