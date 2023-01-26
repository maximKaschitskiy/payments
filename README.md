## Payment (fullstack)

### Release:

http://datasub-test.vercel.app/

### Description: 

Fullstack payment form with Google 0Auth. Successful payments adds in MongoDB. Forms and requests are validated.

  ![template](https://user-images.githubusercontent.com/67905360/174142901-7289cc91-2060-4399-98cc-481ebe30d19d.png)

#### Backend:

There is server on Next.js provides access to the API for passing and storing the payment entry. Entries are stored in MongoDB.

A secure route requires validation with Google 0Auth.

##### Routes:

POST “/api/payment” route is secured. It takes payment form data in JSON object format. It sends an id from the database and the “amount” value in response. Taked values are validated for characters validity and count. The transferred data is stored in the database, cvv saved as a hash.
Request example:

      {
        "cardNumber": "0000000000000000",
        "expDate": "04/2022",
        "cvv": "123",
        "amount": "100"
      }

Answer example:

    {
      "amount": "100",
      "_id": "62ab5ebbeac809feb4f71fd5"
    }

#### Frontend:

A page using MUI components with custom styles.
Field values are validated for the numbers and validity of characters, and the correctness of the date. After submitting the form data to the API route, the page renders returned from the API values.
  
#### How to launch:

    mongod
    npm run start
  
##### Technology:
- API: next, next-auth, mongodb, mongoose, joi, bcrypt
- Frontend: next, react, yup
