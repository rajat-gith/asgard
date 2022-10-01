import {useNavigate,NavLink} from 'react-router-dom'


const PageDescription = ({descriptions}) => {
    const navigate= useNavigate()    
    return ( 
        <div className="pageDesc_main_content">
            {descriptions.map((description)=>(
                <div className="desc_preview" key={description.id}>
                    <p>{description.desc}</p>
                    <NavLink to="/">
                        <button>Go Back</button>
                    </NavLink>
                </div>
            ))}
        </div>
    );
}
 
export default PageDescription;