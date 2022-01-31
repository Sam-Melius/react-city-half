import React from 'react';

export default function CityNameInput({ setCityName }) {
  function handleChange(e) {
    setCityName(e.target.value);
  }
  return (
    <section>
      What is your city name?
      {/* this component should have a prop called setCityName, which is a function */}
      {/* on change, this component should use e.target.value to pass the correct id to the setCityName function */}
      <input onChange={handleChange}/>
    </section>
  );
}
