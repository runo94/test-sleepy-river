import React, { ReactNode } from 'react'
import { ILocation } from './types'
import Reviews from '../Reviews'
import './Location.scss'

const Location = (loc: ILocation): ReactNode => (
  <div className='Location'>
    <div className='Location__title'>
      {loc.name} (Id: {loc.id}, rating: {loc.overallRating})
    </div>

    <img
      className='Location__photo'
      alt={loc.name}
      src={loc.photo}
    />
 
    <div>{loc.description}</div>

    <div className='Location__reviews'>{Reviews(loc.reviewsForLocation, 3)}</div>
  </div>
)

export default Location
