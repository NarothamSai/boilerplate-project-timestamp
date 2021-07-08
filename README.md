
# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

The frontend and backend is forked from freecodecamp bolierpate. Added two API endpoints which fulfills following use cases.

## Use cases
- [x] A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

- [x] A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

- [x] A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

- [x] Your project can handle dates that can be successfully parsed by new Date(date_string)

- [x] If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

- [x] An empty date parameter should return the current time in a JSON object with a unix key

- [x] An empty date parameter should return the current time in a JSON object with a utc key

## API Endpoints

1. Get current timestamp

```
GET /api 
Response: 
status code: 200 
Body:
{
  "unix": 1624685327000,
  "utc": "Saturday, 26 June 2021 10:58:47 GMT"
}
```

2. Get timestamp of given date

```
GET /api/:date
Response:
status code : 200
Body:
{
  "unix": 1624685327000,
  "utc": "Saturday, 26 June 2021 10:58:47 GMT"
}
{
  "error": "Invalid Date"
}
```
