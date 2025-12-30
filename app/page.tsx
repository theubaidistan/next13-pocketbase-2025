import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Discover Some content</p>
      <h2>
        <Link href="/notes" className="btn">
          Explore And Fun
        </Link>
      </h2>
    </div>
  );
}
