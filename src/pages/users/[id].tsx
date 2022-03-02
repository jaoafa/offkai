// user

import { useParams } from 'react-router-dom'

// ----------------------------------------
// JSX
// ----------------------------------------

export const Page = () => {
  const { userId } = useParams()
  return (
    <div>
      <p>{userId}</p>
    </div>
  )
}
