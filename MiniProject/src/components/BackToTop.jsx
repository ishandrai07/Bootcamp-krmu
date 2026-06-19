import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className="
      fixed
      bottom-24
      right-6
      h-12
      w-12
      rounded-full
      bg-cyan-600
      flex
      items-center
      justify-center
      "
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;