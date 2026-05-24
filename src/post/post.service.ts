import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './post.dto';


@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
  ) {}

  async create(
    createPostDto: CreatePostDto,
  ) {
    return this.postRepository.createPost(
      createPostDto,
    );
  }

  async findAll() {
    return this.postRepository.getPosts();
  }

  async findOne(id: string) {
    return this.postRepository.getPostById(
      id,
    );
  }
}