import React from 'react'

const goHome = (...props) => {
  props.history.push('/')
}

function NotFound(...props) {
  return (
    <div>
      <button onClick={() => goHome(...props)}>Go Home</button>
    </div>
  )
}

export default NotFound
