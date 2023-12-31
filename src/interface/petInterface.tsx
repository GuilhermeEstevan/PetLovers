import { SetStateAction } from "react";

export type TPetContext = {
  isLoading: boolean;
  getAllPets: (page?: number) => void;
  singlePetError: boolean;
  setSinglePetError: React.Dispatch<SetStateAction<boolean>>
  allPets: TAllPets;
  createPet: (data: TCreatePetData) => void;
  editPet: (data: TCreatePetData, petId: string) => void;
  deletePet: (petId: string) => void;
  pet: TCreatePetData;
  setPet: React.Dispatch<SetStateAction<TCreatePetData>>;
  createPetCard: (data: TCreatePetCardData, petId: string) => void;
  getSinglePet: (petId: string) => void;
  singlePet: TPet | null;
  setSinglePet: React.Dispatch<SetStateAction<TPet | null>>;
  deletePetCard: (petId: string, petCardId: string) => void;
  editPetCard: (
    petId: string,
    petCardId: string,
    data: TCreatePetCardData
  ) => void;
  isEditing: boolean;
  setIsEditing: React.Dispatch<SetStateAction<boolean>>;
  editingCardInfo: TEditPetCardData | null;
  SetEditingCardInfo: React.Dispatch<SetStateAction<TEditPetCardData | null>>;
  addGalleryPhoto: (petid: string, image: TaddGalleryPhotoData) => void;
  deleteGalleryPhoto: (petId: string, imageId: string) => void;
  uploadImageToCloudinary: (file: any) => Promise<string>;
  pageLoading: boolean;
  setPageLoading: any;
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
  birthday: string;
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

export type TPetProfileData = {
  birthday: string;
  breed: string;
  color: string;
  gender: string;
  name: string;
  photo: string;
  species: string;
};

export type TCreatePetData = {
  birthday: string;
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
  doseNumber?: string;
  medicationType?: string;
  frequency?: string;
};

export type TPetCardData = {
  _id: string;
  serviceType: string;
  service: string;
  description: string;
  date: string;
  vaccineInfo?: TVaccineInfo;
  medicationInfo?: TMedicationInfo;
};

export type TEditPetCardData = {
  _id: string;
  serviceType: string;
  service: string;
  description: string;
  date: string;
  doseNumber?: string;
  medicationType?: string;
  frequency?: string;
};

export type TVaccineInfo = {
  vaccineType: string;
  doseNumber: string;
  nextDueDate: string;
};

export type TMedicationInfo = {
  medicationType: string;
  frequency: string;
  nextMedicationDate: string | undefined;
};

export type TaddGalleryPhotoData = {
  image: string;
};

export type TGallery = {
  image: string;
  updatedAt: Date;
  _id: string;
};
