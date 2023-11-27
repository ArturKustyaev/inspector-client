import { FieldPath } from 'react-hook-form'
import { CreateFormValues } from '../../CreateForm'

export const createFormWatchValues: FieldPath<CreateFormValues>[] = [
  'description',
  'discoveryDate',
  'district',
  'location',
  'title',
  'violationType',
]
