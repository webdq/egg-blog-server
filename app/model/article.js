'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.Types.ObjectId;
  const ArticleSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    category: {
      type: ObjectId,
      ref: 'Category',
      required: true,
    },
    pv: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        user: {
          type: ObjectId,
          ref: 'User',
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        createAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createDate: {
      type: Date,
      default: Date.now,
    },
  });
  return mongoose.model('Article', ArticleSchema);
};
