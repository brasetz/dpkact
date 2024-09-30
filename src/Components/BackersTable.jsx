import React from "react";

const BackersTable = () => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-neutral-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-neutral-400"
                  >
                    Backer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-neutral-400"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-neutral-400"
                  >
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                {[0, 1, 2, 3, 4, 5].map((backer, idx) => (
                  <tr
                    key={idx}
                    className="cursor-pointer hover:bg-white/10 ease-in-out duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-200">
                      John Brown
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-200">
                      45
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm  text-neutral-200">
                      September 14, 2024
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackersTable;
