import React from 'react';

const ArchitecturePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">System Architecture</h1>
      <p className="text-lg mb-4">
        This document provides an overview of the system architecture.
      </p>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">API Gateway</h2>
          <p>The API Gateway is the single entry point for all client requests. It is a NestJS application that routes requests to the appropriate microservices. It also handles cross-cutting concerns such as authentication, authorization, and logging.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">gRPC Microservices</h2>
          <p>The backend is composed of several microservices that communicate with each other using gRPC. This allows for a loosely coupled and scalable architecture.</p>
          <ul className="list-disc list-inside ml-4">
            <li><b>Auth Service:</b> Handles user authentication and authorization.</li>
            <li><b>Core Service:</b> Contains the core business logic of the application.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Frontend-Backend Communication</h2>
          <p>The Next.js frontend communicates with the NestJS gateway using tRPC, which provides end-to-end type safety. The gateway then communicates with the backend microservices using gRPC.</p>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturePage;
