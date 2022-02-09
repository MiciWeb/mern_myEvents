import "./Search.css"
import { useEffect, useState } from 'react'
import svg from '../image/360-view.png'
import locate from "../image/icon-locate.png"

const App = () => {
  const [data, setData] = useState([])

  const [adress, setAdress] = useState("")
  const [city, setCity] = useState("")
  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("")

  var requestOptions = {
    method: 'GET',
  };

  const getData = () =>
    fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&refine.city=${"Paris"}`, requestOptions)
      .then((res) => res.json())

  useEffect(() => {
    getData()
      .then((data) => setData(data.records))
  }, [])

  return (
    <div>
      <section className="section2">
        <div className="hero-search">
          <div className="hero-1-search">
            <div className="search-container-search">
              <div className="aside">
                <div className="subtitle">Localisation</div>
                <div className="hr" />
                <input className="select-type-search custom" placeholder="Lyon" />
                <img className="locate" src={locate} />
              </div>
              <div className="aside">
                <div className="subtitle">Type d'événement</div>
                <div className="hr" />
                <input className="select-type-search custom" placeholder="Lyon" />
                <img className="locate" src={locate} />
              </div>
              <div className="aside">
                <div className="subtitle">Date de début</div>
                <div className="hr" />
                <input className="select-type-search custom" onChange={(e) => setStartDate(e.target.value)} type="date" />
                <img className="locate" src={locate} />
              </div>
            </div>
          </div>
          <div className="hero-2-search">
            <div className="hero-cards-container">
              {data.map((item) => {
                return (
                  <div className="card">
                    <div className="test">
                      <img className="card-img" src="item.ImageUrl" />
                      <div className="overlay"></div>
                    </div>
                    <div className="card-text">
                      <h4>{item.fields.description}</h4>
                      <p className="address">{item.fields.address}</p>
                      <p className="email">{console.log(item)}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </div >
  )
}

export default App;