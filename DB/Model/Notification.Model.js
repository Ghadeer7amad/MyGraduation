import mongoose, { Schema, model, Types } from "mongoose";

const NotificationSchema = new Schema(
  {
    expoPushToken: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true, 
    },
    body: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const NotificationModel = model("notifications", NotificationSchema);
export default NotificationModel;
