const ConfigurationSummary = ({
  product,
  color,
  ram,
  storage,
  processor,
  accessories,
  total,
  saveConfig,
  resetConfig,
}) => {
  return (
    <div className="glass rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        Configuration Summary
      </h2>

      <div className="space-y-3">

        <p>
          Product:
          <span className="font-bold ml-2">
            {product}
          </span>
        </p>

        <p>
          RAM:
          <span className="font-bold ml-2">
            {ram}GB
          </span>
        </p>

        <p>
          Storage:
          <span className="font-bold ml-2">
            {storage}GB
          </span>
        </p>

        <p>
          Processor:
          <span className="font-bold ml-2">
            {processor}
          </span>
        </p>

        <p>
          Accessories:
          <span className="font-bold ml-2">
            {accessories.length
              ? accessories.join(", ")
              : "None"}
          </span>
        </p>

        <div className="flex items-center gap-3">
          Color:
          <div
            className="h-6 w-6 rounded-full"
            style={{
              background: color,
            }}
          />
        </div>

        <div className="pt-4">
          <h3 className="text-3xl text-cyan-400 font-bold">
            ₹{total}
          </h3>
        </div>

        <div className="flex gap-4 pt-5">

          <button
            onClick={saveConfig}
            className="bg-green-600 px-4 py-2 rounded-lg"
          >
            Save
          </button>

          <button
            onClick={resetConfig}
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
};

export default ConfigurationSummary;
