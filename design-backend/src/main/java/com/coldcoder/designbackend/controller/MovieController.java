package com.coldcoder.designbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coldcoder.designbackend.models.Movie;
import com.coldcoder.designbackend.service.MovieService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/movie")
@AllArgsConstructor
public class MovieController {
	
	private MovieService movieService;
	
	@GetMapping
	public List<Movie> getMovie() {
		return movieService.getTopThreeMovie();
	}
	
	@PostMapping
	public Movie addNewMovie(@RequestBody Movie movie) {
		return movieService.addNewMovie(movie);
	}
}
