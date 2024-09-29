const printBusinessTrips = function (
  selectedPersonnel,
  destination,
  fromDate,
  toDate,
  intention,
  from
) {
  const fromNameAndLastName = selectedPersonnel.map((value, index) =>
    from[index] === "مدیریت"
      ? "سیدعلی شاکر اردکانی"
      : from[index] === "معاونت پشتیبانی"
      ? "محمد رضاپور میرصالح"
      : from[index] === "معاونت آموزشی"
      ? "علی ملاحسینی اردکانی"
      : "محمدرضا سرافرازی اردکانی"
  );

  const administrative = "حمیدرضا عبداله زاده شریف آباد";

  const content = selectedPersonnel
    .map(
      (value, index) => `
    <!DOCTYPE html>

    <html lang="fa" dir="rtl">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <!-- <link rel="stylesheet" href="./برگ ماموریت اداری.css" /> -->
        <title>برگ مأموریت اداری</title>
    
        <style>
          @font-face {
            font-family: "BNazanin";
            src: url("../fonts/BNazanin/BNazanin.eot?#") format("eot"),
              url("../fonts/BNazanin/BNazanin.woff") format("woff"),
              url("../fonts/BNazanin/BNazanin.ttf") format("truetype");
          }
    
          *,
          html,
          body {
            padding: 0px;
            margin: 0px;
            font-family: "B Nazanin";
            line-height: 1;
          }
    
          p {
            padding: 0.4em;
          }
          /* ############################################## */
    
          .head {
            display: flex;
            justify-content: space-between;
    
            align-items: center;
          }
    
          .head div {
            text-align: center;
          }
    
          .head .allah {
            font-size: 0.7rem;
          }
    
          .head .allah p {
            padding: 0.1em;
          }
    
          .head .No {
            width: 10em;
          }
          /* ############################################## */
          .personal-information,
          .business-trip,
          .from,
          .superior,
          .administrative,
          .comment {
            display: flex;
            align-items: center;
    
            margin: 0.5em 0;
            padding: 0.5em;
    
            border: 1px solid black;
            border-radius: 4px;
          }
          /* ############################################## */
    
          .personal-information .user {
            padding: 1em;
          }
    
          /* ############################################## */
    
          .business-trip {
            display: block;
          }
    
          .business-trip .date {
            display: flex;
          }
    
          .business-trip .date p {
            flex-grow: 1;
          }
    
          /* ############################################## */
    
          .from div,
          .from p {
            flex-grow: 1;
          }
    
          /* ############################################## */
    
          .superior div,
          .superior p {
            flex-grow: 1;
          }
    
          /* ############################################## */
    
          .administrative div,
          .administrative p {
            flex-grow: 1;
          }
    
          /* ############################################## */
    
          .comment {
            display: block;
          }
        </style>
      </head>
    
      <body>
        <section class="head">
          <div class="allah">
            <span>
              <?xml version="1.0" encoding="UTF-8"?>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25"
                height="25"
                height="491.927"
                viewBox="-1 -0.968 2 1.968"
              >
                <g id="A">
                  <path
                    d="M-.548.836A.912.912 0 0 0 .329-.722 1 1 0 0 1-.548.836"
                  />
                  <path
                    d="M.618.66A.764.764 0 0 0 .422-.741 1 1 0 0 1 .618.661M0 1l-.05-1L0-.787a.31.31 0 0 0 .118.099V-.1l-.04.993z"
                  />
                  <path
                    d="M-.02-.85L0-.83a.144.144 0 0 0 .252-.136A.136.136 0 0 1 0-.925"
                  />
                </g>
                <use xlink:href="#A" transform="scale(-1 1)" />
              </svg>
            </span>
            <p>جمهوری اسلامی ایران</p>
            <p>وزارت آموزش و پرورش</p>
            <p>اداره کل آموزش و پرورش استان یزد</p>
            <p>مدیریت آموزش و پرورش شهرستان اردکان</p>
          </div>
    
          <p><strong>برگ مأموریت اداری</strong></p>
    
          <div class="No">
            <p>شماره:</p>
            <p>تاریخ:</p>
          </div>
        </section>
    
        <section class="personal-information">
          <span class="user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path
                d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
              ></path>
            </svg>
          </span>
    
          <div>
            <p>نام و نام خانوادگی مأمور: <strong>${value.name} ${value.lastName}</strong></p>
            <p>کد پرسنلی: <strong>${value.personnelID}</strong></p>
            <p>پست: <strong>${value.post}</strong></p>
          </div>
        </section>
    
        <section class="business-trip">
          <p>محل مأموریت: <strong>${destination[index]}</strong></p>
          <div class="date">
            <p>تاریخ شروع: <strong>${fromDate[index]}</strong></p>
            <p>تاریخ پایان: <strong>${toDate[index]}</strong></p>
          </div>
          <p>موضوع مأموریت: <strong>${intention[index]}</strong></p>
        </section>
    
        <section class="from">
          <div>
            <p>واحد اعزام کننده: <strong>${from[index]}</strong></p>
            <p>نام و نام خانوادگی مقام مسئول:</p>
            <p><strong>${fromNameAndLastName[index]}</strong></p>
          </div>
          <p>امضا</p>
        </section>
    
        <section class="superior">
          <div>
            <p>نام و نام خانوادگی مقام مافوق:</p>
            <p>&nbsp;</p>
          </div>
          <p>امضا</p>
        </section>
    
        <section class="administrative">
          <div>
            <p>نام و نام خانوادگی کارشناس مسئول امور اداری و تشکیلات:</p>
            <p><strong>${administrative}</strong></p>
          </div>
          <p>امضا</p>
        </section>
    
        <section class="comment">
          <p>توضیحات:</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </section>
      </body>
    </html>
    

    `
    )
    .join("");

  return content;
};

export default printBusinessTrips;
