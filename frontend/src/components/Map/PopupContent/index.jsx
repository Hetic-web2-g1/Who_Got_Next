import React , {useState} from "react";
import "./styles/style.css";

const PopupContent = ({ content }) => {
  const options = [
    { label: "Acces Handicapé", value: content.handicap ? "oui" : "non" },
    { label: "Toilettes", value: content.bathroom ? "oui" : "non" },
    { label: "Douches", value: content.shower ? "oui" : "non" },
    { label: "Vestiaires", value: content.dressing_room ? "oui" : "non" },
    { label: "Chauffage", value: content.heating ? "oui" : "non" },
    { label: "Parking", value: content.parking ? "oui" : "non" },
    {
      label: "Transport en commun",
      value: content.public_transport ? "oui" : "non",
    },
  ];
  const [isOpen, setIsOpen] = useState(false)
  const onClick = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="popup-container">
        <div className="popup-heading">
          <img
            className="image"
            width="30%"
            src={
              content?.image_path
                ? content?.image_path
                : "../../../assets/kirbok.jpg"
            }
          />
          <div className="popup-heading-detail">
            <span className="facility_name">{content.facility_name}</span>
            <span className="facility_type">{content.type}</span>
            <div className="dropdown-header" onClick={onClick}>Details</div>
          </div>
        </div>
        {isOpen && (
          <div className="popup-content">
              {options.map((option) => (
                <div> {option.label} : {option.value}</div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PopupContent;
