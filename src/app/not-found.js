import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Page Not Found</p>

      <Link
        href="/"
        className="mt-5 px-4 py-2 bg-black text-white rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}