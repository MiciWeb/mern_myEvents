import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Carousel } from 'bootstrap';

const SearchDetails = () => {
    const [data, setData] = useState([])
    const { id } = useParams();
    const user_id = Cookies.get().id;

    const [caroussel, setCaroussel] = useState(true)
    const [caroussel2, setCaroussel2] = useState(false)

    const [title, setTitle] = useState("")

    var requestOptions = {
        method: 'GET',
    };

    useEffect(() => {
        fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&sort=date_start&rows=100&refine.uid=${id}`, requestOptions)
            .then((res) => res.json())
            .then((data) => setData(data.records))
    }, [])

    return (
        <div>
            {data?.map((item) => {
                return (
                    <>
                        <div key={item.recordid} className="card-details">

                            {caroussel2 ? (
                                <>
                                    <div className="form-contact__topic-text">Créer une sortie</div>
                                    <form className="form-contact" action="#">
                                        <input type="hidden" name="event_id" value={id} />
                                        <input type="hidden" name="user_id" value={user_id} />
                                        <div className="input-box">
                                            <input type="text" placeholder="Titre" onChange={(e) => setTitle(e.target.value)} value={title || "J'organise une sortie à " + item.fields.title} />
                                        </div>
                                        <div className="input-box message-box">
                                            <textarea name="" placeholder="Description"></textarea>
                                        </div>
                                        <div className="private">
                                            <label htmlFor="">Rendre privée</label>
                                            <input type="checkbox" name="" id="" />
                                        </div>
                                        <p onClick={() => console.log("oui")} className="button" style={{ alignItems: "center", width: "42px", margin: "auto", marginTop: "60px", background: "#2bb7da" }}>Créer</p>
                                    </form>
                                    <BsFillArrowLeftCircleFill className="left-arrow" onClick={() => setCaroussel2(false)} />
                                </>
                            ) : (
                                    <>
                                        <h4 className="description" style={{color:"#31d35c"}}>{item.fields.title}</h4>
                                        <p className="address">{item.fields.address}</p>
                                        <p className="address">{item.fields.description}</p>
                                        <p className="address" style={{ color: "orange", margin: "10px" }}>{item.fields.pricing_info}</p>
                                        <div className="card-img-details">
                                            <img className="search-img" src={item.fields.image} alt="" />
                                        </div>
                                        <div className="card-text">
                                            <p className="address">{item.fields.city}</p>
                                        </div>
                                        <p className="address">{item.fields.date_start}</p>
                                        {/* <p onClick={() => console.log("oui")} className="button" style={{ alignItems: "center", width: "119px", margin: "auto", marginTop: "5px", background: "#31d35c" }}>Créer une sortie</p> */}
                            <BsFillArrowRightCircleFill className="right-arrow" onClick={() => setCaroussel2(true)} />
                                    </>
                                )}
                    </div>
                    </>

    )
})}
        </div >
    )
}

export default SearchDetails