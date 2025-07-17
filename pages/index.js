import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">🐟 Discus-Trackerh</1>
      <p className="text-lg text-slate-300">Yapay zeka destekli akvaryum yönetimi</p>
      {!session && (
        <button
          onClick={() => signIn('google')}
          className="mt-6 px-4 py-2 bg-teal-600 rounded text-white"
        >
          Google ile Giriş Yap
        </button>
      )}
    </main>
  );
}
