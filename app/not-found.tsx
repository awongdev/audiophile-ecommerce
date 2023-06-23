import Button from '@/components/ui/Button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <main>
      <title>404 - Page not found | Audiophile</title>
      <section className="flex h-screen max-h-[80vh] flex-col items-center justify-center gap-4 px-4 py-60 text-center">
        <h1 className="text-3xl md:text-5xl">Page not found</h1>
        <p className="text-xl md:text-2xl">
          Sorry, we could not find the page you were looking for.
        </p>
        <Link href="/">
          <Button colors="orange">Home</Button>
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
