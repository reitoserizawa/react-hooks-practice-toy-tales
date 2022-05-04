import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, setDeleted, deleted}) {

  const renderToy = toyData.map(toy => <ToyCard key={toy.id} name={toy.name} image={toy.image} likes={toy.likes} id={toy.id} setDeleted={setDeleted} deleted={deleted}/>)

  return (
    <div id="toy-collection">{renderToy}</div>
  );
}

export default ToyContainer;
