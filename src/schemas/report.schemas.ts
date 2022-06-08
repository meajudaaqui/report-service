import { Schema, model, Document } from "mongoose";

interface IReport extends Document {
  service?: string,
  description?: string,
  name?: string,
  id?: any,
}

const ReportSchemas = new Schema(
  {
    service: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    id: {
      type: String,
    }
  },
  {
    timestamps: true
  }
)

export default model<IReport>("Report", ReportSchemas);