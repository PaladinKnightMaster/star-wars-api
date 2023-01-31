import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { PaginationNumber } from "./PaginationNumber";

export default function Pagination({ pages, next, previous, onPage }) {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-transparent px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          onClick={previous}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-[#feda4a] hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          onClick={next}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-[#feda4a] hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              onClick={previous}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-transparent px-2 py-2 text-sm font-medium text-[#feda4a] hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {pages.map((element, i) => (
              <PaginationNumber key={i} indicator={i} onPage={onPage} />
            ))}
            <a
              href="#"
              onClick={next}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-transparent px-2 py-2 text-sm font-medium text-[#feda4a] hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
