import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (title, setTitle) => {
  const hendleInput = (event) => {
    setTitle(event.target.value)
  }
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="icon" />
      <input type="text" placeholder="Search Movies" value={title} onChange={hendleInput} />
    </div>
  );
}

export default SearchBar;
