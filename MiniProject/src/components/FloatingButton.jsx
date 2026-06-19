import { FaPlus } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <button
      className="
      fixed
      bottom-6
      right-6
      h-14
      w-14
      rounded-full
      bg-indigo-600
      flex
      items-center
      justify-center
      shadow-lg
      hover:scale-110
      transition
      "
    >
      <FaPlus />
    </button>
  );
};

export default FloatingButton;