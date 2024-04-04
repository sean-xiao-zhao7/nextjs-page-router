import Link from "next/link";

const NewsPage = () => {
    return (
        <>
            <h1>News page</h1>
            <Link href="news/news1">News 1</Link>
            <Link href="news/news2">News 2</Link>
        </>
    );
};

export default NewsPage;
