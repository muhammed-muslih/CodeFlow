import { asyncHandler } from "@/utils/asyncHandler.js";
import { getProjectActivities } from "@/services/activity.service.js";
import { Request, Response } from "express";

export const getProjectActivity = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const activities = await getProjectActivities(id);

    res.status(200).json({
      status: "success",
      activities,
    });
  },
);
