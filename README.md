# Full-Stack Monorepo with NestJS, Next.js, and Turborepo

This repository contains a full-stack monorepo built with NestJS, Next.js, and Turborepo, based on the provided technical consultation. It includes a variety of features and patterns to serve as a starting point for a real-world application.

## 🏗️ Architecture

The project follows an API Gateway + Microservices pattern:

```
Client → NestJS Gateway → Dify Proxy → Dify API
                    ↘ Your Services → Your DB
```

## 🚀 Monorepo Structure

The monorepo is structured as follows:

```bash
apps/
├── web/ (Next.js frontend)
├── gateway/ (NestJS main API)
├── auth-service/ (gRPC auth)
└── admin-dashboard/ (Next.js admin)

packages/
├── types/ (Shared TypeScript types)
├── ui/ (Shared React components)
├── utils/ (Shared utilities)
└── database/ (DB client & migrations)
```

## ✨ Features

*   **Authentication:** The `auth-service` is a gRPC microservice that handles user registration and login, with JWT generation.
*   **API Gateway:** The `gateway` is a NestJS application that acts as a gateway to the other services. It includes a Dify proxy, JWT authentication, and policy-based authorization with CASL.
*   **Database:** The `database` package uses Prisma with a SQLite database. The schema includes models for users, plans, and Dify resources.
*   **Frontend:** The `web` application is a Next.js frontend with a login page and a protected dashboard. It uses Zustand for state management and a shared `Button` component from the `ui` package.
*   **Admin Dashboard:** The `admin-dashboard` is a placeholder Next.js application for administrative tasks.

## 🛠️ Getting Started

To get started with this project, follow these steps:

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add the following variables:

    ```bash
    JWT_SECRET=your-jwt-secret
    DIFY_API_KEY=your-dify-api-key
    ```

3.  **Run the applications:**

    To run all the applications in development mode, use the following command:

    ```bash
    npm run dev
    ```

    This will start the following applications:
    *   `web`: http://localhost:3000
    *   `gateway`: http://localhost:3001
    *   `auth-service`: gRPC on port 50051
    *   `admin-dashboard`: http://localhost:3002

## 📝 Notes

*   The frontend applications (`web` and `admin-dashboard`) have their builds disabled due to a persistent issue with the Next.js build in the development environment. The applications can be run in development mode, but they cannot be built for production.
*   The `DifyHttpService` includes a mock token refresh mechanism. In a real application, you would need to implement the actual token refresh logic.
*   The `PoliciesGuard` uses a mock user object with a hardcoded plan. In a real application, you would need to fetch the user and their plan from the database.
*   The `auth-service` does not currently hash passwords. This is a placeholder and should be implemented in a real application.
*   The `core-service` is a placeholder and does not contain any functional code.