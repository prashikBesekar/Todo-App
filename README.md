Features

✅ Real-time Messaging – Send and receive messages instantly
✅ User Authentication – Login/Signup with Firebase Auth
✅ User Profiles – Manage personal profile
✅ Contact List – Browse and chat with users
✅ Chat Threads – Organized conversation view
✅ Responsive Design – Works on desktop and mobile

🛠 Tech Stack

Frontend: React.js (Create React App)
Backend: Firebase (Authentication + Realtime Database)
Language: JavaScript
Styling: CSS

🚀 Getting Started
Prerequisites

Node.js (v14 or higher)
Firebase account

Installation

Clone the repositoryBashgit clone https://github.com/prashikBesekar/Real-Time-Chat.git
cd Real-Time-Chat
Install dependenciesBashnpm install
Setup Firebase
Create a new Firebase project
Enable Authentication (Email/Password)
Enable Realtime Database
Copy your Firebase config and replace it in src/Component/firebase.js

Run the applicationBashnpm startOpen http://localhost:3000 to view it in the browser.

📁 Project Structure
textsrc/
├── Component/
│   ├── Chat.js
│   ├── Contact.js
│   ├── Home.js
│   ├── Login.js
│   ├── Profile.js
│   ├── Thread.js
│   ├── UsersList.js
│   └── firebase.js
├── App.js
├── index.js
└── App.css
