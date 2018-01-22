import { createClient } from 'redis'

const redisConn = createClient()

redisConn.on('error', function (err) {
  console.log(err)
})

function getFromUsername (username = 'dougtq') {
  return new Promise((resolve, reject) => {
    // use the redis client to get the total number of stars associated to that
    // username from our redis cache

    redisConn.get(username, (error, result) => {
      if (error) return reject(Error())

      if (!result) return reject(Error())
      // the result exists in our cache - return it to our user immediately
      return resolve({ totalStars: result, source: 'Redis Cache' })
    })
  })
}

function setFromUsername (username = 'dougtq', totalStars = 0) {
  return redisConn.setex(username, 60, totalStars)
}

export { getFromUsername, setFromUsername }
