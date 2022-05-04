import React from "react";

function ToyCard({name, image, likes, id, setDeleted, deleted}) {

  function handleClick () {
    fetch (`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    setDeleted(!deleted)
  }

  function handleLikeBttn () {
    let newLike = likes +1
    fetch(`http://localhost:3001/toys/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
      },
    body: JSON.stringify({
      likes: newLike
      }),
    })
    .then (r => r.json())
    .then (data => console.log(data))
    setDeleted(!deleted)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeBttn}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
