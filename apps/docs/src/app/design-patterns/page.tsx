import React from 'react';

const DesignPatternsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Design Patterns</h1>
      <p className="text-lg mb-4">
        This document describes the design patterns used in the project.
      </p>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Strategy Pattern</h2>
          <p>The Strategy Pattern is used in the AI proxy to allow for easy integration of different AI services. The <code>AiProxyService</code> uses a strategy (e.g., <code>DifyProxyStrategy</code>) to proxy requests to the appropriate AI service. This makes it easy to add new AI services in the future without modifying the existing code.</p>
        </div>
      </div>
    </div>
  );
};

export default DesignPatternsPage;
