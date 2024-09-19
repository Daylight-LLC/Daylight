import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'], default: 'NOT_STARTED' },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
}, { timestamps: true });

export const Project = mongoose.model('Project', projectSchema);
