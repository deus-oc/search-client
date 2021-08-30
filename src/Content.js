import './Content.css';
import svgIcon from './icon.svg';
export const Content = ({data}) => {
    return(
        data ?  
        <div className="top">
            <div className="container">
            <div className="left">
                <div className="left-image"><img src={svgIcon} alt="dummy" height="100" width="100"/></div>
                <div className="left-text">
                    <div>{data.Name} <i style={{color: "blue"}}className="fas fa-external-link-alt"></i></div>
                    <div style={{color: "blue" ,fontSize: "small"}}>{data.website}<i className="fas fa-globe"></i></div>
                    <div style={{fontSize: "small"}}>{data.Location}</div>
                    <div><i style={{backgroundColor: "lightblue", padding: "1px"}} className="fa fa-linkedin " aria-hidden="true"></i>
            </div>
                </div>
            </div>
            <div className="center">
                <div className="num-employees">
                    <div>
                        <span><i className="fas fa-user-friends"></i></span>
                    </div>
                    <div className="num-emp-content">
                        <span>{Math.floor(Math.random() * 100)}</span>
                        <span>Employees</span>
                    </div>    
                </div>
                <div className="num-employees">
                    <div >
                        <span><i className="fas fa-globe"></i></span>
                    </div>
                    <div className="num-emp-content">
                        <span>Motor</span>
                        <span>Industry</span>
                    </div>                    
                </div>
            </div>
            <div className="right">
                <p className="paragraph r-blue"> last activity : Last 1 year </p>
                <p className="paragraph r-darkblue">owner:{data.Owner}</p>
                <p className="paragraph r-orange">Opportunities:{Math.floor(Math.random() * 100)}</p>             
                <p className="paragraph r-grey">Is Customer</p>
                <p className="paragraph r-orange">Not in salesLoft</p>
            </div>
        </div>     
            <div className="bottom">
                <p className="b"> lorem </p>
                <p className="b"> ipsum </p>
                <p className="b"> accredited public e-learning </p>             
                <p className="b"> florida </p>
                <p className="b">Not in salesLoft</p>
            </div>
        </div>
        : <></>
    );
}