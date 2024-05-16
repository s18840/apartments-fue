import "../styles/Apartment.scss";
function Facilities(props) {
    return (
        <div className="apartment-basic">
          <div className="basic-container">
            <span className="material-icons-outlined">person</span>
            <p>{props.people}</p>
          </div>
          <div className="basic-container">
            <span className="material-icons-outlined">bed</span>
            <p>{props.beds}</p>
          </div>
          <div className="basic-container">
            <span className="material-icons-outlined">shower</span>
            <p>1</p>
          </div>
          <div className="basic-container">
            <span className="material-icons-outlined">pool</span>
            <p>1</p>
          </div>
          <div className="basic-container">
            <span className="material-icons-outlined">straighten</span>
            <p>
                {props.surface}m<sup>2</sup>
            </p>
          </div>
        </div>
    );
  }
  
  export default Facilities;