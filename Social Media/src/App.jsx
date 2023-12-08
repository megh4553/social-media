import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Sidebar from "./component/sidebar";
import Createpost from "./component/createPost";
import PostList from "./component/postList";


import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <Createpost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
