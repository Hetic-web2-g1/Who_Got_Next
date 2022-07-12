import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import { useAuth } from "./../../contexts/AuthContext";

export const Form = ({ onSubmit, setContentSidebar }) => {
  const { currentUser } = useAuth();
  return (
    <div className="formContainer">
      <Link
        className="sidebar_back-link"
        to="#"
        onClick={() => setContentSidebar("menu")}
      >
        <img
          src="../../../../assets/left_arrow.svg"
          alt="left arrow"
          width="18"
          height="18"
        />
        Précédent
      </Link>
      <form onSubmit={onSubmit} className="formTrue">
        <div className="formHeader">
          <h4> Mon profil </h4>
          {/* requête patch à faire la */}
          <button className="formButton">Enregister</button> 
        </div>
        <div className="imgContainer">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
            alt="Avatar"
          ></img>
        </div>

        <div className="flex-field margin">
          <label htmlFor="description">Pseudo</label>
          <input className="form-control" id="Prénom" value={currentUser.pseudo} />
        </div>

        <div className="flex-field margin">
          <label htmlFor="email">Mail</label>
          <input
            type="email"
            className="form-control"
            value={currentUser.email}
            id="email"
            placeholder="name@example.com"
          />
        </div>

        <div className="flex-field margin">
          <label htmlFor="phone">Numéro de télephone</label>
          <input
            className="form-control"
            placeholder="06********"
            pattern="[0-9]{10}"
          />
        </div>

        <div className='hidden flex-field margin'>
          <label htmlFor="age">Age</label>
          <div className='inputwrappertwo'>
            <input onChange={e => setAge(e.target.value)} className='age' placeholder='Mois' type="date" value={currentUser.date_of_birth}/>
          </div>
        </div>

        <div className="flex-field margin">
          <label htmlFor="location">Adress </label>
          <input placeholder="Veuillez indiquer votre adresse" className="form-control" id="Adress" />
        </div>

        <div className="flex-field margin">
          <label htmlFor="location">Ville</label>
          <input placeholder="Veuillez indiquer votre ville" className="form-control" id="Town" />
        </div>

        <div className="flex-field margin">
          <label htmlFor="location">Code postal</label>
          <input placeholder="Veuillez indiquer votre code postal" className="form-control" id="PostalCode" />
        </div>
      </form>
      
      <div className="formButtonDelete">
        <button className="form-control btn btn-primary" type="submit">
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
};
export default Form;
