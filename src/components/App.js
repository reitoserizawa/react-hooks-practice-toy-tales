import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([])
  const [submitted, setSubmitted] = useState([])
  const [deleted, setDeleted] = useState(true)

  useEffect (() => {
    fetch ('http://localhost:3001/toys')
    .then (r => r.json())
    .then (data => setToyData(() => data))}
    ,[submitted, deleted])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setSubmitted={setSubmitted}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} setDeleted={setDeleted} deleted={deleted}/>
    </>
  );
}

export default App;
