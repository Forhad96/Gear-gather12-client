
```markdown
# Gear Gather

Gear Gather is a dynamic platform that empowers users to explore, contribute, and interact with a diverse array of products. Whether you're a user searching for the latest gear or an admin managing the platform, Gear Gather has you covered.
## Live Project

Check out the live project here: [Gear-gather](https://gear-gather07.web.app)
## Features

- **User Authentication System:**
  - Roles for normal users, moderators, and admins.
  - Secure JWT authentication and authorization.

- **Product Management:**
  - Browse, submit, upvote/downvote, and review products.
  - Moderators can review and approve/reject submitted products.
  - Admins can view statistics and manage users.

- **Subscription and Payment Integration with Stripe:**
  - Integrated payment system for premium subscriptions.
  - [Stripe](https://stripe.com/) is used for secure and seamless payment processing.

- **Responsive Homepage:**
  - Featured and trending products for an engaging landing experience.

- **Dynamic Product Listings:**
  - Searchable listings with pagination for easy exploration.

- **User Dashboard:**
  - Manage profile, submissions, and payments with a personalized dashboard.

## Tech Stack

- **Frontend:**
  - React
  - React Router
  - TanStack Query for efficient API handling

- **Backend:**
  - Node.js
  - Express
  - MongoDB with Mongoose ORM for database management

- **Authentication:**
  - JWT for secure user authentication and authorization.

- **Testing:**
  - React Testing Library for comprehensive tests.

- **Deployment:**
  - Deployed on Vercel for frontend and Render for backend.

## Installation

1. Clone the repository.
   ```bash
   git clone  https://github.com/programming-hero-web-course1/b8a12-client-side-Forhad96
   git clone  https://github.com/programming-hero-web-course1/b8a12-server-side-Forhad96
   ```

2. Navigate to the project directory.
   ```bash
   cd gear-gather
   ```

3. Install dependencies.
   ```bash
   npm install
   ```

4. Set up environment variables for MongoDB, JWT, and other configurations.

5. Run the development server.
   ```bash
   npm start
   ```

6. Visit `http://localhost:5000` to explore Gear Gather locally.

## Project Structure

```
gear-gather/
|-- frontend/
|   |-- src/
|   |   |-- assets/
|   |   |-- components/
|   |   |-- config/
|   |   |-- hooks/
|   |   |-- layout/
|   |   |-- pages/
|   |   |-- provider/
|   |   |-- router/
|   |   |-- shared/
|   |   |-- utils/
|   |   |-- App.js
|   |   |-- index.js
|-- backend/
|   |-- src/
|   |   |-- controllers/
|   |   |-- models/
|   |   |-- routes/
|   |   |-- utils/
|   |   |-- server.js
|-- README.md
|-- .gitignore
|-- .env.example
|-- package.json
```

## Usage

- **Homepage:**
  - Landing page with featured/trending products.

- **Product Details:**
  - View and interact with individual products.

- **Products:**
  - Searchable listings of all products.

- **User Dashboard:**
  - My profile, my products, add product, and more.

- **Moderator Dashboard:**
  - Review products, manage reports.

- **Admin Dashboard:**
  - Site statistics, manage users.

## Contributing

We welcome contributions! Please check out our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy exploring with Gear Gather! 🚀
```