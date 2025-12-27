const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: "Todo" },
  deadline: Date,
  projectId: mongoose.Schema.Types.ObjectId
});
module.exports = mongoose.model("Task", taskSchema);
