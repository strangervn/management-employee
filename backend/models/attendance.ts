import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date },
  date: { type: Date, default: Date.now },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
