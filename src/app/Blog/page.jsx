import Link from "next/link";

import styles from "./blog.module.css";

async function getPosts() {
    const res = await fetch(
        "https://basic-blog.teamrabbil.com/api/post-newest"
    );
    return res.json();
}

const Blog = async () => {
    const data = await getPosts();
    return (
        <div className={styles.container}>
            <h1>Blog Posts</h1>
            <br />
            <ul className={styles.postList}>
                {data.map((post) => (
                    <li key={post.id} className={styles.postItem}>
                        <Link href={`/Blog/${post.id}`}>
                            <span className={styles.postLink}>
                                {post.title}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
