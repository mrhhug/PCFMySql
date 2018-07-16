package com.webreadllc.PCFMySql;

import org.springframework.data.repository.CrudRepository;

/**
 * @author michael
 */

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface MemberRepository extends CrudRepository<Member, Integer> {

}
