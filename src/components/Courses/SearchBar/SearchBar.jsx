import './SearchBar.css'
import Search from './assets/searchbar.svg'

export function SearchBar({ handleSearchChange }) {
    return (
        <div className="search">
            <img src={Search} alt="search" />
            <input
                type="search"
                placeholder="Izlash"
                onChange={(e) => handleSearchChange(e.target.value)}
            />
        </div>
    );
}
