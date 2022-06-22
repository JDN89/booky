import axios from 'axios'
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: false,
})

// Add a response interceptor
apiClient.interceptors.response.use(async (response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, async (error) => {
  console.error(new Error(error))
  const { data, status, config, headers } = error.response

  switch (status) {
    case 400:
      console.error(new Error('display an not found error'))
      break

    case 401:
      // logout()
      break
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error.status)
})

export default {

  // ===========  User Requests  ===============

  async registerUser() {
    return await apiClient.get('books')
  },

  // ===========  Project Requests  ===============
  /*
  async getAllProjects(token: string) {
    return await apiClient.get('project', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
  */
  // async retrieveSession(token: string) {
  //   return await apiClient.post('account/retrieveSession', token)
  // },
}
