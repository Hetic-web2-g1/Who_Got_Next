import React, {useState} from "react";
import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
export const Form = () => {
    const [description, setDescription] = useState();
    const [place, setPlace] = useState();
    const [date, setDate] = useState();
    const [capacity, setCapacity] = useState();
    const [access, setAccess] = useState(false);
    const [sport, setSport] = useState();
    const [level, setLevel] = useState();
    const [handi, setHandi] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const form = {
            "description": description,
            "place": place,
            "date": date,
            "capacity": capacity,
            "access": access,
            "sport": sport,
            "level": level,
            "handi": handi,
        }
        console.log(form)
    }

    return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <h4> WHO GOT NEXT </h4>
        <span>Renseignez les details de la partie</span>
      </div>

      <label htmlFor="sport">Sport</label>
      <select for="sport" id="sport" onChange={e => setSport(e.target.value)}>
        <option> Football </option>
        <option> Volleyball </option>
        <option> Handball </option>
        <option> BasketBall </option>
        <option> Judo </option>
        <option> Rugby </option>
      </select>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input className="form-control" id="description" onChange={e => setDescription(e.target.value)} placeholder="description de l'évenement"/>
      </div>

      <div className="form-group">
        <label htmlFor="location">Lieu</label>
        <input className="form-control" id="location" onChange={e => setPlace(e.target.value)} placeholder="Lieu de l'évenement"/>
      </div>

      <div className="form-toggle">
        <span> Accessibilité handicapes </span>
        <ToggleSwitch onChange={e => setAccess(e.target.value)}/>
      </div>

      <div className="form-date">
        <div className="date">
          <label htmlFor="location"> Date </label>
          <input type="date" className="form-control-date" id="location" onChange={e => setDate(e.target.value)}/>
        </div>
        <div className="date">
          <label htmlFor="location"> À partir de </label>
          <input type="time" className="form-control-hour" id="location"/>
        </div>
        <div className="date">
          <label htmlFor="location"> Jusqu'à </label>
          <input type="time" className="form-control-hour" id="location"/>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="capacity">Capacité</label>
        <input type="number" className="form-control" id="capacity" onChange={e => setCapacity(e.target.value)} placeholder="1"/>
      </div>

      <div className="form-group">
        <label htmlFor="lvl">Niveau</label>
        <select for="lvl" id="lvl" onChange={e => setLevel(e.target.value)}>
          <option> Débutant </option>
          <option> Intermédiaire </option>
          <option> Expert </option>
        </select>
      </div>

      <div className="form-toggle">
        <span> Handisport </span>
        <ToggleSwitch onChange={e => setHandi(e.target.value)}/>
      </div>

      <div className="form-read">
        <label htmlFor="read">J'ai lu et j'accepte... </label>
        <input type="checkbox" className="form-control" id="read" />
      </div>

      <div className="form-submit">
        <button className="form-cancel">
          Annuler
        </button>
        <button className="form-next" type="submit">
          Confirmer
        </button>
      </div>
    </form>
  );
};
export default Form;
