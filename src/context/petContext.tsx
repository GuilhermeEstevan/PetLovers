import { createContext, useContext, useState } from "react";
import {
  TAllPets,
  TCreatePetCardData,
  TCreatePetData,
  TPet,
  TPetCardData,
  TPetContext,
  TPetContextProps,
  TaddGalleryPhotoData,
} from "../interface/petInterface";
import customFetch from "../utils/api";
import { useUserContext } from "./userContext";
import { toast } from "react-toastify";

const PetContext = createContext({} as TPetContext);

export const PetProvider = ({ children }: TPetContextProps) => {
  const { user } = useUserContext();
  const token = user?.token;
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCardInfo, SetEditingCardInfo] = useState<TPetCardData | null>(
    null
  );
  const [singlePet, setSinglePet] = useState<TPet | null>(null);
  const [allPets, setAllPets] = useState<TAllPets>({
    pets: [],
    numOfPages: 1,
    totalPets: 0,
  });

  const [pet, setPet] = useState<TCreatePetData>({
    birthday: new Date(),
    breed: "",
    color: "",
    gender: "",
    name: "",
    photo: "",
    species: "",
  });

  const getAllPets = async () => {
    try {
      setIsLoading(true);
      const response = await customFetch.get("/pets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setAllPets({
        ...allPets,
        pets: response.data.pets,
        numOfPages: response.data.numOfPages,
        totalPets: response.data.totalPets,
      });
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.response.data);
      setIsLoading(false);
    }
  };

  const createPet = async (data: TCreatePetData) => {
    console.log(data);

    try {
      setIsLoading(true);
      const response = await customFetch.post("/pets", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      setIsLoading(false);
      toast.success("Pet criado!");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getSinglePet = async (petId: string) => {
    try {
      setIsLoading(true);
      const response = await customFetch.get(`/pets/getPet/${petId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      setSinglePet(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const createPetCard = async (data: TCreatePetCardData, petId: string) => {
    try {
      setIsLoading(true);
      const response = await customFetch.patch(
        `/pets/createPetCard/${petId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      getSinglePet(petId);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const deletePetCard = async (petId: string, petCardId: string) => {
    try {
      const response = await customFetch.delete(
        `/pets/${petId}/petcards/${petCardId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      getSinglePet(petId);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const editPetCard = async (
    petId: string,
    petCardId: string,
    data: TCreatePetCardData
  ) => {
    try {
      setIsEditing(true);
      const response = await customFetch.patch(
        `/pets/${petId}/petcards/${petCardId}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      getSinglePet(petId);
      setIsEditing(false);
      console.log(response);
    } catch (error) {
      setIsEditing(false);
      console.log(error);
    }
  };

  const addGalleryPhoto = async (petId: string, data: TaddGalleryPhotoData) => {
    try {
      setIsLoading(true);
      const response = await customFetch.patch(`/pets/${petId}/gallery`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      getSinglePet(petId);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <PetContext.Provider
      value={{
        isLoading,
        getAllPets,
        allPets,
        createPet,
        pet,
        setPet,
        createPetCard,
        getSinglePet,
        singlePet,
        deletePetCard,
        editPetCard,
        isEditing,
        setIsEditing,
        editingCardInfo,
        SetEditingCardInfo,
        addGalleryPhoto,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => {
  return useContext(PetContext);
};
