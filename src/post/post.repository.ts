import { Injectable } from "@nestjs/common";
import { Post } from "./post.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreatePostDto } from "./post.dto";

export class PostRepository{
    constructor(
        @InjectModel(Post.name)
        private readonly postModel:Model<Post>
    ){}

    async createPost(
    createPostDto: CreatePostDto,
  ) {
    return this.postModel.create(
      createPostDto,
    );
  }

    async getPosts() {
    return this.postModel
      .find()
      .populate('user')
      .sort({
        createdAt: -1,
      });
  }

  // DETAILS API
  async getPostById(id: string) {
    return this.postModel
      .findById(id)
      .populate('user');
  }
}
