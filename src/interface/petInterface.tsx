import { SetStateAction } from "react";

export type TPetContext = {
  isLoading: boolean;
  getAllPets: () => void;
  allPets: TAllPets;
  createPet: (data: any) => void;
  pet: TCreatePetData;
  setPet: React.Dispatch<SetStateAction<TCreatePetData>>;
};

export type TPetContextProps = {
  children: React.ReactNode;
};

export type TAllPets = {
  pets: TPet[] | null;
  numOfPages: number;
  totalPets: number;
};

export type TPet = {
  birthday: Date;
  breed: string;
  color: string;
  createdAt: Date;
  createdBy: string;
  gallery: any;
  gender: string;
  name: string;
  petCars: any;
  photo: string;
  species: string;
  updatedAt: string;
  _id: string;
};

export type TCreatePetData = {
  birthday: Date;
  breed: string;
  color: string;
  gender: string;
  name: string;
  photo: any;
  species: string;
};
