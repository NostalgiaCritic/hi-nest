import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(readonly movieService: MoviesService) {}

    @Get()
    getAll():Movie[]{
        return this.movieService.getAll();
    };

    @Get(':id')
    getOne(@Param('id') movieId: number): Movie{
        return this.movieService.getOne(movieId);
    };

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.movieService.create(movieData);
    }

    @Delete(':id')
    deleteMovie(@Param('id') movieId: number){
        return this.movieService.deleteOne(movieId);
    }

    @Patch(':id')
    path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto){
        return this.movieService.update(movieId, updateData);
    }
}
