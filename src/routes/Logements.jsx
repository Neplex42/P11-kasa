import LogementPage from '../pages/logement/LogementPage.jsx'
import { Navigate, useLoaderData, useNavigation } from 'react-router-dom'

export const logementLoader = async ({ logementsId }) => {
  try {
    const response = await fetch('/data/logements.json')
    const logements = await response.json()
    return {
      logement: logements.find(logement => logement.id === logementsId) || null
    }
  } catch {
    return { logement: null }
  }
}

const Logements = () => {
  const { logement } = useLoaderData()
  const { state } = useNavigation()

  if (state === 'loading') return <div>Loading...</div>

  return logement ? <LogementPage logement={logement} /> : <Navigate replace to='/404' />
}

export default Logements