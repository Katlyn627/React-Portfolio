import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Katlyn Boches</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src="https://user-images.githubusercontent.com/86095070/156967901-33a742df-47f4-40c7-bc50-eeb5f1634e8d.jpg" alt="Katlyn Boches" />

                <p>
                I am a Colorado native and graduate student of the University of Denver from their full-stack coding boot-camp. After graduating from culinary school with
      a Bachelor' s of Science in Food Service Management I decided on broadening my horizons and seeing the world. I am a travel enthusiast with skills in business, marketing, and computer programming. I spent the last 10 years traveling
      both internationally and around the United States. This enabled me to get a vast amount experience in different jobs as well as seeing different cultures and communities. It has given my a wealth of knowledge in both business and customer
      service as well as hospitality. I am eager to get started with my career in this field and am looking to using my skills to start a successful career in the Computer Programming and Technology Industry.
                </p>
            </div>
        </section>
    )
}

export default About;