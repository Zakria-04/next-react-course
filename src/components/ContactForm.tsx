"use client";
import Images from "@/assets/img/images";
import { url } from "inspector";
import Image from "next/image";
import React, { useState } from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("فرع الطيرة");
  // const collectData = async (e: any) => {
  //   e.preventDefault();
  //   let result: any = await fetch(
  //     "https://next-react-course-server.onrender.com/getAllUsers",
  //     {
  //       method: "post",
  //       body: JSON.stringify({
  //         userName: String,
  //         phone: Number,
  //         location: String,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   result = await result.json;
  //   localStorage.setItem("user", JSON.stringify(result));
  // };

  // const getAllUsers = async () => {
  //   fetch("https://next-react-course-server.onrender.com/getAllUsers", {
  //     mode: "no-cors",
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((userData) => {
  //       console.log("User Data", userData);
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // };
  // getAllUsers()

  // const collectData = async (e: any) => {
  //   e.preventDefault(); // so it dosnt refresh the page

  //   const formData = new FormData(e.target);
  //   const userName = formData.get('userName') as string;
  //   const phone = Number(formData.get('phone'));
  //   const location = formData.get('location') as string;

  //   let result = await fetch("https://next-react-course-server.onrender.com/getAllUsers", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       userName,
  //       phone,
  //       location,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   result = await result.json();
  //   localStorage.setItem("user", JSON.stringify(result));
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // const blog = { userName, phone, location };
    const blog = [{ user: { userName, phone, location } }];
    console.log(blog);

    await fetch(
      "https://next-react-course-server.onrender.com/userApplication",
      {
        mode: "no-cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }
    )
      .then(() => {
        console.log("new blog added");
      })
      .catch((err) => console.error("Error ", err));
  };

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
        <form onSubmit={handleSubmit} method="POST">
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
            <input
              type="text"
              placeholder="שם מלא"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <label>
              טלפון נייד<span>*</span>
            </label>
            <input
              type="text"
              placeholder="נייד"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label>
              اختار الفرع<span>*</span>
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
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
