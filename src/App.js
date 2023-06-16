import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  const [formData, setFormData] = useState({ day: "", month: "", year: "" });

  const handleFormSubmit = (day, month, year) => {
    setFormData({ day, month, year });
  };

  return (
    <div className="w-full h-screen grid bg-[#f0f0f0]">
      <div className="bg-white place-self-center w-3/4 max-w-[38rem] min-w-[375px] rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-10xl flex flex-col p-10">
        <FormComponent onFormSubmit={handleFormSubmit} />
        <ResultComponent formData={formData} />
      </div>
    </div>
  );
}

export default App;
