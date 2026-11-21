/* =====================================================================
   إعدادات Tube Kids Family — الملف ده بتاعك انت
   ارفعه مرة واحدة، وبعد كده عدّله من GitHub بس.
   تحديثات الأبلكيشن (index.html) مش بتلمسه، فمفتاحك وإعداداتك مش هيتمسحوا.
   ===================================================================== */
window.APP_CONFIG = {
  // مفتاح YouTube Data API v3: انسخه من Google Cloud ← Credentials ← SHOW KEY
  // (بعد ما تجهّز Firebase امسحه من هنا وحطه من إعدادات الأدمن، عشان ميبقاش ظاهر للناس)
  API_KEY: "",

  // رقم سري للإعدادات — بيستخدم بس لو FIREBASE فاضي
  PIN: "0000",

  // إعدادات Firebase (تسجيل الدخول + اليوزرز). لو null الأبلكيشن بيفتح لأي حد من غير تسجيل دخول.
  FIREBASE: null,

  // كود الدولة لأرقام الموبايل اللي بتبدأ بـ 0
  COUNTRY_CODE: "+20",

  // اللغة الافتراضية أول مرة: "ar" أو "en"
  DEFAULT_LANG: "ar",

  // القنوات المسموحة (لينك في كل سطر). بعد Firebase بتتعدّل من إعدادات الأدمن.
  CHANNELS: [
    "https://www.youtube.com/@AnashedAlRawda",
    "https://www.youtube.com/@learn2kids",
    "https://www.youtube.com/@ahlansimsim",
    "https://www.youtube.com/@MYBABYGH",
    "https://www.youtube.com/watch?v=NEcug4krSAo",
    "https://www.youtube.com/@LittleFoxKids",
    "https://www.youtube.com/watch?v=6lQb75KP-V8",
    "https://www.youtube.com/channel/UCtlcIZVBdFPSAtCoNZsTusg",
    "https://www.youtube.com/@LearnwithTamer",
    "https://www.youtube.com/@DawoodKidsTV"
  ],

  REFRESH_MINUTES: 30,   // كل قد إيه يدوّر على فيديوهات جديدة
  NEW_DAYS: 3            // الفيديو يتعلّم "جديد" لو نازل من أقل من كده (أول مرة)
};
