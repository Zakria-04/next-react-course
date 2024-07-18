import Images from "@/assets/img/images";
import { url } from "inspector";
import Image from "next/image";
import React from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  return (
    <div className="contact_container">
      <div className="content">
        <h2>دورة واحدة وانت في الهايتك!</h2>
        <h2>كورس برمجة تطبيقات ومواقع مهني شامل</h2>
        <p>من الصفر وحتى الاحتراف</p>
        <Image
          src={Images.codezoneBI1()}
          alt="codezone"
          className="codezoneBI1"
          draggable={false}
        />
      </div>
      <form>
        <div id="form_container">
          <p>
            <span style={{ color: "#FFC94A", fontSize: 23 }}>
              {" "}
              تبدأ الدورة في 01/09/2024
            </span>
            <br />
            لجلسة استشارة مجانية
            <br />
            اترك تفاصيلك الان وسنتواصل معك في ال 24 ساعة القريبة
          </p>
          <label>
            שם מלא<span>*</span>
          </label>
          <input type="text" placeholder="שם מלא" required />
          <label>
            טלפון נייד<span>*</span>
          </label>
          <input type="text" placeholder="נייד" required />
          <label>
            اختار الفرع<span>*</span>
          </label>
          <select required>
            <option>فرع الطيرة</option>
            <option>فرع حيفا</option>
            <option>فرع القدس</option>
            <option>فرع بئر السبع</option>
            <option>فرع اللد</option>
          </select>
          <input id="submit_btn" type="submit" value={"تواصلوا معي"} />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
