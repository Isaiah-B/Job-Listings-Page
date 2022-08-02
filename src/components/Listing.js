/* eslint-disable jsx-a11y/anchor-is-valid */
const Listing = (props) => {

  return (
    <div className={`listing${props.featured ? ' featured' : ''}`}>
      <div className="listing-left">
        <img className="listing-logo" src={props.logo} alt={`${props.company} company logo`} />
        <div className="listing-info">
          <div className="info-top">
            <span className="listing-company">{props.company}</span>
            <div className="tags">
              { props.new ? <div className="tag new-tag"><span>New!</span></div> : ''}
              { props.featured ? <div className="tag featured-tag"><span>Featured</span></div> : ''}
            </div>
          </div>
            <h1 className="listing-position">{props.position}</h1>
            <div className="info-bottom">
              <span className="info-small">{props.postedAt}</span>
              <span className="bullet">&bull;</span>
              <span className="info-small">{props.contract}</span>
              <span className="bullet">&bull;</span>
              <span className="info-small">{props.location}</span>
            </div>
        </div>
      </div>
      <div className="listing-tags">
        <button className="filter-text listing-tag" onClick={() => props.addFilter(props.role)}>{props.role}</button>
        <button className="filter-text listing-tag" onClick={() => props.addFilter(props.level)}>{props.level}</button>
        { props.languages.map(language => 
            <button className="filter-text listing-tag" key={language} onClick={() => props.addFilter(language)}>{language}</button>
        )}

        { props.tools.map(tool => 
          <button className="filter-text listing-tag" key={tool} onClick={() => props.addFilter(tool)}>{tool}</button>
        )}
      </div>
    </div>
  )
}

export default Listing;