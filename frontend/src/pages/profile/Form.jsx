import  {React, useState} from "react";
import "./form.css";
import { Link } from "react-router-dom";
import { useAuth } from "./../../contexts/AuthContext";
import { async } from "@firebase/util";

export const Form = ({ onSubmit, setContentSidebar }) => {

  const { currentUser, updateInfo } = useAuth();
  const [validation, setValidation] = useState("");
  
  let editedUser = {...currentUser};

  const [state, setState] = useState({
    pseudo: editedUser.pseudo,
    email: editedUser.email,
    phone_number: editedUser.phone_number,
    date_of_birth: editedUser.date_of_birth,
    adress: editedUser.adress,
    city: editedUser.city,
    postal_code: editedUser.postal_code,
    sexe: editedUser.sexe
  })

  console.log(state)

  const handleForm = async (e) => {
    e.preventDefault();

    // Pseudo validation
    if (state.pseudo === '') {
      setValidation("Veuillez renseignez votre pseudonyme");
      return;
    }

    try {
      console.log('coucou')
      await updateInfo(
        state.pseudo,
        state.email,
        state.date_of_birth,
        state.sexe,
        state.postal_code,
        state.adress,
        state.city,
        state.phone_number
      )
    } catch (err) {
      console.log('err', err);
    }
  }

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
      <form className="formTrue">
        <div className="formHeader">
          <h4> Mon profil </h4>
          <button onClick={handleForm} className="formButton" style={{cursor: "pointer"}}>Enregister</button>
        </div>

        <div className="imgContainer">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
            alt="Avatar"
          ></img>
        </div>

        <p className="flex error-profile">
          {validation}
        </p>

        <div className="flex-field margin">
          <label htmlFor="description">Pseudo</label>
          <input onChange={e => setState({...state, pseudo: e.target.value})} value={state.pseudo} className="form-control" id="Prénom" />
        </div>

        <div className="flex-field margin">
          <label htmlFor="email">Mail</label>
          <input
            type="email"
            onChange={e => setState({...state, email: e.target.value})}
            value={state.email}
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>

        <div className="flex-field margin">
          <label htmlFor="phone">Numéro de télephone</label>
          <input
            onChange={e => setState({...state, phone_number: e.target.value})}
            className="form-control"
            value={state.phone_number}
            placeholder="06********"
            pattern="[0-9]{10}"
          />
        </div>

        <div className='hidden flex-field margin'>
          <label htmlFor="age">Age</label>
          <div className='inputwrappertwo'>
            <input onChange={e => setState({...state, date_of_birth: e.target.value})} value={state.date_of_birth} className='age' placeholder='Mois' type="date"/>
          </div>
        </div>

        <div className="flex-field margin">
          <label htmlFor="location">Adress</label>
          <input onChange={e => setState({...state, adress: e.target.value})} value={state.adress} placeholder="Veuillez indiquer votre adresse" className="form-control" id="Adress" />
        </div>

        <div className="flex-field margin">
          <label htmlFor="location">Ville</label>
          <input onChange={e => setState({...state, city: e.target.value})} value={state.city} placeholder="Veuillez indiquer votre ville" className="form-control" id="Town" />
        </div>

        <div className="flex-field margin">
          <label htmlFor="location">Code postal</label>
          <input onChange={e => setState({...state, postal_code: e.target.value})} value={state.postal_code} placeholder="Veuillez indiquer votre code postal" className="form-control" id="PostalCode" />
        </div>
      </form>
    </div>
  );
};
export default Form;
