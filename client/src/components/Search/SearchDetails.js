import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const SearchDetails = () => {
    const [data, setData] = useState([])
    const { id } = useParams();

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
                    <li key={item.recordid} className="card">
                        <div className="card-img">
                            <h4 className="description">{item.fields.title}</h4>
                            <p className="address">{item.fields.address}</p>
                            <p className="address">{item.fields.description}</p>
                            <p className="address" style={{color:"yellow",margin:"10px"}}>{item.fields.pricing_info}</p>
                        </div>
                        <div className="card-text">
                            <p className="address">{item.fields.city}</p>
                        </div>
                        <p className="address">{item.fields.date_start}</p>
                    </li>
                )
            })}
        </div>
    )
}

export default SearchDetails