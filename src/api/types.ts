import { ILocation } from '../components/Location'

export interface GetLocationsIdData {
  locations: Pick<ILocation, 'id'>[]
}

export interface GetLocationData {
  location: ILocation
}

export interface GetLocationInput {
  id: ILocation['id']
}
 