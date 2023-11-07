import Wrapper from "../assets/wrappers/petCardContainer";
import { useNavigate, useParams } from "react-router-dom";
import TableRow from "./TableRow";
import { useEffect } from "react";
import { usePetContext } from "../context/petContext";
import { format } from "date-fns";

const PetCardContainer = () => {
  const { petId } = useParams();
  const { getSinglePet, singlePet } = usePetContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!petId) {
      return navigate("/");
    }
    getSinglePet(petId);
  }, []);

  return (
    <Wrapper>
      <table className="pet-table">
        <thead>
          <tr>
            <th>Procedimento</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {singlePet?.petCards.map((item) => {
            const { procedure, date, description, _id } = item;
            const dateObject = new Date(date);
            const formattedDate = format(dateObject, "dd/MM/yyyy");
            return (
              <TableRow
                key={_id}
                petId={petId}
                id={_id}
                procedure={procedure}
                description={description}
                date={formattedDate}
              />
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};
export default PetCardContainer;
