# Getting Started with SimpleMesseger API

## How to run.
To run the server first of all you will need to have Nodejs installed to your system then type on the commandline:
node index OR nodemon.

# TESTING

## Create Users Accounts
### If you want to create users you have to make POST requests at:
[YOUR IP]/api/auth/signup
Your request should be like this.
http://locahost:8081/api/auth/signup email=user1@email.com username=user1 password=12345 profileImageUrl=[some_url_]
#### The profileImageUrl is not required

### If you want to signin users you have to make POST requests at:
[YOUR IP]/api/auth/signup
Your request should be like this.
http://locahost:8081/api/auth/signin email=user1@email.com username=user1 password=12345 profileImageUrl=[some_url_]
The profileImageUrl is not required

### If you want to see users messages you have to make GET requests at:
[YOUR IP]/api/users/:id/messages
Your request should be like this.
http://locahost:8081/api/users/[User Id]/messages 
To make succefull requiest you have to be authenticated this is achieved by using bearer token authentication. We use the token that has been stored in the database for every user
