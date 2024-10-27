import React from "react";

import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";

export default function MejoresAtletas() {
  const medalsByAthlete = OlympicData.reduce((acc, data) => {
    const athelete = data.Athlete;
    const country = data.Country;
    acc[athelete] = acc[athelete] || {
      gold: 0,
      silver: 0,
      bronze: 0,
      total: 0,
      country: country,
    };
    acc[athelete][data.Medal.toLowerCase()]++;
    acc[athelete].total++;
    return acc;
  }, {});

  const athleteDataGold = Object.entries(medalsByAthlete).map(
    ([athleteName, medals]) => ({
      nombre: athleteName,
      pais: medals.country || "País no especificado",
      medallasOro: medals.gold,
      medallasTotales: medals.total,
    })
  );

  const athleteDataSilver = Object.entries(medalsByAthlete).map(
    ([athleteName, medals]) => ({
      nombre: athleteName,
      pais: medals.country || "País no especificado",
      medallasOro: medals.silver,
    })
  );

  const athleteDataBronze = Object.entries(medalsByAthlete).map(
    ([athleteName, medals]) => ({
      nombre: athleteName,
      pais: medals.country || "País no especificado",
      medallasOro: medals.bronze,
    })
  );

  function athleteDataSort(ahtleteData) {
    const dataSort = ahtleteData;
    dataSort.sort((a, b) => {
      if (b.medallasOro !== a.medallasOro) {
        return b.medallasOro - a.medallasOro;
      }
      return b.total - a.total;
    });
    const top10Athletes = dataSort.slice(0, 10);
    return top10Athletes;
  }

  const top10AthletesGold = athleteDataSort(athleteDataGold);
  const top10AthletesSilver = athleteDataSort(athleteDataSilver);
  const top10AthletesBronze = athleteDataSort(athleteDataBronze);

  return (
    <div className="">
      <div className="mt-8 bg-white rounded-lg shadow">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Mayor Cantididad de Medallas de Oro Ganadas por Atleta
          </h3>
        </div>
        <div className="overflow-x-auto ">
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
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {top10AthletesGold.map((athlete) => (
                <tr key={athlete.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {athlete.nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {athlete.pais}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {athlete.medallasOro}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {athlete.medallasTotales}
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">{medals.gold}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {medals.silver}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {medals.bronze}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {medals.total}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
