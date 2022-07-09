import React from "react";
import './styles/style.css'

const PopupContent = ({ content }) => {
  return (
    <>
      <div className="popup-container">
        <div className="heading">
          <img
            width="100%"
            src={
              content?.image_path
                ? content?.image_path
                : "../../../assets/kirbok.jpg"
            }
          />
          {content.facility_name}
          {content.type}
        </div>
        Acces Handicapé : {content.handicap ? "oui" : "non"}
        Toilettes : {content.bathroom ? "oui" : "non"}
        Douches : {content.shower ? "oui" : "non"}
        Vestiaires : {content.dressing_room ? "oui" : "non"}
        Chauffage : {content.heating ? "oui" : "non"}
        Parking : {content.parking ? "oui" : "non"}
        Transport en commun : {content.public_transport ? "oui" : "non"}
        <a target="_new" href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}>
          Infos
        </a>
      </div>
    </>
  );
};

export default PopupContent;
