import "./Search.css"
import { useEffect, useState } from 'react'
import svg from '../image/360-view.png'
import locate from "../image/icon-locate.png"

const App = () => {
  const [data, setData] = useState()

  // const token = process.env.REACT_APP_HACK_API_KEY

  // var requestOptions = {
  //   method: 'GET',
  //   headers: {
  //     'Authorization': 'Bearer ' + token
  //   },
  //   redirect: 'follow'
  // };

  // const getData = () =>
  //   fetch("https://bookings.cdsgroupe.com/api-hackathon/v1/Hotels?city=Lyon&from=160&to=4", requestOptions)
  //     .then((res) => res.json())

  // useEffect(() => {
  //   getData().then((data) => setData(data.Hotels))
  // }, [])


  return (
    <div>
      <section className="section2">
        <div className="hero-search">
          <div className="hero-1-search">
            <div className="search-container-search">
              <div className="aside">
                <div className="subtitle">Localisation</div>
                <div className="hr" />
                <input className="select-type-search custom" value="Lyon" />
                <img className="locate" src={locate} />
              </div>
              <div className="aside">
                <div className="subtitle">Type d'espace</div>
                <div className="hr" />
                <select className="select-type-search">
                  <option>Open space</option>
                  <option>Bureau fermé</option>
                  <option>Salle de réunion</option>
                </select>
              </div>
              <div className="aside">
                <div className="subtitle">Durée</div>
                <div className="hr" />
                <select className="select-type-search">
                  <option>À la journée</option>
                  <option>Au mois</option>
                  <option>À l'année</option>
                  <option>À l'heure</option>
                </select>
              </div>
            </div>
          </div>
          <div className="hero-2-search">
            <div className="hero-cards-container">
              {/* {data?.map((item) => { */}
                {/* return ( */}
                  <div className="card">
                    <div className="test">
                      <img className="card-img" src="item.ImageUrl" />
                      <div className="overlay"></div>
                      <div className="logos">
                        <i class="fa fa-wifi"></i>
                        <i class="fa fa-desktop"></i>
                        <i class="fa fa-print"></i>
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
                {/* ) */}
              {/* })} */}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App;