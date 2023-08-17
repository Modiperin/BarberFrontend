import React from "react";
// import {BsScissors} from 'react-icons/bs'
import Card from "./card/Card";
import { card_service, card_stores } from "../data";

const Homeservice = () => {
  return (
    <>
      <hr />
      <div className="container services mt-2">
        <h1>Services you will get here</h1>
        <section className="card__salons">
          {card_service.map(({ id, icon, title }) => {
            return (
              <Card key={id} image={icon}>
                <h3>{title}</h3>
              </Card>
            );
          })}
        </section>
      </div>
      <hr />
      <div className="container stores mt-5">
        <h1>Store Category</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque dolore similique cupiditate atque inventore deserunt ut veniam excepturi placeat rerum dignissimos maiores ab perspiciatis voluptatum molestiae ipsum, earum et quos.</p>
        <section className="card__stores">
          {card_stores.map(({ id, icon, title }) => {
            return (
              <Card key={id} image={icon}>
                <h3>{title}</h3>
              </Card>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Homeservice;
