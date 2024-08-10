import { useState, useCallback } from "react";

interface UseAutocompleteProps {
  onFilterSuggestions: (value: string) => Promise<string[]>;
  onSuggestionClick: (suggestion: string) => void;
}

const useAutocomplete = ({
  onFilterSuggestions,
  onSuggestionClick,
}: UseAutocompleteProps) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      defaultHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    ) => {
      const value = e.target.value;
      try {
        if (value.length > 0) {
          setLoading(true);
          onFilterSuggestions(value).then((filtered) => {
            setFilteredSuggestions(filtered);
            setLoading(false);
          });
        } else {
          setFilteredSuggestions([]);
        }
      } catch (error) {
        console.error("Error filtering suggestions:", error);
        setFilteredSuggestions([]);
        setLoading(false);
      }

      defaultHandler(e);
    },
    [onFilterSuggestions]
  );

  const handleSuggestionClick = useCallback(
    (suggestion: string, defaultHandler: (suggestion: string) => void) => {
      onSuggestionClick(suggestion);
      defaultHandler(suggestion);
    },
    [onSuggestionClick]
  );

  return {
    filteredSuggestions,
    handleInputChange,
    handleSuggestionClick,
    loading,
  };
};

export default useAutocomplete;
