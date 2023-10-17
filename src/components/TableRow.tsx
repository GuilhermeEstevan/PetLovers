import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

type TCardInfo = {
  procedure: string;
  description: string;
  date: string;
};

const TableRow = ({ procedure, description, date }: TCardInfo) => {
  return (
    <tr>
      <td>{procedure}</td>
      <td>{description}</td>
      <td>{date}</td>
      <td className="cardBtns">
        <button className="btn edit-btn">{<BsFillPencilFill />}</button>
        <button className="btn delete-btn">{<BsFillTrashFill />}</button>
      </td>
    </tr>
  );
};

export default TableRow;
