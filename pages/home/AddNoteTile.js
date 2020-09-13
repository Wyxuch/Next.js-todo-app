import { Button } from "Rebass";
import { showEdit } from "../../atoms/Todo";
import { useSetRecoilState } from "recoil";
import moment from "moment-timezone";

function AddNoteTile() {
  const showEditState = useSetRecoilState(showEdit);

  const showEditModal = () => {
    showEditState(() => {
      return { show: true, time: moment.utc(), text: "", isComplete: false };
    });
  };

  return (
    <Button onClick={showEditModal} variant="addNoteTile">
      +
    </Button>
  );
}

export default AddNoteTile;
