import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Emma Watson",
      url:
        "https://en.bbarta24.net/assets/images/news_images/2017/03/17/emma-12222222222222222222_8342.jpg",
    },
    {
      name: "Naziriya Nazeem",
      url:
        "https://www.filmibeat.com/ph-big/2014/12/nazriya-nazim_141888786280.jpg",
    },
    {
      name: "Anupama Parameswaran",
      url: "https://i.ndtvimg.com/i/2015-09/anupama_640x480_41442397410.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
