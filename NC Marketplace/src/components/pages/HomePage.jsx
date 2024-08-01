import "../css/HomePage.css";
import { Search } from "../Search";
export const HomePage = () => {
  return (
    <>
      <header>
        <h1>Home</h1>
        <Search />
        <ul id="categories-container">
          <li>cat 1</li>
          <li>cat 2</li>
          <li>cat 3</li>
          <li>cat 4</li>
          <li>cat 5</li>
        </ul>
      </header>
      <main>
        <div id="front-image-container"></div>
        <h2>Top picks</h2>
        <section id="items-gallery">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </section>
      </main>
    </>
  );
};
