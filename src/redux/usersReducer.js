const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let installState = {
  users: [
    {
      id: 1,
      followed: true,
      photoUser:
        'https://7zabav.club/wp-content/uploads/2019/03/na_avu_smeshnye_zhivotnye_4_26083031-587x600.jpg',
      fullName: 'Dmitriy',
      status: 'Hello people!',
      location: { city: 'Pskov', country: 'Russia' }
    },
    {
      id: 2,
      followed: false,
      photoUser:
        'https://7zabav.club/wp-content/uploads/2019/03/na_avu_smeshnye_zhivotnye_4_26083031-587x600.jpg',
      fullName: 'Dmitriy',
      status: 'Hello people!',
      location: { city: 'Pskov', country: 'Russia' }
    },
    {
      id: 3,
      followed: false,
      photoUser:
        'https://7zabav.club/wp-content/uploads/2019/03/na_avu_smeshnye_zhivotnye_4_26083031-587x600.jpg',
      fullName: 'Dmitriy',
      status: 'Hello people!',
      location: { city: 'Pskov', country: 'Russia' }
    },
    {
      id: 4,
      followed: true,
      photoUser:
        'https://7zabav.club/wp-content/uploads/2019/03/na_avu_smeshnye_zhivotnye_4_26083031-587x600.jpg',
      fullName: 'Dmitriy',
      status: 'Hello people!',
      location: { city: 'Pskov', country: 'Russia' }
    },
    {
      id: 5,
      followed: true,
      photoUser:
        'https://7zabav.club/wp-content/uploads/2019/03/na_avu_smeshnye_zhivotnye_4_26083031-587x600.jpg',
      fullName: 'Dmitriy',
      status: 'Hello people!',
      location: { city: 'Pskov', country: 'Russia' }
    }
  ]
}

const usersReducer = (state = installState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        })
      }
      case SET_USERS:
        return {
          ...state,
          users: [...state.users, action.users]
        }
    default:
      return state
  }
}

export const followAC = userId => ({ type: FOLLOW, userId })

export const unfollowAC = userId => ({ type: UNFOLLOW, userId })

export const setUsersAC = users => ({ type: SET_USERS, users})

export default usersReducer
