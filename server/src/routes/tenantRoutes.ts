import express from "express";
import {
  createTenant,
  getTenant,
  updateTenant,
  getCurrentResidences,
} from "../controllers/tenantControllers";

const router = express.Router();

router.get("/:cognitoId", getTenant);
router.put("/:cognitoId", updateTenant);
router.post("/", createTenant);
router.get("/:cognitoId/current-residences", getCurrentResidences);

export default router;
