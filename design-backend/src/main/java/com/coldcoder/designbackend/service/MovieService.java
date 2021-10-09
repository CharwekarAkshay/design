package com.coldcoder.designbackend.service;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.coldcoder.designbackend.models.Movie;
import com.coldcoder.designbackend.repositories.MovieRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MovieService {
	private MovieRepository movieRepository;

	public Movie addNewMovie(Movie movie) {
		return movieRepository.save(movie);
	}

	public List<Movie> findAll() {
		return movieRepository.findAll();
	}

	public List<Movie> getTopThreeMovie() {
		return movieRepository.findAll(Sort.by("rating"));
	}
}
