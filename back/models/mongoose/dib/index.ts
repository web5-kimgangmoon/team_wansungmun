import { Schema, model, connect } from "mongoose";

// objectId로 알아서 개인키를 만듭니다.
export interface IDib {
  product_id: number;
  charge_point: number;
  created_at: Date;
}

const schema = new Schema<IDib>({
  product_id: { type: Number },
  charge_point: { type: Number },
  created_at: { type: Date, default: Date.now() },
});

const Dib = model<IDib>("Dib", schema);

export default Dib;
