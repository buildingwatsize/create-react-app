import axios from "axios"
// import { TOKEN } from 'utils/constants'
// import { getCookie, removeCookie } from "utils/cookies"

axios.interceptors.request.use(
  async config => {
    // let token = await getCookie(TOKEN)
    // config.headers["token"] = `${token}`
    return config;
  },
  async error => {
    throw error
  },
)

// Redirect to login page in case of 401 response
axios.interceptors.response.use(
  async config => {
    return config
  },
  async error => {
    if (error.request === undefined) throw error

    if (error.request.status === 401) {
      console.log("Session expire, redirect to main page")

      // removeCookie(TOKEN)

      if (window.appHistory) {
        window.appHistory.push("/")
      }
    }

    throw error
  },
)

export default axios