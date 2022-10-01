import CardComponent from "../components/CardComponent";
import { NavLink } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="HomeScreen">
        <div className="HomeScreen_Title">
            <p>A Website on Asgard</p>
        </div>

      <div className="HomeScreen_Cards">
        <div className="card">
          <NavLink className="link" to="/history">
            <CardComponent card_title={"History"} />
          </NavLink>
        </div>

        <div className="card">
          <NavLink className="link" to="/culture">
            <CardComponent card_title={"Culture"} />
          </NavLink>
        </div>

        <div className="card">
          <NavLink className="link" to="/geography">
            <CardComponent card_title={"Geography"} />
          </NavLink>
        </div>

        <div className="card">
          <NavLink className="link" to="/language">
            <CardComponent card_title={"Language"} />
          </NavLink>
        </div>
      </div>
      <p>© Rajat Kumar Nayak</p>
    </div>
  );
}
export default HomeScreen;
