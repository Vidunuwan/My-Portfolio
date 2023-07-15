import Navbar from "../navbar/Navbar";
import Typed from "react-typed";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar />
      <div className="about-me">
        <div className="title-name">
          <h1>
            <Typed
              strings={["Hi my name is Umayanga Vidunuwan"]}
              typeSpeed={40}
              loop={false}
            />
          </h1>
        </div>
        <div className="title-professions-start">
          <h2>
            I'm{" "}
            <Typed
              className="title-professions"
              strings={["Software Engineer", "Full stack developer"]}
              typeSpeed={100}
              loop={true}
            />
          </h2>
        </div>
      </div>
    </>
  );
}
export default Header;
