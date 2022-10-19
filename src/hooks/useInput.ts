import { useState } from "react";
import { ACCES_TOKEN_MAP_BOX } from "../utils/constants";
import FeatureCollection from "geojson"
import {fetchLocalMapBox} from "../utils/apiMapBox";

console.log(FeatureCollection)

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    try {
      fetchLocalMapBox(value)
      // setSuggestions(results?.features)
    } catch (error) {
      console.log("Error fetching data, ", error);
    }
  };

  return {
    value,
    onChange: handleChange,
    setValue,
    suggestions,
    setSuggestions
  };
};

export default useInput;
