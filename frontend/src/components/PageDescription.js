import { useNavigate, NavLink } from "react-router-dom";

const PageDescription = ({ descriptions }) => {
  const navigate = useNavigate();
  return (
    <div className="pageDesc_main_content">
      {descriptions.map((description) => (
        <div className="desc_preview" key={description.id}>
          <p>{description.desc}</p>
          <NavLink className="link" to="/">
            <div className="Backbutton">
              <button>Go Back</button>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default PageDescription;
