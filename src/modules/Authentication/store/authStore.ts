import type { User } from '@dataAnalysis/constants/authTypes'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface userState {
  user: User | null
  setUser: (user: User | null) => void 
  token: string | null
  setToken: (token: string | null) => void
}



export const useUserStore = create<userState>()(persist((set, get)=>({
    user: get()?.user ?? null,
    setUser: (user)=>set({user}),

    token: get()?.token ?? null,
    setToken: (token)=>set({token}),

}),{name: 'userStore'}),)
