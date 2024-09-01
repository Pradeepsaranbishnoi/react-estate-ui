import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Plcase</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi placeat exercitationem reiciendis dolorum adipisci! Corrupti impedit doloremque, rerum adipisci similique placeat! Esse nesciunt rerum, delectus odio sapiente quo dicta explicabo.
            </p>
            <SearchBar />
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
