import React, { useEffect, useState } from "react";
import CuadroMedalla from "./CuadroMedallas";
import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";

export default function InfoPais() {
  const [countrySelect, setCountrySelect] = useState("");
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

  return (
    <div>
      <div className="flex justify-between">
        <select
          className=""
          name="countriesName"
          id="countriesName"
          value={countrySelect}
          onChange={selectionCountry}
        >
          {countriesNames.map((country, name) => (
            <option key={country} value={country.name}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <CuadroMedalla pais={countrySelect} />
    </div>
  );
}
