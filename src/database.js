const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jona_gallery:jr2KvOeqgCjCXbo3@cluster0.jstvq.mongodb.net/gallery?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB connected"));

const imageSchema = new mongoose.Schema({
  name: String,
  date: String,
  imageUrl: String,
  description: String,
});
//jona_gallery
//

module.exports = mongoose.model("image", imageSchema);
