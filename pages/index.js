import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
    </div>
  );
}

export default Home;
