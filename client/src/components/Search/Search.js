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

const Search = () => {
  const [data, setData] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);
  const [adress, setAdress] = useState("")
  const [city, setCity] = useState("")
  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("")

  var requestOptions = {
    method: 'GET',
  };

  useEffect(() => {
    fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&rows=100`, requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data.records))
  }, [])
  function getData(e) {
    e.preventDefault();
    fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&rows=100&refine.city=${city.label}&refine.date_start=${startDate}`, requestOptions)
      .then((res) => res.json())
      .then((data) => setData(data.records))
  }

  // useEffect(() => {
  // getData()
  // }, [])

  return (
    <div>
      <section className="search-section">
        <div className="hero-search">
          <div className="hero-1-search">
            <div className="search-container-search">
              <div className="aside">
                <div className="subtitle">Localisation</div>
                <div className="hr" />
                <input className="select-type-search custom" placeholder="Paris" onChange={(e) => setCity(e.target.value)} />
              </div>
              <div className="aside">
                <div className="subtitle">Type d'événement</div>
                <div className="hr" />
                <input className="select-type-search custom" placeholder="Lyon" />
              </div>
              <div className="aside">
                <div className="subtitle">Date de début</div>
                <div className="hr" />
                <input className="select-type-search custom" onChange={(e) => setStartDate(e.target.value)} type="date" />
              </div>
              <button onClick={getData} className="button">Rechercher</button>

              <Select
                defaultValue={setCity}
                onChange={setCity}
                options={options}
              />

              {console.log(selectedOption)}
              {console.log(city)}
            </div>

          </div>
          <div className="hero-2-search">
            <div className="hero-cards-container">
              {data.map((item, i) => {
                // if (item.fields.city.toLowerCase().indexOf(city.toLowerCase()) === -1) {
                //   return
                // }
                return (
                  <div key={i} className="card">
                    <div className="card-img">
                      <h4 className="description">{item.fields.description}</h4>
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