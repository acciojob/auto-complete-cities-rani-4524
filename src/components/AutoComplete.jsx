import React, { useState } from "react";

const AutoComplete = ({ suggestions }) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);


    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.trim() === "") {
            setFilteredSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        const filtered = suggestions.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
    };

    const handleClick = (value) => {
        setInputValue(value);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
    };

    return (
        <div className="autocomplete">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter city or street"
            />

            {showSuggestions && filteredSuggestions.length > 0 && (
                <ul className="suggestions">
                    {filteredSuggestions.map((item, index) => (
                        <li key={index} onClick={() => handleClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutoComplete;
