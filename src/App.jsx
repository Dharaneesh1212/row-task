import "./App.css";

const App = () => {
  return (
    <main className="flex flex-col gap-8 w-screen">
      <form className="flex justify-center items-center gap-4 mt-8" id="first">
        <input
          required
          className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md capitalize"
          placeholder="Name"
          type="text"
          id="one"
        />
        <input
          required
          className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md"
          placeholder="Email"
          type="email"
          id="two"
        />
        <input
          required
          className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md"
          placeholder="Mobile"
          type="text"
          id="three"
        />
        <input
          required
          className="py-2 px-2 w-44 text-[1.1rem] border-2 border-sky-500 rounded-md"
          placeholder="Pan"
          type="text"
          id="four"
        />
        <button
          id="add"
          className="py-1 px-1 text-lg font-medium border-2 border-fuchsia-500 rounded-md"
        >
          Add Row
        </button>
      </form>
      <div className="flex justify-center items-center">
        <button
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
