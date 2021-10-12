package com.coldcoder.designbackend.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.coldcoder.designbackend.models.Movie;

public interface MovieRepository extends MongoRepository<Movie, String> {
}
