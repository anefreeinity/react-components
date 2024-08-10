import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";

interface AutocompleteProps {
  suggestions?: string[];
  placeholder?: string;
  children?: React.ReactNode | null;
  handleInputChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    defaultHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => void;
  handleSuggestionClick?: (
    suggestion: string,
    defaultHandler: (suggestion: string) => void
  ) => void;
  filteredSuggestions?: string[];
  messageIfNoSuggestions?: string;
  loading?: boolean;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  suggestions = [],
  placeholder = "Search...",
  children = null,
  handleInputChange = null,
  handleSuggestionClick,
  filteredSuggestions: filteredSuggestionsProp,
  messageIfNoSuggestions = "No results found..!",
  loading = false,
}) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(
    filteredSuggestionsProp || []
  );
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownClasses, setDropdownClasses] = useState("opacity-0 scale-95");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDropdownVisible) {
      setDropdownClasses("opacity-100 scale-100");
    } else {
      setDropdownClasses("opacity-0 scale-95");
    }
  }, [isDropdownVisible]);

  const defaultHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      if (!handleInputChange) {
        let filtered: string[] = suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        );
        if (filtered.length === 0) {
          filtered = [];
        }
        setFilteredSuggestions(filtered);
      }
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
    }
  };

  const defaultHandleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setDropdownVisible(false);
  };

  const defaultHandleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      handleInputChange
        ? handleInputChange(
            {
              target: e.currentTarget,
            } as React.ChangeEvent<HTMLInputElement>,
            defaultHandleInputChange
          )
        : defaultHandleInputChange({
            target: e.currentTarget,
          } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const clearQuery = () => {
    setQuery("");
    setDropdownVisible(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (filteredSuggestionsProp) {
      setFilteredSuggestions(filteredSuggestionsProp);
    }
  }, [filteredSuggestionsProp]);

  return (
    <div className="relative w-full max-w-sm mx-auto" ref={containerRef}>
      <div className="relative flex items-center">
        <FontAwesomeIcon
          className="absolute left-3 text-gray-400"
          icon={faSearch}
        />
        <input
          type="text"
          value={query}
          onChange={(e) =>
            handleInputChange
              ? handleInputChange(e, defaultHandleInputChange)
              : defaultHandleInputChange(e)
          }
          onClick={defaultHandleInputClick}
          className="w-full pl-10 pr-10 rounded-md border bg-slate-800 border-slate-600 py-1 px-4 text-gray-200 focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
        />
        {query && (
          <FontAwesomeIcon
            onClick={clearQuery}
            className="absolute right-3 text-gray-400 cursor-pointer hover:text-gray-200"
            icon={faTimesCircle}
          />
        )}
      </div>
      <ul
        className={`absolute bg-opacity-10 text-slate-200 z-10 w-full bg-slate-800 border border-slate-600 rounded-md mt-1 transition-all duration-300 ease-out transform ${dropdownClasses}`}
      >
        {!loading &&
          isDropdownVisible &&
          children &&
          React.Children.map(children, (child) => {
            const childElement = child as React.ReactElement<{
              children: string;
            }>;
            const suggestion = childElement.props.children;
            return React.cloneElement(child as React.ReactElement<any>, {
              onClick: () =>
                handleSuggestionClick
                  ? handleSuggestionClick(
                      suggestion,
                      defaultHandleSuggestionClick
                    )
                  : defaultHandleSuggestionClick(suggestion),
            });
          })}
        {!children &&
          !loading &&
          isDropdownVisible &&
          filteredSuggestions.length > 0 &&
          filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() =>
                handleSuggestionClick
                  ? handleSuggestionClick(
                      suggestion,
                      defaultHandleSuggestionClick
                    )
                  : defaultHandleSuggestionClick(suggestion)
              }
              className="px-4 py-2 cursor-pointer hover:bg-slate-700"
            >
              {suggestion}
            </li>
          ))}
        {!loading && isDropdownVisible && filteredSuggestions.length === 0 && (
          <li className="px-4 py-2 cursor-pointer text-slate-600">
            {messageIfNoSuggestions}
          </li>
        )}
        {loading && isDropdownVisible && (
          <li className="px-4 py-2 cursor-pointer text-slate-600">loading..</li>
        )}
      </ul>
    </div>
  );
};

export default Autocomplete;
