import Images from "@/assets/img/images";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div style={{}}>
      <header>
        <div id="logo_container">
          <Image src={Images.logo()} alt="code zone" className="logo" />
        </div>
      </header>
    </div>
  );
}

export default Header;
