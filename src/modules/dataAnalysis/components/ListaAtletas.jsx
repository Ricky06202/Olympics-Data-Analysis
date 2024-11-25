import { useState, useEffect } from "react";
import InputAtletas from "./options/inputAtletas";

import { useOlympicsData } from "@dataAnalysis/hooks/useOlympicsData";

export default function ListaAtletas() {
  const [atleteFilter, setAtleteFilter] = useState("");

  const olympicsData = useOlympicsData();

  if (!olympicsData) {
    return (
      <p className="flex justify-center items-center p-40 text-xl">Cargando</p>
    );
  }

  const medalsByAthlete = olympicsData.reduce((acc, data) => {
    const athlete = data.Athlete;
    const country = data.Country;
    acc[athlete] = acc[athlete] || {
      gold: 0,
      silver: 0,
      bronze: 0,
      total: 0,
      country: country,
      name: athlete,
    };
    acc[athlete][data.Medal.toLowerCase()]++;
    acc[athlete].total++;
    return acc;
  }, {});

  const filterAtletas = Object.values(medalsByAthlete).filter((atlete) => {
    if (atlete.name) {
      return (
        atlete.name.toLowerCase().includes(atleteFilter) ||
        atlete.country.toLowerCase().includes(atleteFilter)
      );
    }
    return false;
  });

  const handleFilter = (event) => {
    setAtleteFilter(event.target.value.toLowerCase());
  };

  return (
    <div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Resumen de Medallas por Atleta
        </h3>
        <InputAtletas value={atleteFilter} onChange={handleFilter} />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Atleta
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                País
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Oro
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plata
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bronce
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filterAtletas.map((athleta) => (
              <tr key={athleta}>
                <td className="px-6 py-4 whitespace-nowrap">{athleta.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {athleta.country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{athleta.gold}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {athleta.silver}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {athleta.bronze}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{athleta.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
