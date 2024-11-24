import { useEffect, useState, useRef } from "react";
import CuadroMedalla from "./CuadroMedallas";
import DashboardCard from "./DashboardCard";
import { BarChart3 } from "components/icons/BarChart3";
import MedallasPorPais from "./MedallasPorPais";
import DashBoardSection from "./DashBoardSection";
import { ChevronDown } from "components/icons/ChevronDown";

import { useOlympicsData } from "modules/hooks/useOlympicsData";

export default function InfoPais() {
  const [countrySelect, setCountrySelect] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const olympicsData = useOlympicsData();

  if (!olympicsData) {
    return (
      <p className="flex justify-center items-center p-40 text-xl">Cargando</p>
    );
  }

  const countries = olympicsData.reduce((acc, data) => {
    const country = data.Country;
    acc[country] = acc[country] || {
      countryName: country,
    };
    return acc;
  }, {});

  const countriesNames = Object.values(countries).map(
    (country) => country.countryName
  );

  countriesNames.sort((a, b) => a.localeCompare(b));

  const filteredCountries = countriesNames.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function selectionCountry(country) {
    setCountrySelect(country);
    setSearchTerm(country);
    setIsOpen(false);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm("");
    }
  };

  return (
    <DashBoardSection titulo="Información del País">
      <div
        className="relative w-full max-w-xs mx-auto font-sans"
        ref={dropdownRef}
      >
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onClick={toggleDropdown}
            className="w-full px-4 py-2 text-lg text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Buscar país..."
          />
          <button
            onClick={toggleDropdown}
            className="absolute inset-y-0 right-0 flex items-center px-2"
            aria-label="Toggle dropdown"
          >
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>
        </div>
        {isOpen && (
          <ul
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
            role="listbox"
          >
            {filteredCountries.length === 0 ? (
              <li className="px-4 py-2 text-gray-500">
                No se encontraron países
              </li>
            ) : (
              filteredCountries.map((country, index) => (
                <li
                  key={index}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                    country === countrySelect ? "bg-blue-100" : ""
                  }`}
                  onClick={() => selectionCountry(country)}
                  role="option"
                  aria-selected={country === countrySelect}
                >
                  {country}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
      <CuadroMedalla pais={countrySelect} />
      <DashboardCard
        titulo="Historial de Medallas"
        icon={<BarChart3 className="w-6 h-6 text-gray-600" />}
      >
        <MedallasPorPais countryName={countrySelect} />
      </DashboardCard>
    </DashBoardSection>
  );
}
