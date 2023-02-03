import TableRow from "./TableRow";



const TableList = ({ characters }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b bg-transparent">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-[#feda4a]"
                  >
                    First
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-[#feda4a]"
                  >
                    Birth date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-[#feda4a]"
                  >
                    Height
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-[#feda4a]"
                  >
                    Mass
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-[#feda4a]"
                  >
                    Homeworld
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-[#feda4a]"
                  >
                    Species
                  </th>
                </tr>
              </thead>
              <tbody>
                {characters.map((character) => (
                  <TableRow key={character.id} char={character} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableList;

