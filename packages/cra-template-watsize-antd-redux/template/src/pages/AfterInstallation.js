import React from 'react'

const styles = {
  borderGradient: {
    margin: '20px',
    padding: '20px',
    border: '10px solid',
    borderImageSlice: '1',
    borderWidth: '5px',
    borderImageSource: 'linear-gradient(to left, #743ad5, #d53a9d)',
  },
  highlightText: {
    color: '#d53a9d'
  },
  listMarker: {
    listStyleType: "thai"
  },
  miniNote: {
    fontSize: "0.7rem",
    color: '#743ad5'
  }
}

function AfterInstallation() {
  return (
    <div style={styles.borderGradient}>
      <h1>After Installation</h1>

      <div>You have to edit some text/title in below this</div>
      <div style={styles.highlightText}>trick: use "find all and replace"</div>

      <ul style={styles.listMarker}>
        <li>REPLACE_WITH_YOUR_APP_NAME</li>
        <li>REPLACE_WITH_YOUR_APP_DESCRIPTION</li>
        <li>REPLACE_WITH_YOUR_APP_API</li>
        <li>REPLACE_WITH_YOUR_APP_GIT_LINK</li>
        <li>REPLACE_WITH_YOUR_PROJECT_NAME</li>
        <li>REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT</li>
      </ul>

      <span style={styles.miniNote}>Note: REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT should be like "sub.host.com:9000" or "172.1.2.3:9000"</span>
    </div>
  )
}

export default AfterInstallation
