import Wrapper from "../assets/wrappers/petCardContainer";
import { useNavigate, useParams } from "react-router-dom";
import TableRow from "./TableRow";
import { useEffect, useState } from "react";
import { usePetContext } from "../context/petContext";
import { format } from "date-fns";
import { TPetCardData } from "../interface/petInterface";
import { FaChevronDown, FaArrowDown, FaArrowUp } from "react-icons/fa";

type TDisplayPetCardsResult = {
  filteredPetCards: TPetCardData[];
  jsx: JSX.Element;
};

const PetCardContainer = () => {
  const { petId } = useParams();
  const { getSinglePet, singlePet, setPageLoading, setSinglePet } =
    usePetContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!petId) {
      navigate("/");
      return;
    }
    getSinglePet(petId);
    return () => {
      setPageLoading(true);
      setSinglePet(null);
    };
  }, []);

  // PAGINATION & FILTER
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedServiceType, setSelectedServiceType] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const displayPetCards = (): TDisplayPetCardsResult => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let filteredPetCards: TPetCardData[] = singlePet?.petCards || [];

    if (selectedServiceType) {
      filteredPetCards = filteredPetCards?.filter(
        (item) => item.serviceType === selectedServiceType
      );
    }

    filteredPetCards = filteredPetCards.sort((a, b): any => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    const currentPetCards = filteredPetCards.slice(startIndex, endIndex);

    return {
      filteredPetCards,
      jsx: (
        <tbody>
          {currentPetCards?.map((item: TPetCardData) => {
            const { serviceType, service, date, description, _id } = item;
            const doseNumber = item.vaccineInfo?.doseNumber;
            const formattedDate = format(new Date(date), "dd/MM/yyyy");

            return (
              <TableRow
                key={_id}
                petId={petId}
                id={_id}
                serviceType={serviceType}
                service={service}
                description={description}
                date={formattedDate}
                doseNumber={doseNumber}
              />
            );
          })}
        </tbody>
      ),
    };
  };

  const nextPage = () => {
    const totalPages = Math.ceil(
      (singlePet?.petCards.length || 0) / itemsPerPage
    );
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // FUNCIONALIDADE PARA TIPO DE SERVIÇO E DATA
  const [showServiceTypeSelector, setShowServiceTypeSelector] = useState(false);
  const toggleServiceTypeSelector = () => {
    setShowServiceTypeSelector(!showServiceTypeSelector);
  };

  const handleServiceTypeChange = (value: string) => {
    setSelectedServiceType(value);
    toggleServiceTypeSelector();
  };

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedServiceType]);

  if (singlePet?.petCards.length === 0) {
    return 
  }

  return (
    <Wrapper>
      <table className="pet-table">
        <thead>
          <tr>
            <th>
              <div className="custom-select">
                <div
                  className="selected-option"
                  onClick={toggleServiceTypeSelector}
                >
                  {selectedServiceType || "Serviços"}
                  <FaChevronDown />
                </div>
                {showServiceTypeSelector && (
                  <div className="options">
                    <div onClick={() => handleServiceTypeChange("")}>
                      Serviços
                    </div>
                    <div onClick={() => handleServiceTypeChange("exame")}>
                      Exame
                    </div>
                    <div onClick={() => handleServiceTypeChange("vacina")}>
                      Vacina
                    </div>
                    <div onClick={() => handleServiceTypeChange("banho")}>
                      Banho
                    </div>
                    <div onClick={() => handleServiceTypeChange("tosa")}>
                      Tosa
                    </div>
                  </div>
                )}
              </div>
            </th>
            <th>Descrição</th>
            <th onClick={toggleSortOrder}>
              <div className="date-sort">
                <span>Data</span>
                {sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />}
              </div>
            </th>
            <th>Ações</th>
          </tr>
        </thead>
        {displayPetCards().jsx}
      </table>
      {displayPetCards().filteredPetCards.length > itemsPerPage && (
        <div className="page-controller">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="btn page-btn"
          >
            Anterior
          </button>
          <span className="current-page">Página {currentPage}</span>
          <button
            onClick={nextPage}
            className="btn page-btn"
            disabled={
              currentPage ===
              Math.ceil((singlePet?.petCards.length || 0) / itemsPerPage)
            }
          >
            Próxima
          </button>
        </div>
      )}
    </Wrapper>
  );
};
export default PetCardContainer;
