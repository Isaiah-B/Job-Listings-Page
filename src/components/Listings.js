import { useState, useEffect } from 'react';
import Listing from './Listing';

const Listings = ({ filters, addFilter }) => {
  const [listings, setListings] = useState([]);
  const [visible, setVisible] = useState([]);

  const getData = async () => {
    const res = await fetch('data.json');
    setListings(await res.json());
  }

  useEffect(() => {
    getData();

    // Give each listing an array of their filterable properties  
    listings.forEach(listing => {
      listing.filterList = [listing.role, listing.level, ...listing.languages, ...listing.tools];
    })

    // Populate visible with listings that contain only selected filters
    setVisible(listings.filter(listing => filters.every(el => listing.filterList.includes(el))));
  }, [filters]);

  // Display filtered listings if filters are applied
  // Otherwise, display all listings 
  let listToUse = listings;

  if (filters.length > 0) {
    listToUse = visible;
  }

  return (
    <div className="listings">
      {
        listToUse.map(item => {
          return <Listing 
            key={item.id}
            logo={item.logo}
            company={item.company}
            new={item.new}
            featured={item.featured}
            position={item.position}
            postedAt={item.postedAt}
            contract={item.contract}
            location={item.location}
            role={item.role}
            level={item.level}
            languages={item.languages}
            tools={item.tools}
            addFilter={addFilter}
          />
        })
      }
    </div>
  )
}

export default Listings;