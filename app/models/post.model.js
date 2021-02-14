module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      username: String,
      activity: String,
      likes: Number,
    },
    { timestamps: true }
  );

  schema.method('toJSON', function () {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Post = mongoose.model('post', schema);
  return Post;
};
