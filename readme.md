Task-7
=======

**NOTE:** use NodeJS v10.0.0+ && MongoDB v4.0.0+

**!!! IMPORTANT !!!**
Pay attention to port your app is running on in console output. If it different from port in curl, replace it :wink:
Before each time you are going to restart server, delete all schemas (via MongoDB Compass, for exp.), please.

Run commands:
```
- npm install
- install MongoDB Compass
- Connect to MongoDB server and create an empty database "nodejs-test-db" via MongoDB Compass
- npm run dev

- curl -X GET localhost:9090/api/products
- curl -X GET localhost:9090/api/products/ "Get an id from table via MongoDB Compass"
- curl -X GET localhost:9090/api/products/ "Get an id from table via MongoDB Compass" /reviews
- curl -X POST --data "name=Valenki&brand=Reebok&price=500&options=[]&reviews=[]" localhost:9090/api/products
- curl -X POST --data "name=Super Valenki&brand=Nike&price=550&options=[]&reviews=[]" localhost:9090/api/products
- curl -X GET localhost:9090/api/users

```