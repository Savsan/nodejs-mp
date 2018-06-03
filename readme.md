Task-4
=======

**NOTE:** use NodeJS v10.0.0+

**!!! IMPORTANT !!!**
Pay attention to port your app is running on in console output. If it different from port in curl, replace it :wink:

Run commands:
```
- npm install

- node --experimental-modules http-servers/html-server.mjs
  To check, enter in browser http://localhost:8080 then http://localhost:8081
  Stop server.

- node --experimental-modules http-servers/json-server.mjs
  To check, enter in browser http://localhost:8080
  Stop server.

- node --experimental-modules http-servers/plain-text-server.mjs
  To check, enter in browser http://localhost:8080
  Stop server.

- npm run dev

- curl -X GET localhost:8080/api/products
- curl -X GET localhost:8080/api/products/0
- curl -X GET localhost:8080/api/products/1
- curl -X GET localhost:8080/api/products/0/reviews
- curl -X POST --data "id=2&name=valenki&brand=nike&price=1000" localhost:8080/api/products
- curl -X POST --data "id=3&name=valenki&brand=nike&price=1000" localhost:8080/api/products
- curl -X POST --data "id=4&name=valenki&brand=nike&price=1000" localhost:8080/api/products
- curl -X GET localhost:8080/api/users

```