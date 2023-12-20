import { useState } from "react";
import usePost from "./hooks/usePost";

const PostList = () => {
  const pageSize = 10;

  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading } = usePost({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Prev
      </button>
      <button
        disabled={page === 5}
        onClick={() => setPage(page + 1)}
        className="btn btn-primary my-3 ms-1"
      >
        Next
      </button>
    </>
  );
};

export default PostList;
