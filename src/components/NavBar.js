import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkELements = links.map((link, index) => {
    // console.log(link);
    return (
      <a key={index} href={'#' + link}>{link}</a>
    )
  })
  return <nav>{linkELements}</nav>
}

export default NavBar;
