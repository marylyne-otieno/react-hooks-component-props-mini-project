/*import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";


test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});
*/
import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import posts from "../data/posts"; 

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About
        image="https://via.placeholder.com/215"
        about="About this blog"
      />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;