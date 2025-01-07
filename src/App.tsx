import { useState } from "react";
import RegistrationModal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Modal
      </button>

      <RegistrationModal />
    </div>
  );
};

export default App;
