import "../../css/operation.css";

export default function Operation({
    setShowIssuanceTrip,
    setShowReport,
    anySelected,
}) {
    function handleClickIssuanceTrip() {
        if (!anySelected) {
            alert("لطفاٌ شخص یا اشخاصی را انتخاب کنید!");
            return;
        }

        setShowIssuanceTrip(true);
    }

    return (
        <section className="operation">
            <button onClick={handleClickIssuanceTrip}>صدور مأموریت</button>
            <button onClick={() => setShowReport(true)}>گزارش مأموریت</button>
        </section>
    );
}
