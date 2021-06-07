# Final Project

Install the starter project: `npm install`

**Hint**: All commands should be run in this directory!

## How to use

To start server and react simultaneoustly use
`npm start`

To start each separately (in two separate terminals): `npm start:server` and `npm start:front`

## Requirements

Create an application that has a login and register flow plus at least one complete CRUD interface for any entity you want.

**Register**: users should enter "email", "password", "first name", "last name" and if you want accept other fields as well.

**Login** with email and password.

Validate all fields!

Treat both exceptional and normal flows! Exceptional flows are errors. For example, if you try to create, update or delete a resource you should get an error if you are not logged in. If you mistype your password you also get an error, etc.

Display all error messages to the user!

## Recommendations

The entity you choose should not be trivial (like todo, post)! Have an entity with multiple fields (like movies).

You could have multiple related entities, this would be very apreciated. Like for example comments for posts

You could also have multiple entities like for example a shopping cart and products, or a favorites list for every user.

Don't let unauthorized users edit, delete or create the resource.

When editing the resource pre-fill the edit form.

When deleting the resource ask for confirmation from the user (display a message with an OK and a Cancel button so that the user can cancel the delete). Maybe create a small modal.

If you use pictures for your entity, host them somewhere else and use absolute URLs in your entity. For example store the images on flickr and use the url to display the image on the page.

## Configuring the server

In order for the server to protect your routes you need to configure the server by editing routes.json.

See the example for posts and users.

Use these numbers to control how the resource behaves (Leave users as 660, your other resources should probably be 664 but see the table below):

| Route | Resource permissions                                                                       |
| ----- | ------------------------------------------------------------------------------------------ |
| 664   | User must be logged to write the resource. Everyone can read the resource.                 |
| 660   | User must be logged to write or read the resource.                                         |
| 644   | User must own the resource to write the resource. Everyone can read the resource.          |
| 640   | User must own the resource to write the resource.User must be logged to read the resource. |
| 600   | User must own the resource to write or read the resource.                                  |
| 444   | No one can write the resource. Everyone can read the resource.                             |
| 440   | No one can write the resource. User must be logged to read the resource.                   |
| 400   | No one can write the resource. User must own the resource to read the resource.            |

## How auth is handled

### Register 👥

Any of the following routes registers a new user :

```
POST /register
POST /signup
POST /users
```

`email` and `password` are required in the request body:

```
POST /register
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```

The password is encrypted. The response contains the JWT access token (expiration time of 1 hour) :

```
201 Created
{
  "accessToken": "xxx.xxx.xxx"
}
```

#### Other properties

Any other property can be added to the request body without being validated :

```
POST /register
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd",
  "firstname": "Olivier",
  "lastname": "Monge",
  "age": 32
}
```

#### Update

Any update to an existing user (via PATCH or PUT methods) will go through the same process for email and password.

### Login 🛂

Any of the following routes logs an existing user in :

```
POST /login
POST /signin
```

`email` and `password` are required, of course :

```
POST /login
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```

The response contains the JWT access token (expiration time of 1 hour) :

```
200 OK
{
  "accessToken": "xxx.xxx.xxx"
}
```

### JWT payload 📇

The access token has the following claims :

```
sub : the user id (as per the JWT specs).
email : the user email.
```

## Working with the token to get the user id

`npm install jwt-decode`

In your react component where you need the id just:

```
import jwt_decode from "jwt-decode";

const token = "eyJ0eXAiO.../// jwt token";
const decoded = jwt_decode(token);
```

You get the token from logging in and registering use `jwt_decode` on that.
