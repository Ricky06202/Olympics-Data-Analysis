import type { OlympicsData } from '@dataAnalysis/constants/apiTypes'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface dataState{
    olympicsData: OlympicsData
    setData: (olympicsData: OlympicsData) => void
}

export const useDataStore = create<dataState>()(persist((set, get)=>({
    olympicsData: get()?.olympicsData ?? null,
    setData: (olympicsData)=>set({olympicsData}),
}),{name: 'dataStore'}))