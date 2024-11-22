const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    body: String,
    author: String,
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default BlogModel;
