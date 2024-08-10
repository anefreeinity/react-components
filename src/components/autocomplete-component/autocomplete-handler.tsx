import React from "react";
import Autocomplete from "./autocomplete/autocomplete";
import useAutocomplete from "./autocomplete/useAutocomplete";

const AutocompleteHandler: React.FC = () => {
  const suggestions = ["apple", "banana", "cherry", "date", "fig", "grape"];

  const handelFilterSuggestions = async (value: string): Promise<string[]> => {
    return new Promise<string[]>((resolve) => {
      setTimeout(() => {
        resolve(
          suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(value.toLowerCase())
          )
        );
      }, 500);
    });
  };

  const handelSuggestionClick = (suggestion: string) => {
    console.log(suggestion);
  };

  const {
    filteredSuggestions,
    handleInputChange,
    handleSuggestionClick,
    loading,
  } = useAutocomplete({
    onFilterSuggestions: handelFilterSuggestions,
    onSuggestionClick: handelSuggestionClick,
  });

  return (
    <div className="absolute top-60 right-1/2 translate-x-1/2 bg-slate-900">
      <Autocomplete
        filteredSuggestions={filteredSuggestions}
        handleInputChange={handleInputChange}
        handleSuggestionClick={handleSuggestionClick}
        placeholder="Go to file"
        loading={loading}
      >
        {filteredSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="px-4 py-2 cursor-pointer hover:bg-slate-700"
          >
            {suggestion}
          </li>
        ))}
      </Autocomplete>
    </div>
  );
};

export default AutocompleteHandler;
