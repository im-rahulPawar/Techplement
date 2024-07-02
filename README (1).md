
# Quote of the Day

This is a REST API for giving Quote of the day message to users.


## Running Tests

To start the server, use Terminal

```bash
  nodemon index.js
```
Now use POSTMAN for below commands.

1. To get the Quote of the day, use GET method-

```bash
localhost:3500/
```

2. To get all Quotes, use GET method-
```bash
localhost:3500/quotes
```
3. To create a new quote, use POST method-
```bash
localhost:3500/quotes
```
write your quote in JSON format in body, example:
{
  "quote": "Your quote"
}

4. To update any quote, use PUT method-
```bash
localhost:3500/quotes/:quoteId
```
write your new quote in JSON format in body, example:
{
  "text": "New Quote"
}

5. To delete any quote, use DELETE method-
```bash
localhost:3500/quotes/:quoteId
```

