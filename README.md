### Задание


Создать приложение приема платежей (Nextjs + Mantine или MUI, обязательное использовние кастомного CSS)

1) Добавить логин с помощью Google OAuth

2) Приложение должно выводить форму с полями:

-   Card Number
-   Expiration Date
-   CVV
-   Amount

3) Валидация:

-   Card Number - (только цифры, длина значения 16)
-   Expiration Date (формат даты MM/YYYY)
-   CVV (только цифры, длина значения 3)
-   Amount (только цифры)

4) Кнопка "оплатить":

-   должна быть активно если все поля введены корректно
-   при нажатии идет запрос на сервер с данными формы в формате JSON

5) CSS:

-   сделать фон градиентом с левого нижнего угла к правому верхнему
-   при наведение на кнопку курсором она должна плавно менять цвет слева на право
-   добавить тени для текстовых полей

6) Api :

-   должен сохранять данные в Redis или mongoDB
-   при успешном сохранении должнен возвращать ответ ID записи и Amount в формате JSON

пример запроса { "CardNumber": '0000000000000000', ExpDate: '04/2022', Cvv: '123', Amount: 100 }

пример ответа { "RequestId": '61b248040041bc64b411a691', Amount: 100 }

### Solution

  ![template](https://user-images.githubusercontent.com/67905360/174142901-7289cc91-2060-4399-98cc-481ebe30d19d.png)

#### Backend:

There is server on Next.js provides access to the API for passing and storing the payment entry. Entries are stored in MongoDB.

A secure route requires validation with Google 0Auth.

##### Route:

POST “/api/payment” route is secured. It accepts payment form data in JSON object format. It sends an id from the database and the “amount” value in response. Accepted values ​​are validated for characters validity and count. The transferred data is stored in the database, cvv saved as a hash.
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

##### Frontend:

A page using MUI components with custom styles.
Field values ​​are validated for the numbers and validity of characters, and the correctness of the date. After submitting the form data to the API route, the page renders returned from the API values ​.
  
How to launch

    mongod
    npm run start
  
##### Technology:
- API: next, next-auth, mongodb, mongoose, joi, bcrypt
- Frontend: next, react, yup
