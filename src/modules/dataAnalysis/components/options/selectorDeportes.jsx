import { useEffect, useState } from "react";
import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";

export default function SelectorDeportes({ setvalue }) {
  const [sportSelect, setSportSelect] = useState("");
  const sports = OlympicData.reduce((acc, data) => {
    const sport = data.Sport;
    acc[sport] = acc[sport] || {
      sportName: sport,
    };
    return acc;
  }, {});

  const sportsNames = Object.values(sports).map((sport) => sport.sportName);

  sportsNames.sort(function (a, b) {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  //Poner esta funcion para este componente y devolver el valor del select

  // function selectionCountry(event) {
  //   setCountrySelect(event.target.value);
  // }

  return (
    <select
      className=""
      name="sportName"
      id="sportsName"
      value={sportSelect}
      onChange={setvalue}
    >
      {sportsNames.map((sport, name) => (
        <option key={sport} value={sport.name}>
          {sport}
        </option>
      ))}
    </select>
  );
}
