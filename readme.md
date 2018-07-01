Task-5
=======

**NOTE:** use NodeJS v10.0.0+ && PostgreSQL v10+

**!!! IMPORTANT !!!**
Pay attention to port your app is running on in console output. If it different from port in curl, replace it :wink:
To check auth via **local strategy** use Postman.

Run commands:
```
- npm install
- npm install -g sequelize-cli (if not installed)
- sequelize db:create (from root directory of the project)
- sequelize db:migrate
- npm run dev

- curl -X GET localhost:9090/api/products
- curl -X GET localhost:9090/api/products/0
- curl -X GET localhost:9090/api/products/0/reviews
- curl -X POST --data "name=Valenki&brand=Nike&price=1000&options=[]&reviews=[]" localhost:9090/api/products
- curl -X POST --data "name=Super Valenki&brand=Nike&price=1000&options=[]&reviews=[]" localhost:9090/api/products
- curl -X GET localhost:9090/api/users

```