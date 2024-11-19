import mongoose from 'mongoose';

const salarySchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Salary = mongoose.model('Salary', salarySchema);
export default Salary;
