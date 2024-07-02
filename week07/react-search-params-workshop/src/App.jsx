import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import UserPostsPage from "./components/UserPostsPage";
import UserLikesPage from "./components/UserLikesPage";

export default function App() {
  return (
    <Routes>
      <Route path="/users/:username" element={<UserPage />}>
        <Route path="posts" element={<UserPostsPage />} />
        <Route path="likes" element={<UserLikesPage />} />
      </Route>
    </Routes>
  );
}
