import React from "react";

export const LocationsContext = React.createContext({
  locationList: [],
  setLocationList: (locList) => {
    throw new Error("Not implemented yet!");
  },
});

export const LocationsContextProvider = (props) => {
  const [locationListState, setLocationListState] = React.useState([]);

  return (
    <LocationsContext.Provider
      value={{
        locationList: locationListState,
        setLocationList: setLocationListState,
      }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};
