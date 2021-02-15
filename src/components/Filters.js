import { Range, getTrackBackground } from "react-range";
import { useState } from "react";

const Filters = ({ rtl, filters, setFilters }) => {
  //   const [checkBox, setCheckbox] = useState(true);
  //   const [minPrice, setMinPrice] = useState([40]);
  //   const [maxPrice, setMaxPrice] = useState([100]);
    // const [priceMinMax, setPriceMinMax] = useState([0, 100]);
  // const [values, setValues] = useState([1, 100]);


  const handleCheckbox = (event) => {
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
          value={filters.sortPrice}
          onClick={(elem) => handleCheckbox(elem.target.checked)}
        />
        <label htmlFor="switch-1" className="switch-label">
          Switch
        </label>
      </div>

      {/* PRICE MIN - MAX */}
      <div className="price-min-max">
        {/* <Range
          values={priceMinMax}
          step={1}
          min={0}
          max={100}
          rtl={rtl}
          onChange={(values) => {
            setPriceMinMax(values);
            const newFilters = { ...filters };
            newFilters.priceMin = priceMinMax[0]; // premier curseur
            newFilters.priceMax = priceMinMax[1]; // deuxième curseur
            setFilters(newFilters);
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "316px",
              }}
            >
              <div
                className="barBetweenPrice"
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    priceMinMax,
                    colors: ["#ccc", "#2CB1BA", "#ccc"],
                    min: 0,
                    max: 100,
                    rtl,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "12px",
                width: "12px",
                backgroundColor: "#2CB1BA",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // boxShadow: "0px 2px 6px #fff",
                border: ".5px solid #fff",
                borderRadius: "50%",
                outline: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-28px",
                  color: "rgb(255, 255, 255)",
                  fontSize: "12px",
                  padding: "4px",
                  borderRadius: "4px",
                  backgroundColor: "rgb(44, 177, 186)",
                }}
              >
                {priceMinMax[index]}
              </div>
            </div>
          )}
        /> */}
        {/* <Range
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
        /> */}
      </div>
    </div>
  );
};

export default Filters;
