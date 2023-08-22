import Link from "next/link";

async function getCategories() {
    const res = await fetch(
        "https://basic-blog.teamrabbil.com/api/post-categories"
    );
    return res.json();
}

export default async function Home() {
    const data = await getCategories();
    return (
        <div className="container">
            <h1>Welcome to My Blog!</h1>
            <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {data.map((item, index) => {
                    return <li key={index.toString()}>{item["name"]}</li>;
                })}
            </ul>
            <Link href="/Blog">
                <span className="link">Go to Blog</span>
            </Link>
        </div>
    );
}
