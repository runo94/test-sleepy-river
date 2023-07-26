import { Dispatch, ReactNode, SetStateAction } from 'react'
import { ILocation } from '../../components/Location'

export interface LocationBoxContextProviderProps {
  children: ReactNode
}

export interface LocationBoxContextProps {
  location?: ILocation
  setLocation: Dispatch<SetStateAction<ILocation | undefined>>
  shouldReload: boolean
  setShouldReload: Dispatch<SetStateAction<boolean>>
}

export const locationBoxContextDefault: LocationBoxContextProps = {
  location: undefined,
  setLocation: () => void {},
  shouldReload: false,
  setShouldReload: () => void {},
}
