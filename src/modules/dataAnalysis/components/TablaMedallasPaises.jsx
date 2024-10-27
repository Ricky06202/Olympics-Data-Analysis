import React from "react";

import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";

export default function TablaMedallasPaises() {
  const medalsByCountry = OlympicData.reduce((acc, data) => {
    const country = data.Country;
    acc[country] = acc[country] || {
      gold: 0,
      silver: 0,
      bronze: 0,
      total: 0,
    };
    acc[country][data.Medal.toLowerCase()]++;
    acc[country].total++;
    return acc;
  }, {});

  return (
    <div className="mt-8 bg-white rounded-lg shadow">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Resumen de Medallas
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
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
            {Object.entries(medalsByCountry).map(([country, medals]) => (
              <tr key={country}>
                <td className="px-6 py-4 whitespace-nowrap">{country}</td>
                <td className="px-6 py-4 whitespace-nowrap">{medals.gold}</td>
                <td className="px-6 py-4 whitespace-nowrap">{medals.silver}</td>
                <td className="px-6 py-4 whitespace-nowrap">{medals.bronze}</td>
                <td className="px-6 py-4 whitespace-nowrap">{medals.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
