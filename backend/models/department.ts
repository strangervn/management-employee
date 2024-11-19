import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
});

const Department = mongoose.model('Department', departmentSchema);
export default Department;
