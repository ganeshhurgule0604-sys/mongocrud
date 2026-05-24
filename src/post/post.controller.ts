import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { PostService } from './post.service';
import { CreatePostDto } from './post.dto';


@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) {}

  // CREATE POST
  @Post()
  async create(
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postService.create(
      createPostDto,
    );
  }

  // GET ALL POSTS
  @Get()
  async findAll() {
    return this.postService.findAll();
  }

  // GET SINGLE POST
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ) {
    return this.postService.findOne(id);
  }
}