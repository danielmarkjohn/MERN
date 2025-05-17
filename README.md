# 🚀 MERN + GRAPHQL + HYBRID TENANT

A **full-stack project starter** built with the **MERN stack** (MongoDB, Express, React, Node.js) and **GraphQL**. This application allows you to manage clients and their associated projects with a modern, responsive interface.

---

## ✨ Features

- 👤 **Client Management**: Add, update, and remove clients  
- 📁 **Project Tracking**: Create and manage projects with status tracking  
- 🔗 **GraphQL API**: Modern API architecture with efficient data fetching  
- 📱 **Responsive Design**: Built with Tailwind CSS for a mobile-first experience  
- 🔒 **TypeScript Support**: Type-safe code with TypeScript interfaces and models  

---

## 🚀 Live Demo

🔗 **[View Live Demo](#)** (Coming Soon)

---

## 📸 Screenshots

> _Add screenshots here when available._

---

## 🛠️ Tech Stack

### Backend

- **Node.js** – JavaScript runtime  
- **Express** – Web framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  
- **GraphQL** – API query language  
- **Apollo Server** – GraphQL server  

### Frontend

- **React** – UI library  
- **Apollo Client** – GraphQL client  
- **TypeScript** – Type-safe JavaScript  
- **Tailwind CSS** – Utility-first CSS framework  
- **React Router** – Client-side routing  

---

## 🏗️ Architecture

### The application follows a clean architecture pattern:

- Server: GraphQL API with MongoDB database
- Client: React app with Apollo Client for data fetching
- Models: TypeScript interfaces and classes
- Services: Business logic layer for data operations

---

## 🚦 Getting Started

### ✅ Prerequisites

- Node.js (v14+)  
- MongoDB (local or Atlas)  
- npm or yarn  

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/project-management-dashboard.git
cd project-management-dashboard
# Server dependencies
npm install

# Client dependencies
cd client
npm install
cd ..

# Create a .env file in the root directory:

NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string

# Create a .env file in the client directory:

REACT_APP_API_URL=http://localhost:5000/graphql

# Run both server and client
npm run dev

# Run server only
npm run server

# Run client only
npm run client

```
---

## 🌐 Access the Application

- Server: http://localhost:5000/graphql
- Client: http://localhost:3000

## 🌐 Project Structure

```bash
mern/
├── client/                 # React frontend
│   ├── public/             # Static files
│   ├── src/                # Source files
│   │   ├── @apollo/        # Apollo client setup
│   │   ├── components/     # UI components
│   │   ├── config/         # Configuration files
│   │   ├── entities/       # Domain entities
│   │   │   ├── client/     # Client entity
│   │   │   └── project/    # Project entity
│   │   ├── pages/          # Page components
│   │   └── types/          # TypeScript types
│   └── package.json        # Client dependencies
├── server/                 # Node.js backend
│   ├── models/             # Mongoose models
│   ├── schema/             # GraphQL schema
│   └── index.js            # Server entry point
└── package.json            # Server dependencies
```
---

## 📝 API Documentation

### 🔍 Queries
- clients: Get all clients
- client(id: ID!): Get a single client by ID
- projects: Get all projects
- project(id: ID!): Get a single project by ID

### ✏️ Mutations
- addClient(name: String!, email: String!, phone: String!): Create a new client
- updateClient(id: ID!, name: String, email: String, phone: String): Update an existing client
- deleteClient(id: ID!): Delete a client
- addProject(name: String!, description: String, status: String, clientId: ID!): Create a new project
- updateProject(id: ID!, name: String, description: String, status: String): Update an existing project
- deleteProject(id: ID!): Delete a project
---

## 🧪 Testing

### Run server tests
- npm run test:server

### Run client tests
- npm run test:client
---

## 🚢 Deployment

### Server Deployment
Deploy the server to any Node.js hosting service (Heroku, DigitalOcean, AWS, etc.).

### Client Deployment
Deploy the React client to services like Netlify, Vercel, or GitHub Pages.
--- 

## 🤝 Contributing

- Fork the repository
- Create your feature branch (git checkout -b feature/amazing-feature)
- Commit your changes (git commit -m 'Add some amazing feature')
- Push to the branch (git push origin feature/amazing-feature)
- Open a Pull Request
---

## 📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

--- 
# Made with ❤️ by Daniel Mark

# Feel free to replace placeholder links and “Your Name” with your actual details!
---