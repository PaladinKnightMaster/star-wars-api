const Search = ({ onSearch}) => {

     const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(e.target.search.value)
      e.target.reset(); 
    }


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0"
    >
      <input
        type="text"
        id="search"
        className="rounded-md border bg-white px-9 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 sm:mx-2"
        placeholder="Search characters"
        onChange={(e) => e.target.value}
      />
      <button
        type="submit"
        className="transform rounded-md bg-[#FB923C] px-5 py-1 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-[#FDBA74] focus:bg-[#EA580C] focus:outline-none sm:mx-2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
