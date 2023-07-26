import { ReviewShape } from '../Reviews'

export type Form = Pick<ReviewShape, 'id' | 'comment'> & { rating: string }

export const formDefault: Form = {
  id: 'loc-5',
  comment: '',
  rating: '',
}
 