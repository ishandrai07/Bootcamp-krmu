import { motion } from "framer-motion";
import { productData } from "../data/Products";

const ProductPreview = ({
  product,
  ram,
  storage,
}) => {

  const score =
    ram * 10 +
    (storage / 128) * 5;

  return (
    <motion.div
      key={product}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="glass rounded-xl p-6"
    >
      <img
        src={productData[product].image}
        alt=""
        className="w-full h-72 object-cover rounded-xl"
      />

      <h2 className="text-3xl font-bold mt-5">
        {product}
      </h2>

      <div className="mt-4 space-y-2">

        <p>RAM: {ram}GB</p>

        <p>
          Storage: {storage}GB
        </p>

        <p className="text-cyan-400 font-bold">
          Performance Score:
          {score}/100
        </p>

      </div>
    </motion.div>
  );
};

export default ProductPreview;