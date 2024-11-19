import mongoose, { Document, Schema } from 'mongoose';

interface IEmployee extends Document {
  name: string;
  department: string;
  salary: number;
  hireDate: Date;
}

const employeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  hireDate: { type: Date, default: Date.now },
});

const Employee = mongoose.model<IEmployee>('Employee', employeeSchema);

export default Employee;
