import { useState } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");

  const personName = (e) => {
    setName(e.target.value);
  };
  const personEmail = (e) => {
    setEmail(e.target.value);
  };
  const personMobile = (e) => {
    setNumber(e.target.value);
  };
  const PersonPan = (e) => {
    setPan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || number === "" || pan === "") {
      alert("All fields are required");
    } else if (number.length < 10) {
      alert("Mobile number must have 10 characters");
    } else if (number.length > 10) {
      alert("Mobile number must not exceed 10 characters");
    } else {
      console.log("Success");
    }
  };

  return (
    <main className="flex flex-col gap-8 w-screen">
      <div className="flex justify-center items-center gap-4 mt-8" id="first">
        <input
          required
          className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md capitalize"
          placeholder="Name"
          type="text"
          onChange={personName}
          id="one"
        />
        <input
          required
          className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md"
          placeholder="Email"
          type="email"
          onChange={personEmail}
          id="two"
        />
        <input
          required
          className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md"
          placeholder="Mobile"
          type="text"
          onChange={personMobile}
          id="three"
        />
        <input
          required
          className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md"
          placeholder="Pan"
          type="text"
          onChange={PersonPan}
          id="four"
        />
        <button
          id="add"
          className="py-1 px-1 text-lg font-medium border-2 border-fuchsia-500 rounded-md"
          onClick={handleSubmit}
        >
          Add Row
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleSubmit}
          id="save"
          className="py-1 px-3 text-lg font-medium border-2 border-green-500 rounded-md"
        >
          Save
        </button>
      </div>
    </main>
  );
};

export default App;
