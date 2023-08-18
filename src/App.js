import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/profile";

function App() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Profile />} />

    </Routes>

  </BrowserRouter>
  );
}

export default App;
