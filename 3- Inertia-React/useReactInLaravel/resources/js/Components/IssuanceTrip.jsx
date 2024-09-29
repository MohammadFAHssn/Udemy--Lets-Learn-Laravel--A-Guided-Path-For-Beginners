import "../../css/issuanceTrip.css";

import { useState } from "react";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

import printBusinessTrips from "./printBusinessTrips";

const repeat = (arr, n) => [].concat(...Array(n).fill(arr));

const openContentInNewTab = (content) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(content);
    newWindow.document.close();
};

export default function IssuanceTrip({
    personnel,
    setShowIssuanceTrip,
    selectedPersonnelIDs,
    setSelectedPersonnelIDs,
    setBusinessTripList,
}) {
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState();
    const [intention, setIntention] = useState();
    const [from, setFrom] = useState("مدیریت");

    const selectedPersonnel = personnel.filter((person) =>
        selectedPersonnelIDs.includes(person.personnelID)
    );

    const numSelected = selectedPersonnelIDs.length;

    function handleOKBtn(e) {
        e.preventDefault();

        if (destination === "") {
            alert("لطفاً محل مأموریت را مشخص کنید");
            return;
        }

        if (date === undefined) {
            alert("لطفاً بازه زمانی مأموریت را مشخص کنید");
            return;
        }

        if (date.length === 1) {
            alert("لطفاً تاریخ پایان مأموریت را نیز وارد کنید");
            return;
        }

        const duration = date[1].dayOfYear - date[0].dayOfYear + 1;

        if (!window.confirm("آیا از صدور این مأموریت مطمئن هستید؟")) {
            return;
        }

        selectedPersonnelIDs.map((selectedPersonnelID) =>
            setBusinessTripList((BTL) => [
                ...BTL,
                {
                    ID: String(crypto.randomUUID()),
                    personnelID: selectedPersonnelID,
                    destination: destination,
                    fromDate: date[0]
                        ?.format()
                        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d)),
                    toDate: date[1]
                        ?.format()
                        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d)),
                    duration: String(duration),
                    intention: intention,
                    from: from,
                },
            ])
        );

        openContentInNewTab(
            printBusinessTrips(
                selectedPersonnel,
                repeat(destination, numSelected),
                repeat(
                    date[0]
                        ?.format()
                        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d)),
                    numSelected
                ),
                repeat(
                    date[1]
                        ?.format()
                        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d)),
                    numSelected
                ),
                repeat(intention, numSelected),
                repeat(from, numSelected)
            )
        );

        setShowIssuanceTrip(false);

        setSelectedPersonnelIDs([]);
    }

    function handleExitBtn(e) {
        e.preventDefault();

        setShowIssuanceTrip(false);
    }

    return (
        <form className="issuance-trip">
            <label>محل مأموریت:</label>
            <input
                type="text"
                className="inputs"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            ></input>

            <label>بازه زمانی مأموریت:</label>
            <DatePicker
                style={{ textAlign: "center" }}
                inputClass="inputs"
                value={date}
                onChange={(date) => setDate(date)}
                calendar={persian}
                locale={persian_fa}
                range
                dateSeparator=" تا "
                rangeHover
                plugins={[<DatePanel />]}
            ></DatePicker>

            <label>موضوع مأموریت:</label>
            <textarea
                className="inputs"
                rows="4"
                value={intention}
                onChange={(e) => setIntention(e.target.value)}
            ></textarea>

            <label>واحد اعزام کننده:</label>
            <select
                className="inputs"
                style={{ textAlign: "center" }}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
            >
                <option value={"مدیریت"}>مدیریت</option>
                <option value={"معاونت پشتیبانی"}>معاونت پشتیبانی</option>
                <option value={"معاونت آموزشی"}>معاونت آموزشی</option>
                <option value={"معاونت پرورشی"}>معاونت پرورشی</option>
            </select>

            <button className="button" onClick={(e) => handleOKBtn(e)}>
                تایید
            </button>
            <button className="button" onClick={(e) => handleExitBtn(e)}>
                انصراف
            </button>
        </form>
    );
}
