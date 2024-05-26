import { useState } from "react";
import "./App.css";

const App = () => {
  const [rows, setRows] = useState([
    { name: "", email: "", number: "", pan: "" },
  ]);
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    if (field === "number" && !/^\d*$/.test(value)) return;
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { name: "", email: "", number: "", pan: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (let row of rows) {
      if (!row.name || !row.email || !row.number || !row.pan) {
        alert("All fields are required");
        return;
      } else if (!emailRegex.test(row.email)) {
        alert("Please enter a valid email address");
        return;
      } else if (row.number.length < 10) {
        alert("Mobile number must have 10 characters");
        return;
      } else if (row.number.length > 10) {
        alert("Mobile number must not exceed 10 characters");
        return;
      }
    }
    setSubmittedData(rows);
    console.log("Success", rows);
  };

  return (
    <main className="flex flex-col gap-8 w-full">
      <form
        className="flex justify-center items-center gap-4 mt-8 flex-col"
        id="first"
        onSubmit={handleSubmit}
      >
        {rows.map((row, index) => (
          <div
            id="map-div"
            key={index}
            className="flex justify-center items-center gap-4"
          >
            <input
              required
              className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md capitalize"
              placeholder="Name"
              type="text"
              value={row.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
            <input
              required
              className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md"
              placeholder="Email"
              type="email"
              value={row.email}
              onChange={(e) => handleChange(index, "email", e.target.value)}
            />
            <input
              required
              className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md"
              placeholder="Number"
              type="text"
              value={row.number}
              onChange={(e) => handleChange(index, "number", e.target.value)}
            />
            <input
              required
              className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md"
              placeholder="Pan"
              type="text"
              value={row.pan}
              onChange={(e) => handleChange(index, "pan", e.target.value)}
            />
          </div>
        ))}
        <button
          id="add"
          className="py-1 px-1 text-lg font-medium border-2 border-fuchsia-500 rounded-md"
          type="button"
          onClick={handleAddRow}
        >
          Add Row
        </button>
      </form>
      <div className="flex justify-center items-center">
        <button
          onClick={handleSubmit}
          id="save"
          className="py-1 px-3 text-lg font-medium border-2 border-green-500 rounded-md"
        >
          Save
        </button>
      </div>
      {submittedData.length > 0 && (
        <div
          id="data"
          className="mt-8 flex justify-center items-center flex-col"
        >
          <h2 className="text-2xl font-bold text-center">Saved Data</h2>
          <ul className="mt-4 flex justify-center items-center flex-col">
            {submittedData.map((row, index) => (
              <li key={index} className="mb-2 flex gap-4">
                {`Name: ${row.name}, Email: ${row.email}, Mobile: ${row.number}, PAN: ${row.pan}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default App;
