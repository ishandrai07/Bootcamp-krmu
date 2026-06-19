const ProductConfigurator = ({
  product,
  setProduct,

  color,
  setColor,

  ram,
  setRam,

  storage,
  setStorage,

  processor,
  setProcessor,

  accessories,
  setAccessories,
}) => {
  const colors = [
    "#ef4444",
    "#22c55e",
    "#3b82f6",
    "#eab308",
    "#ffffff",
  ];

  const handleAccessory = (item) => {
    if (accessories.includes(item)) {
      setAccessories(
        accessories.filter((acc) => acc !== item)
      );
    } else {
      setAccessories([...accessories, item]);
    }
  };

  return (
    <div className="glass rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Configure Product
      </h2>

      <div className="space-y-6">

        {/* Product */}
        <div>
          <label>Product</label>

          <select
            value={product}
            onChange={(e) =>
              setProduct(e.target.value)
            }
            className="w-full p-3 mt-2 rounded-lg bg-slate-800"
          >
            <option>Laptop</option>
            <option>Smartphone</option>
            <option>Gaming PC</option>
            <option>Car</option>
          </select>
        </div>

        {/* Colors */}
        <div>
          <label>Color</label>

          <div className="flex gap-3 mt-3">
            {colors.map((c) => (
              <button
                key={c}
                style={{ background: c }}
                onClick={() => setColor(c)}
                className={`h-10 w-10 rounded-full border-4 ${
                  color === c
                    ? "border-cyan-400"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RAM */}
        <div>
          <label>RAM</label>

          <select
            value={ram}
            onChange={(e) =>
              setRam(Number(e.target.value))
            }
            className="w-full p-3 mt-2 rounded-lg bg-slate-800"
          >
            <option value={8}>8GB</option>
            <option value={16}>16GB</option>
            <option value={32}>32GB</option>
            <option value={64}>64GB</option>
          </select>
        </div>

        {/* Storage */}
        <div>
          <label>Storage</label>

          <select
            value={storage}
            onChange={(e) =>
              setStorage(Number(e.target.value))
            }
            className="w-full p-3 mt-2 rounded-lg bg-slate-800"
          >
            <option value={128}>128GB</option>
            <option value={256}>256GB</option>
            <option value={512}>512GB</option>
            <option value={1024}>1TB</option>
          </select>
        </div>

        {/* Processor */}
        <div>
          <label>Processor</label>

          <div className="grid grid-cols-2 gap-2 mt-3">

            {[
              "i5",
              "i7",
              "i9",
              "Ryzen 7",
              "Ryzen 9",
            ].map((cpu) => (
              <button
                key={cpu}
                onClick={() =>
                  setProcessor(cpu)
                }
                className={`p-3 rounded-lg ${
                  processor === cpu
                    ? "bg-indigo-600"
                    : "bg-slate-800"
                }`}
              >
                {cpu}
              </button>
            ))}
          </div>
        </div>

        {/* Accessories */}
        <div>

          <label>Accessories</label>

          <div className="mt-3 space-y-2">

            {[
              "Mouse",
              "Keyboard",
              "Headphones",
              "Monitor",
              "Warranty",
            ].map((item) => (
              <label
                key={item}
                className="block"
              >
                <input
                  type="checkbox"
                  checked={accessories.includes(
                    item
                  )}
                  onChange={() =>
                    handleAccessory(item)
                  }
                  className="mr-2"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductConfigurator;