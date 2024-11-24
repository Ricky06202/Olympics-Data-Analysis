import { useEffect, useState } from "react";
import { useDataStore } from "@dataAnalysis/store/dataStore";
import { getData } from "@dataAnalysis/services/dataAPI";

export function useOlympicsData(){
    const olympicData = useDataStore((state)=> state.olympicsData)
    const setData = useDataStore((state)=> state.setData)

    useEffect(() => {
    getData().then((response) => {
      setData(response);
    });
    }, []);
    return olympicData

}