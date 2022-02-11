import React from "react";
import "../styles.css";
import profile_pic from "../images";

function Home() {
  return (
    <div className="jumbotron jumbotron-fluid"> 
      <div className="moreLeft"><img className="profile" src={profile_pic} alt="profile" />
      <p className="headerText">
     <h1>Hello</h1>  
      My name is Katlyn Boches . <br/>
      I am a Colorado native and current student at the University of Denver enrolled in their full-stack coding boot-camp. In my free time I enjoy learning new skills such as American Sign Language and the development of video games, working on personal goals
                    and helping my community. I enjoy hiking, camping and paddle-boarding. I enjoy spending time with family and friends playing board games like chess, and card games like cribbage and poker. After graduating from culinary school with
                    a Bachelor' s of Science in Food Service Management I decided on broadening my horizons and seeing the world. I am a travel enthusiast with skills in business, marketing, and computer programming. I spent the last 10 years traveling
                    both internationally and around the United States. This enabled me to get a vast amount experience in different jobs as well as seeing different cultures and communities. It has given my a wealth of knowledge in both business and customer
                    service as well as hospitality. I am eager to get started with my career in this field and am looking to using my skills to start a successful career in the Computer Programming and Technology Industry. <br/>
      </p> 
    </div>
    </div>
  );
}

export default Home;