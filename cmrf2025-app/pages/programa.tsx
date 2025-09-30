import * as XLSX from "xlsx";
import { useEffect, useState } from "react";

export default function Programa() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/programa.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const wb = XLSX.read(ab, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(ws);
        setData(json);
      });
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>📖 Programa del Congreso</h1>
      {data.length === 0 ? (
        <p>Cargando programa...</p>
      ) : (
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => (
                  <td key={j}>{String(val)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
