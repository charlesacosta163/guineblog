This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# About Guineblog

Guineblog is a small full-stack project and a simple blogging app that enables you to write blogs and post them into the database, as well as post comments to each blog and filter categories.

## Technologies and APIs Used

* Next.js 14
* Clerk API (Auth system)
* MongoDB
* Express.js
* Tailwind CSS
* TypeScript

## Getting Started

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
2. **Clerk Account**: Sign up for a Clerk account at [clerk.dev](https://clerk.dev/).
3. **MongoDB**: You can either set up MongoDB locally or use MongoDB Atlas.

### Setting Up Clerk

1. **Sign Up**: Go to [Clerk](https://clerk.dev/) and sign up for an account.
2. **Create an Application**: Once logged in, create a new application. This will give you access to the API keys you need.
3. **Get API Keys**: Navigate to your application settings to find your API keys.

### Setting Up MongoDB

#### Option 1: Using MongoDB Atlas

1. **Sign Up**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for a free account.
2. **Create a Cluster**: Follow the instructions to create a new cluster.
3. **Get Connection String**: After creating your cluster, get your connection string. Make sure to replace `<password>` with your database user password and `<dbname>` with your database name.
4. **Environment Variables**: Add your MongoDB Atlas connection string to your `.env.local` file:

    ```env
    MONGODB_URI=<your-mongodb-atlas-connection-string>
    ```

#### Option 2: Using Local MongoDB

1. **Install MongoDB**: Follow the instructions on the [MongoDB installation page](https://docs.mongodb.com/manual/installation/) to install MongoDB on your local machine.
2. **Start MongoDB**: Start the MongoDB server by running:

    ```sh
    mongod
    ```

3. **Environment Variables**: Add your local MongoDB connection string to your `.env.local` file:

    ```env
    MONGODB_URI=mongodb://localhost:27017/<your-db-name>
    ```

### Configuring Your Project

1. **Environment Variables**: Ensure your `.env.local` file includes the following variables with your Clerk and MongoDB configuration:

    ```env
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
    CLERK_API_KEY=<your-clerk-api-key>
    CLERK_SECRET_KEY=<your-clerk-secret-key>
    MONGODB_URI=<your-mongodb-connection-string>
    ```

2. **Install Dependencies**: Run the following command to install all necessary dependencies:

    ```sh
    npm install
    ```

3. **Run the Development Server**: Start the development server with:

    ```sh
    npm run dev
    ```

4. **Run the Backend Server**: Start the Express backend server with:

    ```sh
    npm run backend
    ```

### Notes

1. Updating and deleting blogs is not possible yet for this project.

Open [http://localhost:3000](http://localhost:3000) with your browser to utilize the app :D.

### Additional Configuration

Refer to the [Clerk documentation](https://docs.clerk.dev/) for more detailed configuration options and advanced usage.
