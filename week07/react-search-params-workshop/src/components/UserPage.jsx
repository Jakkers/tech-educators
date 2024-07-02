import { useParams, Outlet, Link } from "react-router-dom";

export default function UserPage() {
  let { username } = useParams();
  return (
    <>
      <h2>User ID: {username}</h2>
      <Link to={`/users/${username}`}>Users profile</Link>
      <Link to={`/users/${username}/Likes`}>Users likes</Link>
      <Link to={`/users/${username}/posts`}>Users posts</Link>
      <Outlet />
    </>
  );
}
