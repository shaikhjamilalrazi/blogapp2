import styles from "./singlePost.module.css";

async function getSingleBlogPost(id) {
    const res = await fetch(
        `https://basic-blog.teamrabbil.com/api/post-details/${id}`
    );

    if (!res.ok) {
        throw new Error("Error fetching post");
    }

    return res.json();
}

const Post = async ({ params }) => {
    const id = params.id;

    const postPromise = getSingleBlogPost(id);
    const post = await postPromise;

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.postTitle}>{post.postDetails.title}</h1>
            <p className={styles.postContent}>{post.postDetails.content}</p>
            <p className={styles.postDate}>
                Date: {post.postDetails.created_at}
            </p>
        </div>
    );
};

export default Post;
