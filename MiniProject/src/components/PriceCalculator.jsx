import { productData } from "../data/products";

const PriceCalculator = ({
  product,
  ram,
  storage,
  processor,
  accessories,
}) => {
  const basePrice =
    productData[product].basePrice;

  const ramCost = ram * 1000;

  const storageCost =
    storage === 128
      ? 0
      : storage === 256
      ? 5000
      : storage === 512
      ? 10000
      : 15000;

  const processorCost =
    processor === "i5"
      ? 5000
      : processor === "i7"
      ? 10000
      : processor === "i9"
      ? 20000
      : processor === "Ryzen 7"
      ? 12000
      : 18000;

  const accessoryCost =
    accessories.length * 2500;

  const total =
    basePrice +
    ramCost +
    storageCost +
    processorCost +
    accessoryCost;

  return (
    <div className="glass rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        Price Breakdown
      </h2>

      <div className="space-y-3">

        <p>Base Price: ₹{basePrice}</p>

        <p>RAM Cost: ₹{ramCost}</p>

        <p>Storage Cost: ₹{storageCost}</p>

        <p>
          Processor Cost:
          ₹{processorCost}
        </p>

        <p>
          Accessories:
          ₹{accessoryCost}
        </p>

        <hr />

        <h3 className="text-3xl font-bold text-cyan-400">
          ₹{total}
        </h3>

      </div>
    </div>
  );
};

export default PriceCalculator;