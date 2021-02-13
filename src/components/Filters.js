// import { Range } from "react-range";
import { useState } from "react";

const Filters = ({ filters, setFilters }) => {
  const [checkBox, setCheckbox] = useState(true);
  // const [minPrice, setMinPrice] = useState([40]);
  // const [maxPrice, setMaxPrice] = useState([100]);

  const handleCheckbox = (event) => {
    setCheckbox(event);
    const newFilters = { ...filters };
    newFilters.sortPrice = event;
    setFilters(newFilters);
    console.log(event);
  };

  return (
    <div className="filters">
      <p>Trier par :</p>
      <div className="switch">
        <input
          type="checkbox"
          id="switch-1"
          className="switch-input"
          value={checkBox}
          onClick={(elem) => handleCheckbox(elem.target.checked)}
        />
        <label htmlFor="switch-1" className="switch-label">
          Switch
        </label>
      </div>

      {/* PRICE MIN - MAX */}
      {/* <div className="price-min-max"><Range
          step={1}
          min={0}
          max={500}
          values={[minPrice]}
          onChange={(values) => setMinPrice({ values })}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                backgroundColor: "#ccc",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                backgroundColor: "#999",
              }}
            />
          )}
        /></div> */}
    </div>
  );
};

export default Filters;
