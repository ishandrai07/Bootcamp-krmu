import { useState } from "react";

import Sidebar from "../components/Sidebar";
import ProductConfigurator from "../components/ProductConfigurator";
import ProductPreview from "../components/ProductPreview";
import PriceCalculator from "../components/PriceCalculator";
import ConfigurationSummary from "../components/ConfigurationSummary";
import PageWrapper from "../components/PageWrapper";

import { productData } from "../data/products";

const Dashboard = () => {
  const [product, setProduct] =
    useState("Laptop");

  const [color, setColor] =
    useState("#3b82f6");

  const [ram, setRam] =
    useState(8);

  const [storage, setStorage] =
    useState(128);

  const [processor, setProcessor] =
    useState("i5");

  const [accessories, setAccessories] =
    useState([]);

  const calculateTotal = () => {
    const base =
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

    return (
      base +
      ramCost +
      storageCost +
      processorCost +
      accessoryCost
    );
  };

  const total = calculateTotal();

  const saveConfig = () => {
    const old =
      JSON.parse(
        localStorage.getItem("configs")
      ) || [];

    old.push({
      product,
      ram,
      storage,
      processor,
      accessories,
      total,
      date: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "configs",
      JSON.stringify(old)
    );

    alert("Configuration Saved");
  };

  const resetConfig = () => {
    setProduct("Laptop");
    setRam(8);
    setStorage(128);
    setProcessor("i5");
    setAccessories([]);
  };

  return (
    <PageWrapper>
      <div className="flex bg-slate-950 text-white">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">
            Product Studio
          </h1>

          <div className="grid lg:grid-cols-2 gap-6">

            <ProductConfigurator
              product={product}
              setProduct={setProduct}
              color={color}
              setColor={setColor}
              ram={ram}
              setRam={setRam}
              storage={storage}
              setStorage={setStorage}
              processor={processor}
              setProcessor={setProcessor}
              accessories={accessories}
              setAccessories={setAccessories}
            />

            <ProductPreview
              product={product}
              ram={ram}
              storage={storage}
            />

            <PriceCalculator
              product={product}
              ram={ram}
              storage={storage}
              processor={processor}
              accessories={accessories}
            />

            <ConfigurationSummary
              product={product}
              color={color}
              ram={ram}
              storage={storage}
              processor={processor}
              accessories={accessories}
              total={total}
              saveConfig={saveConfig}
              resetConfig={resetConfig}
            />

          </div>

        </main>

      </div>
    </PageWrapper>
  );
};

export default Dashboard;