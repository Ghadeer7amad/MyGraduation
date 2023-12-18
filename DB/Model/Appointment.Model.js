import mongoose, { Schema, model,Types } from "mongoose";

const AppointmentSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    salon_id: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    appointment_date: {
      type: String,
      required: true,
    },
    appointment_time: {
      type: String,
      required: true,
    },
    uniqueDate: {
      type: String,
    },
    serviceType: {
      type: String,
      required: true,
    },
  },
  {timestamps: true},
);

AppointmentSchema.index({salon_id: 1, uniqueDate: 1}, {unique: true});

const AppointmentModel = model('Appointment', AppointmentSchema, 'appointments');

export default AppointmentModel;


