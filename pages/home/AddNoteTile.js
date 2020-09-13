import { Button } from "Rebass";
import { showEdit } from "../../atoms/Todo";
import { useSetRecoilState } from "recoil";
import moment from "moment-timezone";

function AddNoteTile() {
  const showEditState = useSetRecoilState(showEdit);

  const showEditModal = () => {
    showEditState(() => {
      return { show: true, id: "" };
    });
  };

  return (
    <Button onClick={showEditModal} variant="addNoteTile">
      +
    </Button>
  );
}

export default AddNoteTile;
