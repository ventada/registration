import { useState } from "react";
import RegistrationModal from "./components/Modal";
import { Route, Routes } from "react-router-dom";
import Telegram from "./page/Telegram";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  console.log("🚀 ~ App ~ showModal:", showModal);
  return (
    <Routes>
      <Route path="/telegram" element={<Telegram />} />
    </Routes>
  );
};

export default App;
