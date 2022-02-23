import React, { useState, useEffect } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const ListEvent = ({ event_id, setCaroussel3, setCaroussel }) => {
    const [sortie, setSortie] = useState([])

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    useEffect(() => {
        fetch(`/api/events/${event_id}`, requestOptions)
            .then(response => response.json())
            .then(result => setSortie(result))
            .catch(error => console.log('error', error));

    }, [])

    return (
        <div style={{ overflow: "auto" }}>
            <div className="form-contact__topic-text">Liste des sorties de cette événement:</div>
            {sortie?.map((item) => {
                return (
                    <>
                        <div className="card-sortie">
                            <h3> {item.title}</h3>
                            <p> {item.description}</p>
                        </div>
                    </>
                )
            })}
            <BsFillArrowRightCircleFill className="right-arrow" onClick={() => { setCaroussel3(false); setCaroussel(true); }} />
        </div>
    )
}

export default ListEvent
