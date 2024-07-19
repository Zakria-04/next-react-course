import React from "react";
import "../styles/HomeBody.css";
import Image from "next/image";
import Images from "@/assets/img/images";

function HomeBody() {
  return (
    <div>
      <div id="context">
        <h1 id="context_title">ليش برمجة تطبيقات ومواقع؟</h1>
        <p id="context_p">
          "اذا انت مش هون انت مش موجود" - هاي العبارة بيسمعها اليوم كل صاحب
          مصلحة اذا هو مش موجود عالاونلاين.
          <br /> الطلب حول مبرمجي تطبيقات ومواقع عميزداد، واليوم أكثر من أي وقت
          مضى، يدرك معظم أصحاب المصالح أن التواجد في الاونلاين أمر اجباري.
        </p>
      </div>
      <div id="about_context">
        <div className="context_images">
          <div className="flexT">
            <Image
              src={Images.sandWatch()}
              alt="codezone"
              className="about_img"
            />
            <p>
              مدة الكورس
              <br /> 11 شهر
            </p>
          </div>
          <div className="flexT">
            <Image src={Images.groups()} alt="codezone" className="about_img" />
            <p>
              لقاءات
              <br />
              لقائين في الاسبوع
            </p>
          </div>
          <div>
            <Image
              src={Images.checkMark()}
              alt="codezone"
              className="about_img"
            />
            <p>
              ساعات
              <br />4 ساعات كل لقاء
            </p>
          </div>
        </div>

        <h2 className="about_text">لمين هاي المهنة مناسبة؟</h2>
        <p className="about_p">
          اذا ملائم الك تدخل مسار جديد ومطلوب، اكتساب المهنة المطلوبة ولديك
          المهارات التالية:
        </p>
        <div className="context_images">
          <div className="flexT">
            <Image src={Images.coding()} alt="codezone" className="about_img" />
            <p>الرغبة في فهم كيف الأشياء تعمل</p>
          </div>
          <div className="flexT">
            <Image
              src={Images.lightBulb()}
              alt="codezone"
              className="about_img"
            />
            <p>تفكير ابداعي</p>
          </div>
          <div>
            <Image
              src={Images.examResult()}
              alt="codezone"
              className="about_img"
            />
            <p>مستوى لغة انجليزية جيد</p>
          </div>
        </div>
      </div>
      <h2 className="location_title">
        فروعنا من الشمال للجنوب
        <br />
        <span> التسجيل مفتوح لفرع الطيرة وحيفا</span>
      </h2>
      <div className="location_img">
        <Image src={Images.locations()} alt="codezone" height={750} />
      </div>
    </div>
  );
}

export default HomeBody;
