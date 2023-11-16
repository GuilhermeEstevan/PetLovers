import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import RegisterPage from "../pages/registerPage";
import PetsPage from "../pages/petsPage";
import SharedLayout from "../pages/sharedLayout";
import AddPetPage from "../pages/addPetPage";
import ProfilePage from "../pages/profilePage";
import GalleryPage from "../pages/galleryPage";
import PetCard from "../pages/petCard";
import ProtectedRoute from "../pages/protectedRoute";
import PetProfile from "../pages/petProfile";

const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<PetsPage />} />
          <Route path="/addPet" element={<AddPetPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/gallery/:petId" element={<GalleryPage />} />
          <Route path="/petCard/:petId" element={<PetCard />} />
          <Route path="/petProfile/:petId" element={<PetProfile />} />
        </Route>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;
