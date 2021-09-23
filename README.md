# TRIVIA APP

## overview

This application has been built in PostgreSQL, ExpressJS and NodeJS.
This is the backend module of TRIVIA application.

## requirements

Following are the requirements to run this project - 

- install NodeJS
- install PostgreSQL
- A database (only name, the migration files will do the rest)


###### To run this project, you need to clone this repo and enter following commands in Terminal -

- npm i

- npx sequelize-cli db:migrate

- npx sequelize-cli db:seed:all

- npm start

Note: It will run on port 8080.


## API's - 

#### login-
##### body-
```
{
    "name":"atul verma"
}
```
##### response-
```
{
    "message": "registered"
}
```
#### ques1-
##### response-
```
{
    "question": "Who is the best cricketer in the world?",
    "a": "A) Sachin Tendulkar",
    "b": "B) Virat Kohli",
    "c": "C) Adam Gilchirst",
    "d": "D) Jacques Kallis"
}
```
#### ques2-
##### response-
```
{
    "question": "What are the colors in the Indian national flag? Select all:",
    "a": "A) WHITE",
    "b": "B) YELLOW",
    "c": "C) ORANGE",
    "d": "D) GREEN"
}
```
#### summary-
##### body-
```
{
    "user_id":"1",
    "text":[{
        "question":"Who is the best cricketer in the world?",
        "answer":"Sachin Tendulkar"
        },
        {
        "question":"What are the colors in the Indian national flag? Select all:",
        "answer":["red","orange","green"]
    }]
}
```
##### response-
```
{
    "message": "Summary",
    "name": "Hello atul verma",
    "questions": [
        {
            "question": "Who is the best cricketer in the world?",
            "answer": "Sachin Tendulkar"
        },
        {
            "question": "What are the colors in the Indian national flag? Select all:",
            "answer": [
                "red",
                "orange",
                "green"
            ]
        }
    ]
}
```
#### history-
##### body-
```
{
    "user_id":"8"
}
```
##### response-
```
[
    {
        "message": "GAME 1 : 23rd September 9:16 PM",
        "name": "atul verma",
        "result": [
            {
                "question": "Who is the best cricketer in the world?",
                "answer": "Sachin Tendulkar"
            },
            {
                "question": "What are the colors in the Indian national flag? Select all:",
                "answer": [
                    "red",
                    "orange",
                    "green"
                ]
            }
        ]
    }
]
```



