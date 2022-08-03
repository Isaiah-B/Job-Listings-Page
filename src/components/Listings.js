import { useState, useEffect } from 'react';
import Listing from './Listing';

const Listings = ({ filters, addFilter }) => {
  const [listings, setListings] = useState([]);

  const getData = async () => {
    const res = await fetch('data.json');
    setListings(await res.json());
  }

  useEffect(() => {
    getData();
  }, []);

  // Give each listing an array of its filterable properties  
  listings.forEach(listing => {
    listing.filterList = [listing.role, listing.level, ...listing.languages, ...listing.tools];
  });

  // Populate visible with listings that contain only selected filters
  const visible = listings.filter(listing => filters.every(el => listing.filterList.includes(el)));


  return (
    <div className="listings">
      {
        visible.map(item => {
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