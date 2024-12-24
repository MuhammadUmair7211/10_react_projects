import "./App.css";
import { useEffect, useState } from "react";
function App() {
  let countries = [
    {
      name: "India",
      value: "IN",
      states: ["Delhi", "Mumbai"],
    },
    {
      name: "Pakistan",
      value: "PAK",
      states: ["Islamabad", "Lahore"],
    },
    {
      name: "Bangladesh",
      value: "BG",
      states: ["Dhaka", "Chittagong"],
    },
    {
      name: "America",
      value: "USA",
      states: ["New York", "Washington"],
    },
    {
      name: "Afghanistan",
      value: "AFG",
      states: ["Kabul", "Kandahar"],
    },
  ];
  const [country, setCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    if (country) {
      const selectedCountry = countries.find((c) => c.name === country);
      setStates(selectedCountry ? selectedCountry.states : []);
    } else {
      setStates([]);
    }
  }, [country]);

  return (
    <>
      <div>
        <select
          name="country"
          id="country"
          onChange={(e) => {
            setCountry(e.target.value);
            setSelectedState("");
          }}
        >
          <option value="" hidden>
            --Select Country--
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <select
          name="state"
          id="state"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="" hidden>
            --Select State--
          </option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
export default App;
