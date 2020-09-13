import { Card, Text } from "Rebass";
import { useRef, useEffect } from "react";
import moment from "moment-timezone";

function Note(props) {
  const textRef = useRef(null);

  const cropNoteText = () => {
    const textElement = textRef.current;
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

  return (
    <Card variant="note">
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
