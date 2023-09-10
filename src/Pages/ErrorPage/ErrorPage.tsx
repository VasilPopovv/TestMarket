import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const ErrorPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/', {replace: true})
    }, 2000)
  }, [navigate])

  return (
    <div>Error</div>
  )
}

export default ErrorPage