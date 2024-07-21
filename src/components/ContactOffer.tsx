import React from "react";
import "../styles/ContactOffer.css";
import Image from "next/image";
import Images from "@/assets/img/images";
function ContactOffer() {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "6rem" }}>
        <h1
          style={{
            wordSpacing: "10px",
            color: "#134b70",
            fontSize: "40px",
            lineHeight: 2,
          }}
        >
          بدون بسيخومتري وبسنة واحدة فقط!!
        </h1>
        <p className="offer_context_title">
          والان كلية كود زون تمنحك عرض خاص ولفترة محدودة!!
          <br />
          <span style={{ color: "#058305" }}>
            كل طالب يحصل على حاسوب LAPTOP بقيمة 3000 شيكل🎁
          </span>
          <br />
          (العرض فقط لل15 الاوائل)
          <br />
          <span style={{ color: "#FF0000", fontWeight: "bold" }}>
            سارعوا في التسجيل:
          </span>
        </p>
      </div>
      <div className="offer_form">
        <Image
          src={Images.codeTyping()}
          alt="code"
          width={250}
          style={{ margin: "70px" }}
        />
        <form>
          <p className="form_title">
            لجلسة استشارة مجانية
            <br />
            <span>اترك تفاصيلك الان وسنتواصل معك في ال24 ساعة القريبة:</span>
          </p>
          <label>
            שם מלא<span className="form_span">*</span>
          </label>
          <input type="text" placeholder="שם מלא" required />
          <label>
            טלפון נייד<span className="form_span">*</span>
          </label>
          <input type="text" placeholder="נייד" required />
          <label>
            اختار الفرع<span className="form_span">*</span>
          </label>
          <select required>
            <option>فرع الطيرة</option>
            <option>فرع حيفا</option>
            <option>فرع القدس</option>
            <option>فرع بئر السبع</option>
            <option>فرع اللد</option>
          </select>
          <button>تواصلوا معي</button>
        </form>
        <Image
          src={Images.codeTyping()}
          alt="code"
          width={250}
          style={{ margin: "70px" }}
        />
      </div>
    </div>
  );
}

export default ContactOffer;
