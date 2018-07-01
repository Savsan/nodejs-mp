Task-5
=======

**NOTE:** use NodeJS v10.0.0+

**!!! IMPORTANT !!!**
Pay attention to port your app is running on in console output. If it different from port in curl, replace it :wink:
To check auth via **local strategy** use Postman.

Run commands:
```
- npm install
- npm run dev

Local auth:
- Send post request to localhost:8080/auth/local with credentials:
    username: padawan
    password: 123
- Copy from the response access token
- Send get request with header of x-access-token you copied to localhost:8080/api/users

Google auth:
- To login visit localhost:8080/auth/google via browser

Facebook auth:
- To login visit localhost:8080/auth/facebook via browser

Twitter auth:
- To login visit localhost:8080/auth/twitter via browser

```