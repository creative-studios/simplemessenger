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

### If you want to signin users you have to make POST requests at:
[YOUR IP]/api/auth/signin
Your request should be like this.
http://locahost:8081/api/auth/signin email=user1@email.com password=12345
The profileImageUrl is not required

### If you want to see users messages you have to make GET requests at:
[YOUR IP]/api/users/:id/messages
Your request should be like this.
http://locahost:8081/api/users/[User Id]/messages 
To make succefull requiest you have to be authenticated this is achieved by using bearer token authentication. We use the token that has been stored in the database for every user.

### If you want to create messages you have to make POST requests at:
[YOUR IP]/api/users/[message id]/messages
Your request should be like this.
localhost:8081/api/users/61718798f4a3b0bd32bc484b/messages text=hello there
The profileImageUrl is not required
To make succefull requiest you have to be authenticated this is achieved by using bearer token authentication. We use the token that has been stored in the database for every user.

### If you want to read messages you have to make get requests at:
[YOUR IP]/api/messages
Your request should be like this.
localhost:8081/api/messages/
The profileImageUrl is not required
To make succefull requiest you have to be authenticated this is achieved by using bearer token authentication. We use the token that has been stored in the database for every user.


