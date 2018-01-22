import axios from 'axios'

import { getFromUsername, setFromUsername } from './../../helpers/redis'

// call the GitHub API to fetch information about the user's repositories
function getUserRepositories(user) {
  const githubEndpoint = 'https://api.github.com/users/' + user + '/repos' + '?per_page=100'
  return axios.get(githubEndpoint)
}

// add up all the stars and return the total number of stars across all repositories
function computeTotalStars(repositories) {
  return repositories.data.reduce((prev, curr) => {
    return prev + curr.stargazers_count
  }, 0)
}

function getTotalStars(username) {
  return new Promise((resolve, reject) => {
    getFromUsername(username)
      .then((data) => {
        return resolve(data)
      })
      .catch(() => {
        getUserRepositories(username)
        .then(computeTotalStars)
        .then((totalStars) => {
          // store the key-value pair (username:totalStars) in our cache
          // with an expiry of 1 minute (60s)
          // return the result to the user

          setFromUsername(username, totalStars)
    
          return resolve({ totalStars: totalStars, source: 'GitHub API' })
        }).catch((response) => {
            return reject({ message: 'The GitHub username start could not be tracked. Try "dougtq" as an example!' })
        })
      })
  })
}

export { getTotalStars }