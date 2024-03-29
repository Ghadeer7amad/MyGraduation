import mongoose, {Schema, model} from "mongoose";

const UserSchema = new Schema({
    userName:{
        type: String,
        min: 4,
        max: 20,
        required: true
    },
     email : {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number, 
        required: true,
    },
    phone : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true
    },
    confirmpassword:{
        type: String,
        default: false,
    },
    confirmEmail:{
        type: Boolean,
        default: false
    },
    role: {
        type : String,
        default: 'User',
        enum : ['User', 'Admin']
    },
    sendCode:{
        type: String,
        default: null
    },
    loginAttempts: {
        type: Number,
        default: 0 
    },

},
{ 
    timestamps : true 
});

UserSchema.virtual("Appointment", {
    localField: "_id",
    foreignField: "AppointmentId",
    ref: "Appointment",
  });

  UserSchema.virtual("Notification", {
    localField: "_id",
    foreignField: "NotificationId",
    ref: "Notification",
  });


const UserModel = mongoose.model.User || model('User', UserSchema)
export default UserModel