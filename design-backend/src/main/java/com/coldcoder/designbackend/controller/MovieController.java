package com.coldcoder.designbackend.controller;

import com.coldcoder.designbackend.models.Movie;
import com.coldcoder.designbackend.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movie")
@AllArgsConstructor
public class MovieController {

    private MovieService movieService;

    @GetMapping(value = "trending")
    public Page<Movie> getMovie() {
        return movieService.getTopThreeMovie();
    }

    @PostMapping
    public Movie addNewMovie(@RequestBody Movie movie) {
        return movieService.addNewMovie(movie);
    }
}
