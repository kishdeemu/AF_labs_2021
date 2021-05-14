package com.sliit.lab.dal.repository;

import com.sliit.lab.dal.model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostMongoRepository extends MongoRepository<PostModel,String> {
}
