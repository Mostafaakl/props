import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        number={Contacts[0].tel}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        number={Contacts[1].tel}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        number={Contacts[2].tel}
        email={Contacts[2].email}
      />
      ;
    </div>
  );
}

export default App;
