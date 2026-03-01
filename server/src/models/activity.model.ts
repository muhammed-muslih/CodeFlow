import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
      index: true,
    },

    actor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    type: {
      type: String,
      required: true,
      enum: [
        "PROJECT_CREATED",
        "USER_INVITED",
        "USER_JOINED",
        "ROLE_CHANGED",
        "PROJECT_UPDATED",
        "PROJECT_DELETED",
      ],
    },

    meta: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true },
);

export default mongoose.model("Activity", activitySchema);
