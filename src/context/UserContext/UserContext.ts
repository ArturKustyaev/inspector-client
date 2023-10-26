import { createContext } from 'react'
import { UserContextProps } from './UserContext.types'

export const UserContext = createContext<UserContextProps | undefined>(undefined)
