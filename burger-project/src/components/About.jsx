import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="abutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <h1>HAKKIMIZDA</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi et,
        soluta ex vel illum aliquid neque vero cum reiciendis maiores sapiente
        quo minima facilis velit enim earum vitae maxime nulla. Tenetur, dolores
        corrupti eum saepe inventore impedit consectetur perferendis aut, rerum
        repudiandae dolorum dolorem voluptate laboriosam veritatis culpa, vitae
        neque aperiam? Eius, corporis quibusdam sit dignissimos veniam quia odit
        facilis! Consectetur voluptatibus excepturi cumque quo eum odit iste,
        accusantium repellendus inventore repellat et enim, nihil doloribus quae
        ipsum tempore id, ab nisi vitae. Illo nisi eaque dolor asperiores, atque
        voluptatibus! At a, explicabo molestiae, modi magni voluptatibus eius
        quos ad suscipit, esse harum! Numquam animi ab reiciendis mollitia qui
        eius tempora corrupti voluptates commodi asperiores iusto aliquid, quasi
        dolores id? Neque dolore distinctio repudiandae sed molestiae sint
        consequuntur consequatur odit at vero! Quos iusto nisi repellendus minus
        maiores quis eveniet reiciendis ipsum aspernatur numquam asperiores,
        illum quidem fugiat corrupti nulla. 
      </p>
    </div>
  );
};

export default About;
