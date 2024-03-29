import mongoose, { Schema, model, Types } from "mongoose";

const SalonSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 4,
      maxlength: 50,
      required: true,
    },
    branches: {
        type: [String],
        required: true,
      },
    image: {
      type: Object,
    },
    openTimes: {
      startTime: {
        type: Number, 
        required: true,
      },
      endTime: {
        type: Number, 
        required: true,
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

SalonSchema.virtual("Product", {
  //زي كنه حقل وهمي
  localField: "_id", //مفتاح اساسي
  foreignField: "ProductId", // المفتاح الاجنبي
  ref: "Product", //جبتها من اسم المودل الي موجودة بال Product model
});

SalonSchema.virtual("Services", {
  localField: "_id", 
  foreignField: "ServiceId", 
  ref: "Services", 
});

SalonSchema.virtual("Post", {
  localField: "_id",
  foreignField: "PostId",
  ref: "Post",
});

SalonSchema.virtual("Job", {
  localField: "_id",
  foreignField: "JobId",
  ref: "Job",
});

SalonSchema.virtual("Uploadjob", {
  localField: "_id",
  foreignField: "UploadjobId",
  ref: "Uploadjob",
});

SalonSchema.virtual("Employee", {
  localField: "_id",
  foreignField: "EmployeeId",
  ref: "Employee",
});

SalonSchema.virtual("Appointment", {
  localField: "_id",
  foreignField: "AppointmentId",
  ref: "Appointment",
}); 

SalonSchema.virtual("Notification", {
  localField: "_id",
  foreignField: "NotificationId",
  ref: "Notification",
});






const SalonModel = model("Salon", SalonSchema, "salons");

export default SalonModel;
