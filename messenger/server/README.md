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
The profileImageUrl is not required

## Signin Users Accounts
### If you want to signin users you have to make POST requests at:
[YOUR IP]/api/auth/signin
Your request should be like this.
http://locahost:8081/api/auth/signin email=user1@email.com password=12345
The profileImageUrl is not required

## Create Messages
### If you want to create messages you have to make POST requests at:
[YOUR IP]/api/users/[user id]/messages
Your request should be like this.
localhost:8081/api/users/[user id]/messages text=hello there
The profileImageUrl is not required
To make succefull request you have to be authenticated this is achieved by using bearer token authentication. We use the token that has been stored in the database for every user.

## Read Messages
### If you want to read messages you have to make GET requests at:
[YOUR IP]/api/messages
Your request should be like this.
localhost:8081/api/messages/
The profileImageUrl is not required
To make succefull request you have to be authenticated this is achieved by using bearer token authentication. We use the token that has been stored in the database for every user.

## Delete Messages
### If you want to delete messages you have to make DELETE requests at:
[YOUR IP]/api/users/[user id]/messages/[message id]
Your request should be like this.
localhost:8081/api/users/[user id]/messages/[message_id] text=hello there
The profileImageUrl is not required
To make succefull request you have to be authenticated this is achieved by using bearer token authentication. We use the token that has been stored in the database for every user.
