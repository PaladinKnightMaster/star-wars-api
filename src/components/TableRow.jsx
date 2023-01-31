const TableRow = ({ char }) => {
  return (
    <tr
      key={char.id}
      className="border-b bg-transparent transition duration-300 ease-in-out hover:bg-gray-500"
    >
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-[#feda4a]">
        {char.name}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-[#feda4a]">
        {char.birth_year}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-[#feda4a]">
        {char.height}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-[#feda4a]">
        {char.mass}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-[#feda4a]">
        {char.homeworld}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-[#feda4a]">
        {char.species}
      </td>
    </tr>
  );
};

export default TableRow;
