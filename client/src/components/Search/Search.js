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

  data.map((item) => {
    console.log(item.fields.address)
  })


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
              {/* {data?.map((item) => { */}
              <div className="card">
                <div className="test">
                  <img className="card-img" src="item.ImageUrl" />
                  <div className="overlay"></div>
                  <div className="logos">
                    <i className="fa fa-wifi"></i>
                    <i className="fa fa-desktop"></i>
                    <i className="fa fa-print"></i>
                    <i> <img className="trois" src={svg} /> </i>
                  </div>
                  <select className="arrow">
                    <option>Tarifs</option>
                    <option>Chambres lit jumeaux 98€</option>
                    <option>Chambre double standard 138€</option>
                    <option>Chambre triple standard 158€</option>
                  </select>
                </div>
                <div className="env"> <span className="texte">Espace travail </span><span className="number">6.0</span></div>
                <div className="card-text">
                  <h4>item.HtlName</h4>
                  <p className="adresse">item.HtlAddress1</p>
                  <p className="email">item.HtlEmail</p>
                </div>
              </div>
              {/* })} */}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App;