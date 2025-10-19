import React from 'react';

const FolderStructurePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Folder Structure</h1>
      <p className="text-lg mb-4">
        This document outlines the folder structure of the monorepo.
      </p>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold"><code>/apps</code></h2>
          <p>This directory contains all the applications in the monorepo. Each application is a separate Next.js or NestJS project.</p>
          <ul className="list-disc list-inside ml-4">
            <li><code>/admin-dashboard</code>: The admin dashboard application (Next.js).</li>
            <li><code>/auth-service</code>: The authentication microservice (NestJS).</li>
            <li><code>/core-service</code>: The core microservice (NestJS).</li>
            <li><code>/docs</code>: This documentation application (Next.js).</li>
            <li><code>/gateway</code>: The API gateway (NestJS).</li>
            <li><code>/web</code>: The main web application (Next.js).</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold"><code>/packages</code></h2>
          <p>This directory contains shared packages that are used by multiple applications.</p>
          <ul className="list-disc list-inside ml-4">
            <li><code>/proto</code>: The gRPC protocol buffers.</li>
            <li><code>/types</code>: Shared TypeScript types and interfaces.</li>
            <li><code>/ui</code>: Shared UI components.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FolderStructurePage;
