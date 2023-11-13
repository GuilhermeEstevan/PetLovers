import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { usePetContext } from "../context/petContext";

type TCardInfo = {
  serviceType: string;
  service: string;
  description: string;
  date: string;
  id: string;
  petId?: string;
};

const TableRow = ({
  serviceType,
  service,
  description,
  date,
  id,
  petId,
}: TCardInfo) => {
  const { deletePetCard, SetEditingCardInfo, setIsEditing } = usePetContext();

  const handleDeleteBtn = () => {
    if (!petId) {
      return console.log("Id do Pet não encontrado!");
    }
    deletePetCard(petId, id);
  };

  const handleEditBtn = () => {
    console.log(date);

    setIsEditing(true);
    SetEditingCardInfo({
      _id: id,
      serviceType,
      service,
      description,
      date,
    });
  };

  return (
    <tr>
      <td>{service}</td>
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
