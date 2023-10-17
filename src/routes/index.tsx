import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import RegisterPage from "../pages/registerPage";
import PetsPage from "../pages/petsPage";
import SharedLayout from "../pages/sharedLayout";
import AddPetPage from "../pages/addPetPage";
import ProfilePage from "../pages/profilePage";
import GalleryPage from "../pages/galleryPage";
import PetCard from "../pages/petCard";

const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PetsPage />} />
          <Route path="/addPet" element={<AddPetPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/petCard" element={<PetCard />} />
        </Route>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;
