import React, { useEffect, useState } from "react";
import CuadroMedalla from "./CuadroMedallas";
import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";
import SelectorPaises from "./options/selectorPaises";
// import SelectorDeportes from "./options/selectorDeportes";

export default function InfoPais() {
  const [countrySelect, setCountrySelect] = useState("");
  const [sportSelect, setSportSelect] = useState("");

  function selectionCountry(event) {
    setCountrySelect(event.target.value);
  }

  // function selectionSport(event) {
  //   setSportSelect(event.target.value);
  // }

  return (
    <div>
      <div className="flex justify-between">
        <SelectorPaises setvalue={selectionCountry} />
        {/* <SelectorDeportes setvalue={selectionSport} /> */}
      </div>
      <CuadroMedalla pais={countrySelect} />
    </div>
  );
}
