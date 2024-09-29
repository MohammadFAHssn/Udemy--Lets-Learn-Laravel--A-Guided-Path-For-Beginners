import { useState } from "react";
import "../../css/report.css";

import Table from "./Table";

import printBusinessTrips from "./printBusinessTrips";

const openContentInNewTab = (content) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(content);
    newWindow.document.close();
};

export default function Report({
    setShowReport,
    businessTripList,
    setBusinessTripList,
    personnel,
}) {
    const [selectedBusinessTripsIDs, setSelectedBusinessTripsIDs] = useState(
        []
    );

    const numSelectedBusinessTrips = selectedBusinessTripsIDs.length;

    const selectedBusinessTrips = businessTripList.filter((businessTrip) =>
        selectedBusinessTripsIDs.includes(businessTrip.ID)
    );

    const presentableHeads = [
        "personnelID",
        "destination",
        "fromDate",
        "toDate",
        "duration",
        "from",
    ];

    const head = [
        "شماره پرسنلی",
        "محل مأموریت",
        "از تاریخ",
        "تا تاریخ",
        "مدت مأموریت",
        "واحد اعزام کننده",
    ];

    function handleDelete() {
        if (!window.confirm("آیا از حذف این مأموریت مطمئن هستید؟")) {
            return;
        }

        setBusinessTripList((businessTripList) =>
            businessTripList.filter(
                (businessTrip) =>
                    !selectedBusinessTripsIDs.includes(businessTrip.ID)
            )
        );
    }

    function handlePrint() {
        openContentInNewTab(
            printBusinessTrips(
                selectedBusinessTrips.map(
                    (selectedBusinessTrip) =>
                        personnel.filter(
                            (p) =>
                                p.personnelID ===
                                selectedBusinessTrip.personnelID
                        )[0]
                ),
                selectedBusinessTrips.map(
                    (selectedBusinessTrip) => selectedBusinessTrip.destination
                ),
                selectedBusinessTrips.map(
                    (selectedBusinessTrip) => selectedBusinessTrip.fromDate
                ),
                selectedBusinessTrips.map(
                    (selectedBusinessTrip) => selectedBusinessTrip.toDate
                ),
                selectedBusinessTrips.map(
                    (selectedBusinessTrip) => selectedBusinessTrip.intention
                ),
                selectedBusinessTrips.map(
                    (selectedBusinessTrip) => selectedBusinessTrip.from
                )
            )
        );
    }

    // function isItEditable() {
    //   return Boolean(
    //     selectedBusinessTrips
    //       .map(
    //         (SBT) =>
    //           SBT.destination === selectedBusinessTrips[0].destination &&
    //           SBT.fromDate === selectedBusinessTrips[0].fromDate &&
    //           SBT.toDate === selectedBusinessTrips[0].toDate &&
    //           SBT.intention === selectedBusinessTrips[0].intention &&
    //           SBT.from === selectedBusinessTrips[0].from
    //       )
    //       .reduce((accumulator, currentValue) => accumulator * currentValue, 1)
    //   );
    // }

    return (
        <section className="report">
            <Table
                data={businessTripList}
                presentableHeads={presentableHeads}
                head={head}
                columnsSizeRatio={["1fr", "1fr", "1fr", "1fr", "1fr", "1fr"]}
                numericFields={[
                    "personnelID",
                    "fromDate",
                    "toDate",
                    "duration",
                ]}
                haveSeriesColumn={true}
                haveCheckBox={true}
                primaryKey={"ID"}
                selectedIDs={selectedBusinessTripsIDs}
                setSelectedIDs={setSelectedBusinessTripsIDs}
            />

            <section className="operation">
                {numSelectedBusinessTrips > 0 && (
                    <button onClick={handlePrint}>پرینت</button>
                )}

                {numSelectedBusinessTrips > 0 && (
                    <button onClick={handleDelete}>حذف</button>
                )}

                {/* {numSelectedBusinessTrips > 0 && isItEditable() && (
          <button>ویرایش</button>
        )} */}

                <button onClick={() => setShowReport(false)}>خروج</button>
            </section>
        </section>
    );
}
