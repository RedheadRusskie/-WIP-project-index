//styles
import "./SearchBar.css";

export default function SearchBar({ userInput, handleEntry }) {
    const handleChange = e => {
        handleEntry(e.target.value);
    }

    return (
        <form className="searchBar">
            <input onChange={handleChange} value={userInput} placeholder="Search" type="text" />
        </form>
    )
}