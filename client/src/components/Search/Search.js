import "./Search.css"
import { useEffect, useState } from 'react'
import Select from 'react-select';
import { Link, useLocation } from "react-router-dom";
import { options } from "../city-data"

const Search = (props) => {
  const [data, setData] = useState([])
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("")

  const location = useLocation()

  var requestOptions = {
    method: 'GET',
  };

  useEffect(() => {
    fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&sort=date_start&rows=100&refine.city=${location.state.city}`, requestOptions)
      .then((res) => res.json())
      .then((data) => setData(data.records))
  }, [])

  function getData(e) {
    e.preventDefault();
    if (startDate === "") {
      fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&sort=date_start&rows=100&refine.city=${city.label}`, requestOptions)
        .then((res) => res.json())
        .then((data) => setData(data.records))
    } else {
      fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&sort=date_start&rows=100&refine.city=${city.label}&refine.date_start=${startDate}`, requestOptions)
        .then((res) => res.json())
        .then((data) => setData(data.records))
    }
  }

  return (
    <div>
      <section className="search-section">
        <div className="hero-search">
          <div className="hero-1-search">
            <div className="search-container-search">

              <div className="aside">
                <div className="subtitle">Type d'événement</div>
                <div className="hr" />
                <input
                  className="select-type-search custom"
                  placeholder="Ex: Concert"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>

              <div className="aside">
                <div className="subtitle">Adresse complète</div>
                <div className="hr" />
                <input
                  className="select-type-search custom"
                  placeholder="Ex: 7 rue Faubourg"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </div>

              <div className="aside">
                <div className="subtitle">Date de début</div>
                <div className="hr" />
                <input className="select-type-search custom"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                  type="date" />
              </div>

              <div className="aside">
                <div className="subtitle">Ville</div>
                <div className="hr" />
                <Select
                  defaultValue={setCity}
                  onChange={setCity}
                  options={options}
                  defaultValue={{ label: location.state.city, value: 0 }}
                />
              </div>

              <button onClick={getData} className="button">Rechercher</button>



            </div>

          </div>
          <div className="hero-2-search">
            <div className="hero-cards-container">
              {data.length == 0 ? (
                <>
                  <h1>Aucun évènement à cette date</h1>
                </>
              ) : (
                  <>
                    {data?.map((item) => {
                      if (item.fields.address.toLowerCase().indexOf(address?.toLowerCase()) === -1 || item.fields.title?.toLowerCase().indexOf(title.toLowerCase()) === -1) {
                        return
                      }
                      return (
                        <Link to={`${item.fields.uid}`}>
                          <li key={item.fields.uid} className="card">
                            <div className="search-description">
                              <h4 style={{ margin: 0 }} className="description">{item.fields.title}</h4>
                              <p style={{ margin: 0 }} className="address">{item.fields.address}</p>
                            </div>
                            <div className="card-img">
                              <img className="search-img" src={item.fields.image} alt="" />
                            </div>
                            <div className="card-text">
                              <p className="address">{item.fields.city}</p>
                            </div>
                            <p className="address">{item.fields.date_start}</p>
                          </li>
                        </Link>
                      )
                    })}
                  </>
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search;