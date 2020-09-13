import { Button } from "Rebass";
import { useSetRecoilState } from "recoil";
import moment from "moment-timezone";
import { showEdit } from "../../atoms/Todo";

function AddButton() {
  const showEditState = useSetRecoilState(showEdit);

  const showEditModal = () => {
    showEditState(() => {
      return {
        show: true,
        time: moment.utc(),
        text: "",
        id: "",
        isComplete: false,
      };
    });
  };

  return (
    <Button onClick={showEditModal} variant="addButton">
      +
    </Button>
  );
}

export default AddButton;
