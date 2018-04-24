# Star-Counter

A simple Github star counter using Redis 

## Endpoints

 * Healthcheck: *0.0.0.0:/healthcheck*
    * Response: 
    ```js
    { message: 'The API is working correctly!' }
    ```
  
  * Healthcheck: *0.0.0.0:/:username*
    * GitHub API Response: 
    ```js
    { totalStars: x, source: 'GitHub API' }
    ```
    * Redis Response: 
    ```js
    { totalStars: x, source: 'Redis Cache' }
    ```
    * Error Response: 
    ```js 
    { message: 'The GitHub username start could not be tracked. Try "dougtq" as an example!' } 
    ```

  * Check the response-time diference from the GitHub API Response to the Redis Response

## Built With

* [Express](http://expressjs.com/)
* [Redis](redis.io)
* [Axios](https://github.com/axios/axios)