import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import AddEvent from './AddEvent';
import ListEvent from './ListEvent';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const SearchDetails = () => {
    const [data, setData] = useState([])
    const { id } = useParams();
    const user_id = Cookies.get().id;

    const [caroussel, setCaroussel] = useState(true)
    const [caroussel2, setCaroussel2] = useState(false)
    const [caroussel3, setCaroussel3] = useState(false)

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
                            {caroussel ? (
                                <>
                                    <h4 className="description" style={{ color: "#31d35c" }}>{item.fields.title}</h4>
                                    <p className="address">{item.fields.description}</p>
                                    <p className="address" style={{ color: "orange", margin: "10px" }}>{item.fields.pricing_info}</p>
                                    <div className="card-img-details">
                                        <img className="search-img" src={item.fields.image} alt="" />
                                    </div>
                                    <div>
                                        <p className="address">{item.fields.city}</p>
                                    </div>
                                    <p className="address">{item.fields.date_start}</p>
                                    <p className="address">{item.fields.address}</p>
                                    {/* <p onClick={() => console.log("oui")} className="button" style={{ alignItems: "center", width: "119px", margin: "auto", marginTop: "5px", background: "#31d35c" }}>Créer une sortie</p> */}
                                    <BsFillArrowRightCircleFill className="right-arrow" onClick={() => { setCaroussel2(true); setCaroussel(false); }} />
                                    <BsFillArrowLeftCircleFill className="left-arrow" onClick={() => { setCaroussel3(true); setCaroussel(false); }} />
                                </>
                            ) : ""}

                            {caroussel2 ? (
                                <>
                                    <AddEvent event_id={id} user_id={user_id} setCaroussel2={setCaroussel2} setCaroussel={setCaroussel} />
                                </>
                            ) : ""}

                            {caroussel3 ? (
                                <>
                                    <ListEvent event_id={id} setCaroussel3={setCaroussel3} setCaroussel={setCaroussel} />
                                </>
                            ): ""}
                        </div>
                    </>

                )
            })}
        </div>
    )
}

export default SearchDetails