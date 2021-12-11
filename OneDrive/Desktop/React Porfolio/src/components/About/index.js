import React from 'react';
import profileImage from '../../assets/profile/profile-DJ.jpg';
function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={profileImage}/>
        
        </div>
        <p>
        I am a servant of the most high God. And, willing to help others before worrying about myself.
        </p>
      <p>  I give all praise, honor, and glory to God for giving me something that He wanted to give me when I was younger. And, now it's time for me to have this and use this to glorify Him. 
        </p>
      </div>
    </section>
  );
}

export default About;
