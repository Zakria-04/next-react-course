import Images from "@/assets/img/images";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <header>
        <div id="logo_container">
          <Image src={Images.logo()} alt="code zone" width={150} height={150} />
        </div>
      </header>
    </div>
  );
}

export default Header;
