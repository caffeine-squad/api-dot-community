# API dot Community

A community where people can get informed and share content about organ donation

## Installation
Use the package [npm](https://https://www.npmjs.com/) to install the backend API requirements.

```bash
npm install 
```
Use the package [npx](https://https://www.npmjs.com/) to install the database ORM for nodejs with postgresql or other MSDB you preference: [prisma](https://www.prisma.io/)

### Environment Configuration
For this next step it is necessary to have the .env file configured, locate the .env.example file and rename it to .env, then modify the environment variables according to your settings.
```bash
npx prisma migrate dev
```
## Usage

Comand to run seed:
```bash
 npx prisma db seed
```
Comand to run server API
```bash
npm rum dev
```

## API Endpoints

For performing basic CRUD (Create, Read, Update, Delete) operations.

General endpoints:

  - /user
  - /address
  - /comorbidity
  - /comment
  - /topic
  - /authenticate

All information in requests added from the "🗝️" icon are routes that require user authentication (token).

All information in requests added from the "👤" icon are routes that require admin authentication (token).

Use the authetication route to get a token.

## User
- Create User `POST` ( /user )

    JSON example  
```bash
{
    "name":"admin",
    "email": "admin@admin",
    "birthDate": "2020-10-12",
    "cellPhone": "88888888",
    "password": "admin",
    "userTypeId": 1,
    "organUser": [{"organId": 1}],
    "address": {
        "address":"teste2",
        "cep": "6200000",
        "number": 1,
        "complement": "asdasd",
        "district": "teste",
        "city": "teste",
        "uf": "teste"
    }
}
```
- 👤 Find All `GET` ( /user )
- 👤 Find By Id `GET` ( /user/:id )

## Address
- Find By CEP `GET` ( https://viacep.com.br/ws/(:cep)/json )

## Comorbidity 
- 🗝️ Create Comorbidity `POST` ( /comorbidity )

    JSON example  
```bash
{
	"description": "cancer"
}
```
- 🗝️ Find All `GET` ( /comorbidity )
- 👤 Update `PUT` ( /comorbidity/:id )
- 👤 Delete `DELETE` ( /comorbidity/:id )

## Topic 
- 🗝️ Create Topic `POST` ( /topic )

    JSON example  
```bash
{
	"title": "Teste",
	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	"userId": 1
}
```
- 🗝️ Find All `GET` ( /topic )
- 🗝️ Update `PUT` ( /topic/:id )
- 🗝️ Delete `DELETE` ( /topic/:id )
## Comment 
- 🗝️ Create Comment `POST` ( /comment )

    JSON example  
```bash
{
	"userId":1,
	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	"topicId":2
}
```
- 👤 Find All `GET` ( /comment )
- 🗝️ Update `PUT` ( /comment/:id )
- 🗝️ Delete `DELETE` ( /comment/:id )

## Authetication
- Login `POST` ( /authenticate )

    JSON example  
```bash
{
	"email":"admin@admin",
	"password":"admin"
}
