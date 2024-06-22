# Netbook (Obsidian like Graph) Backend

Welcome to the backend repository for Netbook, a complex graph management system named Netbook using the MERN stack, enabling users to create, update, and delete nodes and edges to form relationships. Initially a free trial system with quota monitoring for limited 6 nodes and 4 edges hence encouraging user to upgrade via Stripe payment for a increase in quota.

## Technologies Used

- **Nest.js**: Backend runtime environment.
- **Express.js**: Web framework for Nest.js, used for routing and middleware.
- **MongoDB**: NoSQL database used for storing user and driver data, ride details, and wallet transactions.
- **JWT (JSON Web Tokens)**: Used for authentication and authorization.
- **Bcrypt**: Hashing library for securing user passwords.
- **Other Dependencies**: Check `package.json` for a full list.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/arsalantanvir97/NetBookServer.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the server:**
    ```bash
    npm start:dev
    ```

## Usage

Once the server is running, user can sign up for an account or log in if you already have one. Once logged in, you can create nodes and edges to form relationships.

