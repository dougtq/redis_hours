# Star-Counter

A simple Github star counter using Redis 

## Endpoints

 * Healthcheck: *0.0.0.0:/healthcheck*
    * Response: ``` { message: 'The API is working correctly!' }```
  
  * Healthcheck: *0.0.0.0:/:username*
    * GitHub API Response: ```{ totalStars: x, source: 'GitHub API', code: 200 }```
    * Redis Response: ```{ totalStars: x, source: 'Redis Cache' }```
    * Error Response: ``` { message: 'The GitHub username start could not be tracked. Try "dougtq" as an example!', code: 4xx } ```

  * Check the response-time diference from the GitHub API Response to the Redis Response

## Built With

* [Express](http://expressjs.com/)
* [Redis](redis.io)
* [Axios](https://github.com/axios/axios)