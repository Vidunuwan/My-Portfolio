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
        <div className="title-professions">
          <h1>
            I'm{" "}
            <Typed
              strings={["Software Engineer", "Full stack developer"]}
              typeSpeed={100}
              loop={true}
            />
          </h1>
        </div>
      </div>
    </>
  );
}
export default Header;
