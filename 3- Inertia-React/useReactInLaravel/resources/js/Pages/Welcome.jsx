import { useState } from "react";

import "../../css/app.css";

import Logo from "../Components/Logo";
import Body from "../Components/Body";
import Table from "../Components/Table";
import Operation from "../Components/Operation";
import IssuanceTrip from "../Components/IssuanceTrip";
import Report from "../Components/Report";

// ##############################################

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// ##############################################

const personnel = [
    {
        personnelID: "44010320",
        name: "محمد",
        lastName: "حسنی احمدآبادی",
        fatherName: "علی آقا",
        nationalID: "4440081525",
        post: "سرباز معلم",
        organizationalUnit: "امور اداری و تشکیلات",
        phoneNumber: "09143321459",
    },
    {
        personnelID: "44010325",
        name: "محمدحسین",
        lastName: "جلالی منش",
        fatherName: "علیرضا",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "محمدرضا",
        lastName: "آقاشیری",
        fatherName: "قاسم",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "محمود",
        lastName: "وزیرزاده",
        fatherName: "محمد",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "علیرضا",
        lastName: "طغرلی",
        fatherName: "حسین",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "یاسر",
        lastName: "رحیمدل",
        fatherName: "ناصر",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "عباس",
        lastName: "شمس تبریزی",
        fatherName: "سهراب",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "سیدحسین",
        lastName: "اکرم زاده اردکانی",
        fatherName: "سیدعلی",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "سید محمد صادق",
        lastName: "میر ابو الحسنی اردکانی",
        fatherName: "سعید",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "علی آقا",
        lastName: "حسنی احمدآبادی",
        fatherName: "محمد",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "صابر",
        lastName: "قاسملو امیرآبادی",
        fatherName: "شهیدرضا",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "قربانعلی",
        lastName: "فاطمی",
        fatherName: "خلیل",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "سید ابوالقاسم محمد صادق",
        lastName: "سید ابوالقاسم محمد صادقی قرقوزلو گلاب دره",
        fatherName: "سید ابوالقاسم محمد کاظم",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "دارا",
        lastName: "نداری",
        fatherName: "بابک",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
    {
        personnelID: String(getRandomArbitrary(10000000, 99999999)),
        name: "شهرام",
        lastName: "زاهدی",
        fatherName: "بهرام",
        nationalID: String(getRandomArbitrary(1000000000, 9999999999)),
        post: "دبیر",
        organizationalUnit: "سیدالشهدا (شاهد)",
        phoneNumber: "09139130913",
    },
];

// کل ستون های جدول
const head = ["شماره پرسنلی", "نام", "نام خانوادگی", "نام پدر", "کد ملی"];

// ستون هایی از جدول که میخواهیم نمایش داده شوند
const presentableHeads = [
    "personnelID",
    "name",
    "lastName",
    "fatherName",
    "nationalID",
];

// ##############################################

const initialBusinessTrips = [
    {
        ID: String(crypto.randomUUID()),
        personnelID: "44010320",
        destination: "یزد",
        fromDate: "1403/02/04",
        toDate: "1403/02/04",
        duration: "1",
        intention: "انجام امور اداری",
        from: "معاونت آموزشی",
    },
    {
        ID: String(crypto.randomUUID()),
        personnelID: "44010320",
        destination: "عقدا",
        fromDate: "1403/02/07",
        toDate: "1403/02/07",
        duration: "1",
        intention: "انجام امور اداری",
        from: "معاونت آموزشی",
    },
    {
        ID: String(crypto.randomUUID()),
        personnelID: "44010325",
        destination: "عقدا",
        fromDate: "1403/02/07",
        toDate: "1403/02/07",
        duration: "1",
        intention: "انجام امور اداری",
        from: "معاونت آموزشی",
    },
];

// ##############################################

function App() {
    const [selectedPersonnelIDs, setSelectedPersonnelIDs] = useState([]);
    const [businessTripList, setBusinessTripList] =
        useState(initialBusinessTrips);

    const [showIssuanceTrip, setShowIssuanceTrip] = useState(false);
    const [showReport, setShowReport] = useState(false);

    return (
        <section className="app">
            <Logo />

            <Body>
                <Table
                    data={personnel}
                    presentableHeads={presentableHeads}
                    head={head}
                    columnsSizeRatio={["1fr", "1fr", "2fr", "1fr", "1fr"]}
                    numericFields={["personnelID", "nationalID"]}
                    haveSeriesColumn={true}
                    haveCheckBox={true}
                    primaryKey={"personnelID"}
                    selectedIDs={selectedPersonnelIDs}
                    setSelectedIDs={setSelectedPersonnelIDs}
                />

                <Operation
                    setShowIssuanceTrip={setShowIssuanceTrip}
                    setShowReport={setShowReport}
                    anySelected={selectedPersonnelIDs.length}
                />
            </Body>

            {(showIssuanceTrip || showReport) && <div className="cover"></div>}

            {showIssuanceTrip && (
                <IssuanceTrip
                    personnel={personnel}
                    setShowIssuanceTrip={setShowIssuanceTrip}
                    selectedPersonnelIDs={selectedPersonnelIDs}
                    setSelectedPersonnelIDs={setSelectedPersonnelIDs}
                    setBusinessTripList={setBusinessTripList}
                />
            )}

            {showReport && (
                <Report
                    setShowReport={setShowReport}
                    businessTripList={businessTripList}
                    setBusinessTripList={setBusinessTripList}
                    personnel={personnel}
                />
            )}
        </section>
    );
}
export default App;
