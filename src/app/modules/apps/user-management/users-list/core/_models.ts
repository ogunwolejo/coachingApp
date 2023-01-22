import {ID, Response} from '../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  clientName?: string
  projectNo?: string
  coach?: string
  seniorCoach?: string
  joined_day?: string
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  clientName: '',
  projectNo: '',
  coach: '',
  seniorCoach: '',
}
