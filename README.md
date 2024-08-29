
# MERN Stack Card Management System

This project is a simple MERN stack application for managing and displaying cards. It includes both a backend and a frontend.

## Project Structure

- **Backend**: Provides APIs for creating, retrieving, and managing cards.
- **Frontend**: Fetches and displays the cards.

## Setup and Installation

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm (or Yarn)
- MongoDB (for local or remote database)

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ansariafzal-ka/fullstack-assignment.git
   cd fullstack-assignment

2. **Install Dependencies**

   ```bash
   npm install

3. **Create a .env File**

   Create a `.env` file in the backend folder with the following content:

   ```bash
   PORT=YOUR_PORT_HERE
   MONGODB_URI="YOUR_MONGODB_CONNECTION_STRING_HERE"

Replace YOUR_PORT_HERE with the port number you want to use (e.g., 5000), and YOUR_MONGODB_CONNECTION_STRING_HERE with your Mongodb database connection string.

4. **Run The Server**

   ```bash
   cd backend
   node server.js

The server will now be running on http://localhost:YOUR_PORT_HERE. You can check if it's running by visiting http://localhost:YOUR_PORT_HERE/ping.

5. **Run the Client**

   ```bash
   cd frontend
   npm run start

The client will now be running on http://localhost:3000.
