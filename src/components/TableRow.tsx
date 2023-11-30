import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { usePetContext } from "../context/petContext";

type TCardInfo = {
  serviceType: string;
  service: string;
  description: string;
  date: string;
  id: string;
  petId?: string;
  doseNumber: string | undefined;
};

const TableRow = ({
  serviceType,
  service,
  description,
  date,
  id,
  petId,
  doseNumber,
}: TCardInfo) => {
  const { deletePetCard, SetEditingCardInfo, setIsEditing } = usePetContext();

  const handleDeleteBtn = () => {
    if (!petId) {
      return console.log("Id do Pet não encontrado!");
    }
    deletePetCard(petId, id);
  };

  const handleEditBtn = () => {
    setIsEditing(true);
    SetEditingCardInfo({
      _id: id,
      serviceType,
      service,
      description,
      date,
      doseNumber,
    });
  };

  return (
    <tr>
      <td>{service}</td>
      <td>
        {service.startsWith("Vacina")
          ? doseNumber === "reforço anual"
            ? `${doseNumber}`
            : `${doseNumber} dose`
          : description}
      </td>
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
