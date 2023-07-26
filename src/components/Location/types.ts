import { ReviewShape } from '../Reviews'

export interface ILocation {
  id: string
  name: string
  description: string
  photo: string
  overallRating: string
  reviewsForLocation: ReviewShape[]
}
