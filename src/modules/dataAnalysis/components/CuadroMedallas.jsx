import React from "react";
import DashboardCard from "./DashboardCard";
import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";

import { Medal } from "components/icons/Medal";

export default function CuadroMedalla({ pais }) {
  const medalsByCountry = OlympicData.reduce((acc, data) => {
    const country = data.Country;
    acc[country] = acc[country] || {
      gold: 0,
      silver: 0,
      bronze: 0,
    };
    acc[country][data.Medal.toLowerCase()] =
      (acc[country][data.Medal.toLowerCase()] || 0) + 1;
    return acc;
  }, {});

  const filterCountries = Object.entries(medalsByCountry).filter((country) => {
    return country[0] === pais;
  });

  return (
    <div className="">
      {filterCountries.map(([country, medals]) => (
        <div
          key={country}
          className="flex flex-1 space-x-4 justify-between m-8"
        >
          <DashboardCard>
            <div className="flex flex-col gap-6 m-6 items-center justify-center">
              <Medal className="text-yellow-400 w-[150px] h-[150px]" />
              <p className="text-6xl">{medals.gold}</p>
            </div>
          </DashboardCard>
          <DashboardCard>
            <div className="flex flex-col gap-6 m-6 items-center justify-center">
              <Medal className="text-zinc-400 w-[150px] h-[150px]" />
              <p className="text-6xl">{medals.silver}</p>
            </div>
          </DashboardCard>
          <DashboardCard>
            <div className="flex flex-col gap-6 m-6 items-center justify-center">
              <Medal className="text-amber-700 w-[150px] h-[150px]" />
              <p className="text-6xl">{medals.bronze}</p>
            </div>
          </DashboardCard>
        </div>
      ))}
    </div>
  );
}
