import express from "express"
import { getStation } from "../controllers/stationController.js"

const router = express.Router()

router.get("/", getStation)

export default router
