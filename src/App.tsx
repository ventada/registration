import { useState } from "react";
import RegistrationModal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  console.log("🚀 ~ App ~ showModal:", showModal);
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
