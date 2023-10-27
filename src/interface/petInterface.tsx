export type TPetContext = {
  isLoading: boolean;
  getAllPets: () => void;
  allPets: TAllPets;
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
