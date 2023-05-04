# Whitflix
Whitflix is a React application designed to mimic the functionality of the popular streaming service Netflix. With Whitflix, users can browse and stream movies and TV shows from a variety of genres, as well as create their own watchlists.

## Installation
To run Whitflix, you'll need to have Node.js and npm installed on your machine. Once you've confirmed that Node.js and npm are installed, you can clone this repository and navigate to the project directory in your terminal. Then, run the following command to install all required dependencies:

```
npm install
```

###
Firebase
Whitflix uses Firebase as its backend, so you'll need to set up a Firebase project and add your Firebase configuration to a .env file in the project directory.

In your Firebase console, create a new project and enable Firebase Authentication, Firestore, and Storage. Then, navigate to the project settings and find your Firebase configuration. It should look something like this:

```
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```
Copy your Firebase configuration and create a new file in the project directory called .env. Inside this file, add the following lines:

```
REACT_APP_FIREBASE_CONFIG = {your-firebase-config-here}
REACT_APP_STORAGE_BUCKET_URL = {your-storage-bucket-url-here}
```
Replace {your-firebase-config-here} with your Firebase configuration object and {your-storage-bucket-url-here} with the URL of your Firebase Storage bucket. Make sure that both objects are enclosed in quotes.

### Usage
To run Whitflix, use the following command:

```
npm start
```
This will start the development server on http://localhost:3000/.

### Contributions
Contributions to Whitflix are welcome and encouraged. If you'd like to contribute to this project, please create a pull request with your proposed changes.
