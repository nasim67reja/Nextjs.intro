import Link from "next/link";
const News = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/news/first">first</Link>
        </li>
        <li>
          <Link href="/news/second">second</Link>
        </li>
        <li>
          <Link href="/news/third">third</Link>
        </li>
      </ul>
    </div>
  );
};

export default News;
