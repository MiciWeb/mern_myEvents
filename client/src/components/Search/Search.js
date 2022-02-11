import "./Search.css"
import { useEffect, useState } from 'react'
import Select from 'react-select';

const options = [
  { label: 'Paris' },
  { label: 'Marseille' },
  { label: 'Lyon' },
  { label: 'Strasbourg' },
  { label: 'Nice' },
  { label: 'Toulouse' },
  { label: 'Nantes' },
  { label: 'Montpellier' },
  { label: 'Bordeaux' },
  { label: 'Lille' },
  { label: 'Rennes' },
  { label: 'Reims' },
  { label: 'Toulons' },
  { label: 'Grenoble' },
  { label: 'Dijon' },
];

const Search = (props) => {
  console.log(props)
  const [data, setData] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("")

  var requestOptions = {
    method: 'GET',
  };

  function getData(e) {
    e.preventDefault();
    fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&rows=100&refine.city=${city.label}&refine.date_start=${startDate}`, requestOptions)
      .then((res) => res.json())
      .then((data) => setData(data.records))
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
                  // defaultValue={{ label: "Ex: Paris", value: 0 }}
                />
              </div>

              <button onClick={getData} className="button">Rechercher</button>



            </div>

          </div>
          <div className="hero-2-search">
            <div className="hero-cards-container">
              {data.map((item, i) => {
                if (item.fields.address.toLowerCase().indexOf(address.toLowerCase()) === -1 || item.fields.title.toLowerCase().indexOf(title.toLowerCase()) === -1)   {
                  return
                }
                return (
                  <div key={i} className="card">
                    <div className="card-img">
                      <h4 className="description">{item.fields.title}</h4>
                      <p className="address">{item.fields.address}</p>
                    </div>
                    <div className="card-text">
                      <p className="address">{item.fields.city}</p>
                    </div>
                    <p className="address">{item.fields.date_start}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search;