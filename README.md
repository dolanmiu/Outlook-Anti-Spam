# Outlook Anti spam

> Outlook Mail Junk Mail Polling and Moving

This project is a Node.js application that polls your Outlook Mail inbox and moves junk mail to the Junk folder based on rules. It uses the Microsoft Graph API to access your email account and perform the necessary actions.

## Installation

To install this project, run the following command in your terminal:

```
npm install
```

This will install all the necessary dependencies required to run the application.

## Starting the Application

To start the application, run the following command in your terminal:

```
npm start
```

This will start the server and the application will be accessible at `http://localhost:3000/login`.

## Authentication

Before you can use the application, you need to authenticate with your Outlook Mail account. To do this, go to `http://localhost:3000/login` and follow the instructions to log in with your account.

The application uses the Microsoft Graph API under the hood, and refreshes the access token indefinitely to ensure that the application can continue to access your account.

---

## Made with ❤️

This project was made with love by its contributors.