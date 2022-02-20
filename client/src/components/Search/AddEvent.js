import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const AddEvent = ({ event_id, user_id, setCaroussel2 }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [visibility, setVisiblity] = useState(true)
    const [success, setSuccess] = useState("")

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "event_id": event_id,
        "user_id": user_id,
        "title": title,
        "description": description,
        "visibility": true
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    function createPost(){
        fetch("/api/events", requestOptions)
            .then(response => response.json())
            .then(result => setSuccess("Votre événément à été crée !"))
            .catch(error => setSuccess('erreur', error));
    }

    return (
        <div>
            <div className="form-contact__topic-text">Créer une sortie</div>
            {user_id !== "null" ? (
                <>
                    <form className="form-contact" action="#">
                        <input type="hidden" name="event_id" value={event_id} />
                        <input type="hidden" name="user_id" value={user_id} />
                        <div className="input-box">
                            <input type="text" placeholder="Titre" onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className="input-box message-box">
                            <textarea name="" placeholder="Description"></textarea>
                        </div>
                        <div className="private">
                            <label htmlFor="">Rendre privée</label>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <p onClick={createPost} className="button" style={{ alignItems: "center", width: "42px", margin: "auto", marginTop: "60px", background: "#31d35c" }}>Créer</p>
                    </form>
                    <h3 style={{textAlign:"center", color:"#04E474"}}>{success}</h3>
                    <BsFillArrowLeftCircleFill className="left-arrow" onClick={() => setCaroussel2(false)} />
                </>
            ) : (
                <h3 style={{textAlign:"center", color:"#FC0404"}}>"Veuillez vous connecter pour crée un événement !"</h3>
            )
            }
        </div>
    )
}

export default AddEvent
