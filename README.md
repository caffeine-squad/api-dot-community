# API dot Community

CRUD API for organ donation system.

## Installation

Use the package [npm](https://https://www.npmjs.com/) to install the backend API requirements.

```bash
npm install 
```
Use the package [npx](https://https://www.npmjs.com/) to install the database ORM for nodejs with postgresql or other MSDB you preference: [prisma](https://www.prisma.io/)

```bash
npx prisma migrate dev
```
## Usage

Comand to run migrations:
```bash
npx prisma migrate dev --name initial
```
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

<ul>
  <li>{{ _.host }}/user</li>
  <li>{{ _.host }}/address</li>
  <li>{{ _.host }}/comorbidity</li>
  <li>{{ _.host }}/comment</li>
  <li>{{ _.host }}/topic</li>
  <li>{{ _.host }}//authenticate</li>
</ul>


JSON example return an user with GET ( `GET /user/` ): 

```bash
   {
      "_id": "req_08edc1a07cd04bf49af837549fd94ee4",
      "parentId": "fld_f46ea64fe36541c6bb8cf3f5c96016a4",
      "modified": 1666489007713,
      "created": 1666477300667,
      "url": "{{ _.host }}/user",
      "name": "findAll",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
    }
```
JSON example to create an user with POST ( {{ _.host }}/user ): 
```bash
{
      "_id": "req_d0b4664de66b4006a429ab31d5adfcba",
      "parentId": "fld_f46ea64fe36541c6bb8cf3f5c96016a4",
      "modified": 1666489043977,
      "created": 1666477257601,
      "url": "{{ _.host }}/user",
      "name": "Create",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n    \"name\":\"admin\",\n    \"email\": \"admin@admin\",\n    \"birthDate\": \"2020-10-12\",\n    \"cellPhone\": \"88888888\",\n    \"password\": \"admin\",\n    \"userTypeId\": 1,\n    \"organUser\": [{\"organId\": 1}],\n    \"address\": {\n        \"address\":\"teste2\",\n        \"cep\": \"6200000\",\n        \"number\": 1,\n        \"complement\": \"asdasd\",\n        \"district\": \"teste\",\n        \"city\": \"teste\",\n        \"uf\": \"teste\"\n    }\n}"
      }
```

 
