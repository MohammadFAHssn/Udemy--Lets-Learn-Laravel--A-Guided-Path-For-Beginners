import { useState } from "react";
import "../../css/table.css";

export default function Table({
    data,
    presentableHeads,
    head,
    columnsSizeRatio,
    numericFields,
    haveSeriesColumn = false,
    haveCheckBox = false,
    primaryKey,
    selectedIDs,
    setSelectedIDs,
}) {
    // function newR(r) {
    //   presentableFields.map((f) => (this[f] = r[f]));
    // }
    // const presentableData = data.map((r) => new newR(r));
    const presentableData = data;

    const numColumns = head.length;

    // const headKeys = Object.keys(presentableData[0]);
    const headKeys = presentableHeads;

    const emptyArray = Array(numColumns);
    for (let i = 0; i < numColumns; i++) {
        emptyArray[i] = "";
    }

    const [fields, setFields] = useState(emptyArray);

    const filteredData = presentableData.filter((r) =>
        [
            ...headKeys.map(
                (key, i) =>
                    r[key]
                        .replace(/\s+/g, "")
                        .includes(fields[i].replace(/\s+/g, "")) ||
                    fields[i].replace(/\s+/g, "") === ""
            ),
        ].reduce((accumulator, currentValue) => accumulator * currentValue, 1)
    );

    function handleChangeInput(e, i) {
        const updatedFields = [...fields];
        updatedFields[i] = e.target.value;
        setFields(updatedFields);
    }

    const newColumnsSizeRatio = columnsSizeRatio.map((s) => `minmax(0, ${s})`);
    if (haveSeriesColumn) {
        newColumnsSizeRatio.unshift("minmax(0, 0.6fr)");
    }
    if (haveCheckBox) {
        newColumnsSizeRatio.unshift("minmax(0, 0.2fr)");
    }

    let i = 0;
    function index() {
        i = i + 1;
        return i;
    }

    let i2 = 0;
    function index2() {
        i2 = i2 + 1;
        return i2;
    }

    return (
        <section className="table">
            <section
                className="table-header"
                style={{ gridTemplateColumns: newColumnsSizeRatio.join(" ") }}
            >
                {haveCheckBox && <div></div>}
                {haveSeriesColumn && <div>ردیف</div>}
                {head.map((h) => (
                    <div>{h}</div>
                ))}
            </section>

            <section className="table-body">
                <section className="selected">
                    {filteredData.map(
                        (r, i) =>
                            selectedIDs.includes(r[primaryKey]) && (
                                <TableBodyRow
                                    newColumnsSizeRatio={newColumnsSizeRatio}
                                    haveCheckBox={haveCheckBox}
                                    selectedIDs={selectedIDs}
                                    r={r}
                                    primaryKey={primaryKey}
                                    setSelectedIDs={setSelectedIDs}
                                    haveSeriesColumn={haveSeriesColumn}
                                    i={i}
                                    index={index}
                                    headKeys={headKeys}
                                    numericFields={numericFields}
                                />
                            )
                    )}
                </section>

                {filteredData.map(
                    (r, i) =>
                        !selectedIDs.includes(r[primaryKey]) && (
                            <TableBodyRow
                                newColumnsSizeRatio={newColumnsSizeRatio}
                                haveCheckBox={haveCheckBox}
                                selectedIDs={selectedIDs}
                                r={r}
                                primaryKey={primaryKey}
                                setSelectedIDs={setSelectedIDs}
                                haveSeriesColumn={haveSeriesColumn}
                                i={i}
                                index={index2}
                                headKeys={headKeys}
                                numericFields={numericFields}
                            />
                        )
                )}
            </section>

            <TableFooter
                newColumnsSizeRatio={newColumnsSizeRatio}
                haveCheckBox={haveCheckBox}
                haveSeriesColumn={haveSeriesColumn}
                headKeys={headKeys}
                numericFields={numericFields}
                fields={fields}
                handleChangeInput={handleChangeInput}
            />
        </section>
    );
}

function TableBodyRow({
    newColumnsSizeRatio,
    haveCheckBox,
    selectedIDs,
    r,
    primaryKey,
    setSelectedIDs,
    haveSeriesColumn,
    i,
    index,
    headKeys,
    numericFields,
}) {
    function handleCheckBox(e, r) {
        if (e.target.value === "false") {
            setSelectedIDs((selectedIDs) => [...selectedIDs, r[primaryKey]]);
        } else {
            setSelectedIDs((selectedIDs) =>
                selectedIDs.filter((ID) => ID !== r[primaryKey])
            );
        }
    }

    return (
        <section
            className="table-body-row"
            style={{ gridTemplateColumns: newColumnsSizeRatio.join(" ") }}
        >
            {haveCheckBox && (
                <div>
                    <input
                        type="checkbox"
                        checked={selectedIDs.includes(r[primaryKey])}
                        value={selectedIDs.includes(r[primaryKey])}
                        onChange={(e) => handleCheckBox(e, r)}
                        className="checkbox"
                    ></input>
                </div>
            )}

            {haveSeriesColumn && (
                <div style={{ textAlign: "center" }}>{index()}</div>
            )}

            {headKeys.map((key) => (
                <div
                    className={
                        numericFields.includes(key) ? "numeric" : "non-numeric"
                    }
                >
                    {r[key]}
                </div>
            ))}
        </section>
    );
}

function TableFooter({
    newColumnsSizeRatio,
    haveCheckBox,
    haveSeriesColumn,
    headKeys,
    numericFields,
    fields,
    handleChangeInput,
}) {
    return (
        <section
            className="table-footer"
            style={{ gridTemplateColumns: newColumnsSizeRatio.join(" ") }}
        >
            {haveCheckBox && <div></div>}
            {haveSeriesColumn && <div></div>}
            {headKeys.map((key, i) => (
                <div>
                    <input
                        className={
                            numericFields.includes(key)
                                ? "numeric"
                                : "non-numeric"
                        }
                        style={{ width: "100%" }}
                        value={fields[i]}
                        onChange={(e) => handleChangeInput(e, i)}
                    ></input>
                </div>
            ))}
        </section>
    );
}
