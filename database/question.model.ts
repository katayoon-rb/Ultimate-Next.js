import { Schema, models, model, Document } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[]; // <- Connection to another model in our database
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId; // <- Not an array because there can only be one author that created that post
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const QuestionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }], // <- reference to a tag model
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }], // an array of IDs of users that upvoted this
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  createdAt: { type: Date, default: Date.now },
});

const Question = models.Question || model("Question", QuestionSchema);
export default Question;
