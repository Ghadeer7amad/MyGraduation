import ManagerModel from "../../../DB/Model/Manager.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { customAlphabet } from "nanoid";
import { sendEmail } from "../../Services/Email.js";

export const createManager = async (req, res) => {
  const { userName, email, phone, address, age, password ,salonId} =req.body;
    
  const User = await ManagerModel.findOne({ email });
  if (User) {
    return res.status(404).json({ message: "email already exists" });
  }
  const hashedpassword = bcrypt.hashSync(
    password,
    parseInt(process.env.SALT_ROUND)
  );
  const createManager = await ManagerModel.create({
    userName,
    email,
    phone,
    address,
    age,
    password: hashedpassword,
    salonId,
  });
  return res.status(201).json({ message: "success", user: createManager });
  // try {
  //     const { email } = req.body;
  //     const existingManager = await ManagerModel.findOne({ email });

  //     if (existingManager) {
  //         return res.status(400).json({ message: "Email already exists" });
  //     }

  //     const newManager = await ManagerModel.create(req.body);

  //     res.status(201).json(newManager);
  // } catch (error) {
  //     res.status(500).json({ error });
  // }
};

export const getAllManagers = async (req, res) => {
  const managerId = req.params.id;
  try {
    const manager = await ManagerModel.findById(managerId);
    if (!manager) {
      return res.status(404).json({ message: "Manager not found" });
    }
    const managers = await ManagerModel.find({ ManagerId: managerId });
    res.status(200).json(managers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getManagerById = async (req, res) => {
  try {
    const manager = await ManagerModel.findById(req.params.id);
    if (manager) {
      res.status(200).json(manager);
    } else {
      res.status(404).json({ message: "Manager not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateManager = async (req, res) => {
  try {
    const updatedManager = await ManagerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedManager) {
      res.status(200).json(updatedManager);
    } else {
      res.status(404).json({ message: "Manager not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteManager = async (req, res) => {
  try {
    const deletedManager = await ManagerModel.findByIdAndDelete(req.params.id);
    if (deletedManager) {
      res.status(200).json(deletedManager);
    } else {
      res.status(404).json({ message: "Manager not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
