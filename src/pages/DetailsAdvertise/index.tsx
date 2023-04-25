import { useState } from "react";
import { FormCreateAdvertise } from "../../components/FormCreateAdvertise";

export const DetailsAdvertise = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Criar Anúncio</button>
      {isOpen && <FormCreateAdvertise setIsOpen={setIsOpen} isOpen={isOpen} />}
    </>
  );
};
