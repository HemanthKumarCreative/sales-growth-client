import { HotColumn, HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import { auto } from "@popperjs/core";

registerAllModules();

export const HotTableExample = ({ columnsHead, rowsHead }) => {
  const hotData = [
    ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1"],
    ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2", "I2"],
    ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3", "I3"],
  ];

  return (
    <HotTable
      data={hotData}
      licenseKey="non-commercial-and-evaluation"
      height={auto}
      colHeaders={columnsHead}
      rowHeaders={rowsHead}
    />
  );
};
