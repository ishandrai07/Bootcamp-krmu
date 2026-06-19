import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaTrash } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";

const Saved = () => {
  const [configs, setConfigs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("configs")) || [];

    setConfigs(data);
  }, []);

  const deleteConfig = (index) => {
    const updated = [...configs];

    updated.splice(index, 1);

    setConfigs(updated);

    localStorage.setItem(
      "configs",
      JSON.stringify(updated)
    );
  };

  const filteredConfigs = configs.filter((item) =>
    item.product
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <PageWrapper>
      <div className="flex min-h-screen bg-slate-950 text-white">
        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-6">
            Saved Configurations
          </h1>

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-slate-800 mb-8"
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {filteredConfigs.map((config, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl"
              >
                <h2 className="text-2xl font-bold">
                  {config.product}
                </h2>

                <div className="mt-4 space-y-2">

                  <p>RAM: {config.ram}GB</p>

                  <p>
                    Storage:
                    {config.storage}GB
                  </p>

                  <p>
                    Processor:
                    {config.processor}
                  </p>

                  <p>
                    Price:
                    ₹{config.total}
                  </p>

                  <p className="text-sm text-gray-400">
                    {config.date}
                  </p>

                </div>

                <button
                  onClick={() =>
                    deleteConfig(index)
                  }
                  className="mt-5 bg-red-600 px-4 py-2 rounded-lg"
                >
                  <FaTrash />
                </button>

              </div>
            ))}
          </div>

        </main>
      </div>
    </PageWrapper>
  );
};

export default Saved;