import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { usePetContext } from "../context/petContext";

type TCardInfo = {
  procedure: string;
  description: string;
  date: string;
  id: string;
  petId?: string;
};

const TableRow = ({ procedure, description, date, id, petId }: TCardInfo) => {
  const { deletePetCard, SetEditingCardInfo, setIsEditing } = usePetContext();

  const handleDeleteBtn = () => {
    if (!petId) {
      return console.log("Id do Pet não encontrado!");
    }
    deletePetCard(petId, id);
  };

  const handleEditBtn = () => {
    setIsEditing(true);
    SetEditingCardInfo({ _id: id, procedure, description, date });
  };

  return (
    <tr>
      <td>{procedure}</td>
      <td>{description}</td>
      <td>{date}</td>
      <td className="cardBtns">
        <button className="btn edit-btn" onClick={handleEditBtn}>
          {<BsFillPencilFill />}
        </button>
        <button className="btn delete-btn" onClick={handleDeleteBtn}>
          {<BsFillTrashFill />}
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
