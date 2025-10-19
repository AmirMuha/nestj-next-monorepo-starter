import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Developer Documentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/folder-structure" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Folder Structure</h2>
          <p>Understand the layout of the monorepo.</p>
        </Link>
        <Link href="/architecture" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">System Architecture</h2>
          <p>Learn about the high-level architecture of the system.</p>
        </Link>
        <Link href="/design-patterns" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Design Patterns</h2>
          <p>Explore the design patterns used in the project.</p>
        </Link>
      </div>
    </main>
  );
}
