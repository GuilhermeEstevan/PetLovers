import Wrapper from "../assets/wrappers/petCardContainer";
import TableRow from "./TableRow";

const PetCardContainer = () => {
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
          <TableRow
            procedure="Medicação"
            description="Remedio de verme tal"
            date="04/10/2023"
          />
          <TableRow
            procedure="Medicação"
            description="Remedio de verme tal"
            date="04/10/2023"
          />
          <TableRow
            procedure="Medicação"
            description="Remedio de verme tal"
            date="04/10/2023"
          />
          <TableRow
            procedure="Medicação"
            description="Remedio de verme tal"
            date="04/10/2023"
          />
        </tbody>
      </table>
    </Wrapper>
  );
};
export default PetCardContainer;
