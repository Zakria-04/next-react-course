import React from "react";
import "../styles/Footer.css";
import Image from "next/image";
import Images from "@/assets/img/images";

function Footer() {
  return (
    <div id="footer_container">
      <div className="footer_text">
        <div>
          <Image
            src={Images.whatsApp()}
            alt="whatsapp"
            className="whatsApp_logo"
          />
          <p>whatsapp</p>
        </div>
        <h2 className="footer_logo">
          CODE
          <br />
          <span>ZONE</span>
        </h2>
        <div>
          <p>كلية codezone</p>
          <p style={{ fontSize: 25 }}>0553078824</p>
        </div>
      </div>
      <div className="junior_bootcamp_btn">
        <button>{`للانتقال  لصفحة دورة البرمجة للشباب الصغار Junior Bootcamp!>>`}</button>
      </div>
    </div>
  );
}

export default Footer;
