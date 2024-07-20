import React from "react";
import "../styles/HomeBody.css";
import Image from "next/image";
import Images from "@/assets/img/images";
import VideoItem from "./VideoItem";

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
      <VideoItem />
      <div className="ducational_path_container">
        <div className="ducational_path">
          <h2>معانا كل واحد بقدر يكون مبرمج بشركة هايتك !</h2>
          <Image
            src={Images.logo()}
            alt="codezone"
            width={150}
            className="ducational_path_img"
          />
          <p>
            كلية كود زون تفتتح كورس برمجة تطبيقات ومواقع مهني شامل من الصفر
            لاكتساب جميع الادوات والمهارات والانخراط بافضل طريقة في عالم
            الهايتك.
          </p>
          <div className="context_images">
            <div className="flexT">
              <Image
                src={Images.upload()}
                alt="codezone"
                className="about_img"
              />
              <p className="ducational_path_p">
                <span>أحدث لغات البرمجة وأكثرها شيوعا </span>
                <br />
                مسار تدريبي شامل لاكتساب الادوات والمهارات والانخراط بافضل طريقة
                في عالم الهايتك
              </p>
            </div>
            <div className="flexT">
              <Image
                src={Images.training()}
                alt="codezone"
                className="about_img"
              />
              <p className="ducational_path_p">
                <span>أفضل الطواقم التعليمية في المنطقة</span>
                <br />
                مكون من مبرمجين من العالم الحقيقي ذوي خبرة سنوات في هذا المجال
              </p>
            </div>
            <div>
              <Image
                src={Images.checkBox()}
                alt="codezone"
                className="about_img"
              />
              <p className="ducational_path_p">
                <span>شهادة مهنية من قبل الكلية</span>
                <br />
                وملف اعمال خاص فيك الذي يشكل اهميه كبيرة في مرحلة توضيفك
              </p>
            </div>
            <div>
              <Image src={Images.group()} alt="codezone" />
              <p className="ducational_path_p">
                <span>مرافقة شخصية لكل طالب وطالبك</span>
                <br />
                تلقي ارشادات شامله حول كيفية تحضير ملف شخصي, التجهيز لمقابلة عمل
              </p>
            </div>
          </div>
          <h2>بالاضافة للعثور على مكان عمل بعد التخرج للملائمين!</h2>
        </div>
        <div className="ducational_path_info">
          <h1>المسار التعليمي</h1>
          
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
