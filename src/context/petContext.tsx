import { createContext, useContext, useState } from "react";
import {
  TAllPets,
  TCreatePetData,
  TPetContext,
  TPetContextProps,
} from "../interface/petInterface";
import customFetch from "../utils/api";
import { useUserContext } from "./userContext";

const PetContext = createContext({} as TPetContext);

export const PetProvider = ({ children }: TPetContextProps) => {
  const { user } = useUserContext();
  const token = user?.token;
  const [isLoading, setIsLoading] = useState(false);
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

  const createPet = async (data: any) => {
    console.log(data);
    
    try {
      setIsLoading(true);
      const response = await customFetch.post("/pets", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <PetContext.Provider
      value={{ isLoading, getAllPets, allPets, createPet, pet, setPet }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => {
  return useContext(PetContext);
};
