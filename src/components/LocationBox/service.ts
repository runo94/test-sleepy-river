import { Dispatch, SetStateAction } from 'react'
import { LazyQueryExecFunction } from '@apollo/client'
import { ApiShape } from '../../api'
import { ILocation } from '../Location'

export default class LocationBoxService {
  static fetchLocation = ({
    lastLocationId,
    getLocation,
    setLocation,
    setShouldReload, 
  }: {
    lastLocationId: string
    getLocation: LazyQueryExecFunction<ApiShape.GetLocationData, ApiShape.GetLocationInput>
    setLocation: Dispatch<SetStateAction<ILocation | undefined>>
    setShouldReload: Dispatch<SetStateAction<boolean>>
  }) =>
    void getLocation({ variables: { id: lastLocationId } }).then(res => {
      const { data } = res

      if (data) {
        const { location } = data

        setLocation(location)
        setShouldReload(false)
      }
    })
}
