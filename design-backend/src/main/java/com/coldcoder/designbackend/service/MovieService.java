package com.coldcoder.designbackend.service;

import com.coldcoder.designbackend.models.Movie;
import com.coldcoder.designbackend.repositories.MovieRepository;
import lombok.AllArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MovieService {
    private MovieRepository movieRepository;
    private Environment environment;

    public Movie addNewMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    public Page<Movie> getTopThreeMovie() {
        Sort sorting = Sort.by(Sort.Direction.DESC, "released").and(Sort.by(Sort.Direction.DESC, "imdb.rating"));
        PageRequest pageRequest = PageRequest.of(0, 3, sorting);
        return movieRepository.findAll(pageRequest);
    }

    // Fetch movies with the highest rating
    public Page<Movie> getPopularMovie(Integer pageNo, Integer pageSize) {
        if (pageNo == null) {
            pageNo = Integer.valueOf(environment.getRequiredProperty("application.default.page"));
        }
        if (pageSize == null) {
            pageSize = Integer.valueOf(environment.getRequiredProperty("application.default.page.size"));
        }

        Sort sort = Sort.by(Sort.Direction.DESC, "imdb.rating");
        PageRequest pageRequest = PageRequest.of(pageNo, pageSize, sort);
        return movieRepository.findAll(pageRequest);
    }
}
