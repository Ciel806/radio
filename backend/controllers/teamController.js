import fs from "fs/promises";
import path from "path";

export const getStationData = async () => {
  const filePath = path.join(process.cwd(), "data", "station.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

export const getTeamData = async () => {
  const filePath = path.join(process.cwd(), "data", "team.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};
