import React from "react";
import "../styles/ContactOffer.css"
function ContactOffer() {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "6rem" }}>
        <h1>بدون بسيخومتري وبسنة واحدة فقط!!</h1>
        <p>
          والان كلية كود زون تمنحك عرض خاص ولفترة محدودة!!
          <br />
          <span style={{ color: "#058305" }}>
            كل طالب يحصل على حاسوب LAPTOP بقيمة 3000 شيكل🎁
          </span>
          <br />
          (العرض فقط لل15 الاوائل)
          <br />
          <span style={{ color: "#FF0000" }}>سارعوا في التسجيل:</span>
        </p>
      </div>
      <div className="offer_form">
        <form>
          <h2>
            لجلسة استشارة مجانية
            <br />
            اترك تفاصيلك الان وسنتواصل معك في ال24 ساعة القريبة:
          </h2>
          <label>
            שם מלא <span>*</span>
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
          <button>تواصلوا معي</button>
        </form>
      </div>
    </div>
  );
}

export default ContactOffer;
