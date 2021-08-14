# Tickatus - ticketing app
Ticketing app created with Node.js and MongoDB

# Technologies
Project is created with the use of following libraries:
* node.js version: 14.17.3
* axios version: 0.21.1
* body-parser version: 1.19.0
* cookie-parser version: 1.4.5
* cors version: 2.8.5
* dotenv version: 10.0.0
* express version: 4.17.1
* express-react-views version: 0.11.0
* jsonwebtoken version: 8.5.1
* mongoose version: 5.13.5
* node-fetch version: 2.6.1
* react version: 17.0.2
* react-dom version: 17.0.2

# Setup
To run this project, install it locally using npm:

```
$ cd ./server
$ npm install
$ npm run app
```

Create **.env** file inside of the **server** directory, which will contain database connection information:
```
DB_CONNECTION = mongodb+srv://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]

```

Insert document into the **users** collection inside your database:
![image](https://drive.google.com/uc?export=view&id=1IPQcon-9HhmN3ZmM0wKwlS-DJNwuYAwj)

Now you can log in using those credentials at **http://localhost:3000**


