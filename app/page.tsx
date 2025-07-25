import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">🐟 Discus-Tracker</h1>
      <p className="text-lg text-slate-300">Yapay zeka destekli akvaryum yönetimi</p>
      <button
        onClick={() => signIn('google')}
        className="mt-6 px-4 py-2 bg-teal-600 rounded text-white"
      >
        Google ile Giriş Yap
      </button>
    </main>
  );
}
