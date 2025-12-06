import fs from "fs/promises";
import path from "path";

export const getStationData = async () => {
  const filePath = path.join(process.cwd(), "data", "station.json");
  const json = await fs.readFile(filePath, "utf-8");
  return JSON.parse(json);
};
