import { useRef } from "react";



export const PaginationNumber = ({ indicator, onPage }) => {
    const elementRef = useRef(indicator + 1);
  
  
  
    const handlePagination = () => {
    onPage(elementRef.current);
  };

  return (
    <a
      href="#"
      onClick={handlePagination}
      ref={indicator.current}
      aria-current="page"
      className="relative z-10 inline-flex items-center border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-[#feda4a] hover:bg-gray-500 focus:z-20"
    >
      {indicator + 1}
    </a>
  );
};
