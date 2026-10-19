import mongoose, { Schema, models, model } from "mongoose";

export interface ILead {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  location: string;
  propertySize?: string;
  frequency: string;
  message?: string;
  createdAt: Date;
}

const LeadSchema = new Schema<ILead>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  service: { type: String, required: true },
  location: { type: String, required: true },
  propertySize: { type: String },
  frequency: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Lead = models.Lead || model<ILead>("Lead", LeadSchema);
export default mongoose as typeof mongoose;
