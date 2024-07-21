import Images from "@/assets/img/images";
import { url } from "inspector";
import Image from "next/image";
import React from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  return (
    <div className="contactForm_container">
      <div className="category_container">
        <ul>
          <a href="#">
            <li>Juniors bootcamp</li>
          </a>
          <a href="/notes">
            <li>Notes</li>
          </a>
          <a href="/doc">
            <li>Documention</li>
          </a>
          <a href="#">
            <li>Home</li>
          </a>
        </ul>
      </div>
      <div className="contact_container">
        <div className="content">
          <h2 className="content_txt1">دورة واحدة وانت في الهايتك!</h2>
          <h2 className="content_txt2">كورس برمجة تطبيقات ومواقع مهني شامل</h2>
          <div>
            <p className="content_txt3">من الصفر وحتى الاحتراف</p>
            <Image
              src={Images.codezoneBI1()}
              alt="codezone"
              className="codezoneBI1"
              draggable={false}
            />
            <Image
              src={Images.codeZoneBT2()}
              alt="codezone"
              className="codezoneBI2"
            />
          </div>
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
    </div>
  );
}

export default ContactForm;
