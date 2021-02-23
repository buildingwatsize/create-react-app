import React, { useState } from 'react'
import OverlayLoading from 'components/utils/OverlayLoading'

const AuthPage = () => {
  const [exampleLoading, setExampleLoading] = useState(true)
  setTimeout(() => {
    setExampleLoading(false)
  }, 3000);
  return (
    <div>
      Auth Page
      <br />
      (Only This Page will show loading for 3 seconds every render)
      {exampleLoading && <OverlayLoading active={true} />}
    </div>
  )
}

export default AuthPage
