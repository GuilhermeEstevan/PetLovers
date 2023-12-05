import { createContext, useContext, useState } from "react";
import {
  TAllPets,
  TCreatePetCardData,
  TCreatePetData,
  TEditPetCardData,
  TPet,
  TPetContext,
  TPetContextProps,
  TaddGalleryPhotoData,
} from "../interface/petInterface";
import customFetch from "../utils/api";
import { useUserContext } from "./userContext";
import { toast } from "react-toastify";
import axios from "axios";
const cloudName = import.meta.env.VITE_CLOUD_NAME;

const PetContext = createContext({} as TPetContext);

export const PetProvider = ({ children }: TPetContextProps) => {
  const { user } = useUserContext();
  const token = user?.token;
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCardInfo, SetEditingCardInfo] =
    useState<TEditPetCardData | null>(null);
  const [singlePet, setSinglePet] = useState<TPet | null>(null);
  const [allPets, setAllPets] = useState<TAllPets>({
    pets: [],
    numOfPages: 1,
    totalPets: 0,
  });

  const [pet, setPet] = useState<TCreatePetData>({
    birthday: "",
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
      console.log(response);
      setIsLoading(false);
      toast.success("Pet criado!");
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const editPet = async (data: TCreatePetData, petId: string) => {
    try {
      setIsLoading(true);
      console.log(data);
      const response = await customFetch.patch(`pets/editPet/${petId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      toast.success("Pet Atualizado!");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const deletePet = async (petId: string) => {
    try {
      setIsLoading(true);
      await customFetch.delete(`/pets/deletePet/${petId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Cadastro do Pet removido!");
      getAllPets();
      setIsLoading(false);
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
      setSinglePet(response.data);
      console.log(response.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const createPetCard = async (data: TCreatePetCardData, petId: string) => {
    try {
      setIsLoading(true);
      console.log(data);

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
      toast.success("Cartão preenchido!");
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
      toast.info("Informação deletada com sucesso");
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
      console.log(data);

      const response = await customFetch.patch(
        `/pets/${petId}/petcards/${petCardId}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      getSinglePet(petId);
      setIsEditing(false);
      toast.success("Alterações salvas!");
      console.log(response);
    } catch (error) {
      setIsEditing(false);
      console.log(error);
    }
  };

  const uploadImageToCloudinary = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "PetLovers");
    formData.append("upload_preset", "PetLovers-images");

    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        formData
      );
      console.log(response);
      setIsLoading(false);
      const secureUrl = response.data.secure_url;
      return secureUrl;
    } catch (error) {
      toast.error("Erro no upload");
      setIsLoading(false);
    }
  };

  const addGalleryPhoto = async (petId: string, data: TaddGalleryPhotoData) => {
    try {
      setIsLoading(true);
      console.log(data);

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

  const deleteGalleryPhoto = async (petId: string, imageId: string) => {
    try {
      setIsLoading(true);
      const response = await customFetch.delete(
        `/pets/${petId}/gallery/${imageId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response);
      getSinglePet(petId);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <PetContext.Provider
      value={{
        isLoading,
        getAllPets,
        allPets,
        createPet,
        editPet,
        deletePet,
        pet,
        setPet,
        createPetCard,
        getSinglePet,
        singlePet,
        setSinglePet,
        deletePetCard,
        editPetCard,
        isEditing,
        setIsEditing,
        editingCardInfo,
        SetEditingCardInfo,
        addGalleryPhoto,
        deleteGalleryPhoto,
        uploadImageToCloudinary,
        pageLoading,
        setPageLoading,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => {
  return useContext(PetContext);
};
