import React, { useState, useEffect } from "react";

import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";

export default function ListaAtletas() {
  const [countrySelect, setCountrySelect] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const medalsByAthlete = OlympicData.reduce((acc, data) => {
    const athlete = data.Athlete;
    const country = data.Country;
    acc[athlete] = acc[athlete] || {
      gold: 0,
      silver: 0,
      bronze: 0,
      total: 0,
      country: country,
    };
    acc[athlete][data.Medal.toLowerCase()]++;
    acc[athlete].total++;
    return acc;
  }, {});

  const countries = OlympicData.reduce((acc, data) => {
    const country = data.Country;
    acc[country] = acc[country] || {
      countryName: country,
    };
    return acc;
  }, {});

  const countriesNames = Object.values(countries).map(
    (country) => country.countryName
  );

  countriesNames.sort(function (a, b) {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  function selectionCountry(event) {
    setCountrySelect(event.target.value);
  }

  //Para los ordenar de ascendete y viceversa pendiente
  function sortAthletes(event) {
    setSortOrder(event.target.value);
  }

  const filterCountries = Object.entries(medalsByAthlete).filter((athlete) => {
    return countrySelect === "" || athlete[1].country === countrySelect;
  });

  return (
    <div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Resumen de Medallas
        </h3>
        <div className="flex justify-between">
          <select
            className=""
            name="countriesName"
            id="countriesName"
            value={countrySelect}
            onChange={selectionCountry}
          >
            <option value="">Todos</option>
            {countriesNames.map((country, name) => (
              <option key={country} value={country.name}>
                {country}
              </option>
            ))}
          </select>
          <select
            name="sortAthlete"
            id="sortAthlete"
            value={sortOrder}
            onChange={sortAthletes}
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
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
            {filterCountries.map(([athleta, medals]) => (
              <tr key={athleta}>
                <td className="px-6 py-4 whitespace-nowrap">{athleta}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {medals.country}
                </td>
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
