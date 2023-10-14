var change_lang = document.getElementById("change-lang");

const home = document.getElementById("home");
const about = document.getElementById("about");
const img = document.getElementById("img");
const download = document.getElementById("download");
const lang_text = document.getElementById("lang-text");
const title = document.getElementsByClassName("title-2");
const text1 = document.getElementById("home-box-text-1");
const text2 = document.getElementById("home-box-text-2");
const text3 = document.getElementById("home-box-text-3");
const text4 = document.getElementById("home-box-text-4");
const para1 = document.getElementById("text-para1");
const para2 = document.getElementById("text-para2");
const para3 = document.getElementById("text-para3");
const para4 = document.getElementById("text-para4");

const lang = {
  en: {
    home: "Home",
    about: "About",
    img: "Image",
    download: "Download",
    langText: "VN",
    title1: "Code Editing",
    text1: "IntelliSense",
    text2: "Run And Debug",
    text3: "Built-in Git",
    text4: "Extensions",
    text_one: "IntelliSense",
    text_two:"Run And Debug",
    text_three:"Built-in Git",
    text_four:"Extensions",
    text_para1:
      "IntelliSense in Microsoft Visual Studio Code is a smart feature that helps developers write code more efficiently. Integrating automatic suggestions, code completion, and error reporting right as you write, IntelliSense provides information about functions, classes, and APIs, making them easy to learn and use. At the same time, it warns about syntax and logic errors, saving time in debugging later. IntelliSense is an important tool that helps increase productivity and quality of software development.",
    text_para2:
      "Run and Debug in Microsoft Visual Studio Code is an important feature that allows you to conveniently run and debug source code. Integrated in the development environment, you can perform application testing using the Run feature and trace each step of the source code for debugging via the Debug feature. This helps optimize the development process and ensure the program works as expected.",
    text_para3:
      "The integrated Git commands feature in Visual Studio Code makes source code management easier. You can commit, pull, push, branch, and merge without leaving the development environment. This increases productivity and ensures consistency in source code version management.",
    text_para4:
      "The extensions feature in Visual Studio Code allows the development environment to be expanded through community-developed extensions. You can add additional features like error checking, project management, and cloud service integration. Installing and managing extensions is easy, helping to customize Visual Studio Code to suit the needs of each project and programmer.",
  },
  vn: {
    home: "Trang Chủ",
    about: "Thông Tin",
    img: "Hình Ảnh",
    download: "Tải Về",
    langText: "EN",
    title1: "Công Cụ Chỉnh Sửa Code",
    text1: "Tối ưu hoá",
    text2: "Chạy và Sửa Lỗi",
    text3: "Git Comaands",
    text4: "Công Cụ Hỗ Trợ",
    text_one:"Tối ưu hoá",
    text_two:"Chạy và Sửa Lỗi",
    text_three: "Git Comaands",
    text_four:"Công Cụ Hỗ Trợ",
    text_para1:"IntelliSense trong Microsoft Visual Studio Code là tính năng thông minh giúp nhà phát triển viết code hiệu quả hơn. Tích hợp gợi ý tự động, hoàn thành mã và thông báo lỗi ngay khi viết, IntelliSense cung cấp thông tin về hàm, lớp và API, giúp tìm hiểu và sử dụng chúng dễ dàng. Đồng thời, nó cảnh báo về lỗi cú pháp và logic, giúp tiết kiệm thời gian sửa lỗi sau này. IntelliSense là công cụ quan trọng giúp tăng năng suất và chất lượng phát triển phần mềm.",
    text_para2:"Run and Debug trong Microsoft Visual Studio Code là tính năng quan trọng cho phép chạy và gỡ lỗi mã nguồn một cách thuận tiện. Tích hợp trong môi trường phát triển, bạn có thể thực hiện kiểm tra ứng dụng bằng tính năng Run và theo dõi từng bước của mã nguồn để gỡ lỗi thông qua tính năng Debug. Điều này giúp tối ưu hóa quá trình phát triển và đảm bảo chương trình hoạt động đúng như mong đợi.",
    text_para3:"Tính năng tích hợp Git commands trong Visual Studio Code giúp quản lý mã nguồn dễ dàng hơn. Bạn có thể thực hiện commit, pull, push, tạo nhánh và hợp nhất mà không cần rời khỏi môi trường phát triển. Điều này tăng năng suất và đảm bảo sự thống nhất trong việc quản lý phiên bản mã nguồn.",
    text_para4:"Tính năng extensions trong Visual Studio Code cho phép mở rộng môi trường phát triển thông qua các phần mở rộng được cộng đồng phát triển. Bạn có thể thêm tính năng bổ sung như kiểm tra lỗi, quản lý dự án và tích hợp dịch vụ đám mây. Việc cài đặt và quản lý extensions dễ dàng, giúp tùy chỉnh Visual Studio Code cho phù hợp với nhu cầu của từng dự án và lập trình viên.",
    
},
    
};
var isLang = "vn";

function translate() {
  isLang = isLang === "vn" ? "en" : "vn";

  for (let key in lang[isLang]) {
    const element = document.getElementById(key);
    console.log(element)
    if (element) {
      element.textContent = lang[isLang][key];
        
    }
  }
  if (isLang === "vn") {
    lang_text.textContent = "VN";
  } else {
    lang_text.textContent = "EN";
  }
}
change_lang.addEventListener("click", translate);






