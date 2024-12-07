import Department from '../models/department';
import { Request, Response } from 'express';

// Tạo mới phòng ban
 const addDepartment = async (req, res) => {
  try {
    const {dep_name, description} = (req.body);
    const newDep = new Department({
      dep_name,
      description
    })
    await newDep.save();
    res.status(201).json({success: true, departments: newDep});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy danh sách phòng ban
 const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find()
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const editDepartment = async (res, req) => {
  try {
    const {id} = res.params
    const department = await Department.findById({_id:id})
    res.status(201).json({success: true, department});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export {addDepartment, getDepartments}