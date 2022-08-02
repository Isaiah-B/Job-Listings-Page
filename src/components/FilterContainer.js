import Filter from "./Filter";

const FilterContainer = ({ filters, isOpen, removeFilter, clearFilters }) => {

  return (
    <div className={`filter-container${isOpen ? ' open' : ''}`}>
      <div className="filters">
        {
          filters.map(filter => {
            return <Filter filterName={filter} onButtonClick={removeFilter} key={filter}/>
          })
        }
      </div>
      <button className="clear-btn" onClick={clearFilters}>Clear</button>
    </div>
  )
}

export default FilterContainer;