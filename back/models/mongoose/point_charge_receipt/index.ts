import { Schema, model, connect } from "mongoose";

interface IPoint_charge_receipt {
  user_id: number;
  charge_point: number;
  created_at: Date;
}

const schema = new Schema<IPoint_charge_receipt>({
  user_id: { type: Number },
  charge_point: { type: Number },
  created_at: { type: Date, default: Date.now() },
});

const Point_charge_receipt = model<IPoint_charge_receipt>(
  "Point_charge_receipt",
  schema
);

export default Point_charge_receipt;
