import { SetStateAction } from "react";

export type TPetContext = {
  isLoading: boolean;
  getAllPets: () => void;
  allPets: TAllPets;
  createPet: (data: any) => void;
  pet: TCreatePetData;
  setPet: React.Dispatch<SetStateAction<TCreatePetData>>;
  createPetCard: (data: TCreatePetCardData, petId: string) => void;
  getSinglePet: (petId: string) => void;
  singlePet: TPet | null;
  deletePetCard: (petId: string, petCardId: string) => void;
  editPetCard: (
    petId: string,
    petCardId: string,
    data: TCreatePetCardData
  ) => void;
  isEditing: boolean;
  setIsEditing: React.Dispatch<SetStateAction<boolean>>;
  editingCardInfo: TPetCardData | null;
  SetEditingCardInfo: React.Dispatch<SetStateAction<TPetCardData | null>>;
  addGalleryPhoto: (petid: string, image: TaddGalleryPhotoData) => void;
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
  gallery: TGallery[];
  gender: string;
  name: string;
  petCards: TPetCardData[];
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
  photo: string;
  species: string;
};

export type TCreatePetCardData = {
  serviceType: string;
  service: string;
  description: string;
  date: string;
};

export type TPetCardData = {
  serviceType: string;
  service: string;
  description: string;
  date: string;
  _id: string;
};

export type TaddGalleryPhotoData = {
  image: string;
};

export type TGallery = {
  image: string;
  updatedAt: Date;
  _id: string;
};
