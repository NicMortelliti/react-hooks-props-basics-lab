import React from "react";
import Links from "./Links.js";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {/* Hide the p tag if no bio is supplied */}
      {props.bio ? <p>{props.bio}</p> : null}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
