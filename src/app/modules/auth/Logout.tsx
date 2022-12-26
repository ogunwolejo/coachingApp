import {useEffect} from 'react'
import {Navigate, Routes} from 'react-router-dom'

export function Logout() {
  useEffect(() => {
    //logout()
    document.location.reload()
  }, [])

  return (
    <Routes>
      <Navigate to='/auth/login' />
    </Routes>
  )
}
