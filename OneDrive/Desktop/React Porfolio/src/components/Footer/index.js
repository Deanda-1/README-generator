import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name:"Deanda-1-github",
      link: "https://github.com/Deanda-1"
    },
    {
      name: "Deanda Noble-linkedin",
      link: "https://www.linkedin.com/in/deanda-noble-7a242592/"
    },
    {
      name: "Deanda Noble-facebook",
      link: "https://www.facebook.com/deanda.noble/"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
