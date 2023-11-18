import React from "react";
import blogData from "../data/blog";
import About from 
"./About";
import Header from "./Header";

import ArticleList from "./ArticleList";


//console.log(blogData);

function App() {
  const posts = blogData.posts
  

  return (
    <div className="App">
    <Header name="Underreacted" />
    <aside>
      <About />
    </aside>
    <main>
      <ArticleList />
    </main>
  </div>
  );
}

export default App;
