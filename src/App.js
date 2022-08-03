import { useState, useEffect } from "react";
import FilterContainer from "./components/FilterContainer";
import Listings from "./components/Listings";

const App = () => {
  const [filters, setFilters] = useState([]);
  const [listings, setListings] = useState([]);

  const getData = async () => {
    const res = await fetch('data.json');
    setListings(await res.json());
  }

  const addFilter = (value) => {
    if (!filters.includes(value)) {
      setFilters(filters.concat(value));
    }
  }

  const removeFilter = (filterName) => {
    setFilters(filters.filter(item => item !== filterName));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
    <header className="header"></header>
    <main>
      <div className="container">
        <FilterContainer filters={filters} isOpen={filters.length > 0} removeFilter={removeFilter} clearFilters={clearFilters}/>
        <Listings listings={listings} filters={filters} addFilter={addFilter}/>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/Isaiah-B">Isaiah</a>.
      </div>
    </main>
    </>
  )
}

export default App;
