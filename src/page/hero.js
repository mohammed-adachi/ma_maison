import React from "react";

function Hero(props) {
  return <header className={props.hero}>{props.children} {props.chih}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero"
};

export default Hero;
