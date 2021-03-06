const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jstvq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log("DB connected"));

const imageSchema = new mongoose.Schema({
  name: String,
  date: String,
  imageUrl: String,
  description: String,
  fileName: String,
  public_id: String,
});
//jona_gallery
//

module.exports = mongoose.model("image", imageSchema);
