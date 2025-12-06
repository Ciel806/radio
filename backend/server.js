import express from "express";
import cors from "cors"; 
import { getStationData } from "./controllers/stationController.js";
import { getTeamData } from "./controllers/teamController.js";

const app = express();


app.use(cors());

app.get("/stations", async (req, res) => {
  const stations = await getStationData();
  res.json(stations);
});

app.get("/team", async (req, res) => {
  const team = await getTeamData();
  res.json(team);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
