import Wrapper from "../assets/wrappers/petCardContainer";
import { useNavigate, useParams } from "react-router-dom";
import TableRow from "./TableRow";
import { useEffect } from "react";
import { usePetContext } from "../context/petContext";
import { format } from "date-fns";

const PetCardContainer = () => {
  const { petId } = useParams();
  const { getSinglePet, singlePet, setPageLoading, setSinglePet } =
    usePetContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!petId) {
      return navigate("/");
    }
    getSinglePet(petId);
    return () => {
      setPageLoading(true);
      setSinglePet(null);
    };
  }, []);

  return (
    <Wrapper>
      <table className="pet-table">
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {singlePet?.petCards.map((item) => {
            const { serviceType, service, date, description, _id } = item;

            const formattedDate = format(new Date(date), "dd/MM/yyyy");
            // console.log(date, formattedDate);

            return (
              <TableRow
                key={_id}
                petId={petId}
                id={_id}
                serviceType={serviceType}
                service={service}
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
