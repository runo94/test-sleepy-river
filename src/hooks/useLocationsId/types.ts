import { ILocation } from '../../components/Location'

export interface UseLocationsIdProps {
  lastLocationId: ILocation['id'] | undefined
  getLocationsIdLoading: boolean
}
