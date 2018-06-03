Task-4
=======

**NOTE:** use NodeJS v10.0.0+

Run commands:
```
- npm install
- npm run dev

**NOTE:** Pay attention to port your app is running on in console output. If it different from port in curl, replace it :wink:

- curl -X GET localhost:8080/api/products
- curl -X GET localhost:8080/api/products/0
- curl -X GET localhost:8080/api/products/1
- curl -X GET localhost:8080/api/products/0/reviews
- curl -X POST --data "id=2&name=valenki&brand=nike&price=1000" localhost:8080/api/products
- curl -X POST --data "id=3&name=valenki&brand=nike&price=1000" localhost:8080/api/products
- curl -X POST --data "id=4&name=valenki&brand=nike&price=1000" localhost:8080/api/products
- curl -X GET localhost:8080/api/users

```