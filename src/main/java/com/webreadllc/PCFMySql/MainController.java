package com.webreadllc.PCFMySql;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author michael
 */
@RestController("/api/")
public class MainController {
    @Autowired 
    private MemberRepository userRepository;

    @PutMapping("/api/add/{name}/{specialty}/{singer}")
    public void add (@PathVariable String name, @PathVariable String specialty, @PathVariable Boolean singer) {
	userRepository.save(new Member(name, specialty, singer));
    }
    
    @PutMapping("/api/addOrUpdate/{id}/{name}/{specialty}/{singer}")
    public void addOrUpdate (@PathVariable Integer id, @PathVariable String name, @PathVariable String specialty, @PathVariable Boolean singer) {
	userRepository.save(new Member(id, name, specialty, singer));
    }
    
    @PutMapping("/api/GodBlessTheGreatfulDead")
    public void addTheGreatfulDead () {
	userRepository.save(new Member("Tom Constanten", "Keyboards", false));
	userRepository.save(new Member("Jerry Garcia", "Guitar", true));
	userRepository.save(new Member("Donna Jean Godchaux", "Vocals", true));
	userRepository.save(new Member("Keith Godchaux", "Keyboards", false));
	userRepository.save(new Member("Mickey Hart", "Drums", false));
	userRepository.save(new Member("Bill Kreutzmann", "Drums", false));
	userRepository.save(new Member("Phil Lesh", "Bass guitar", true));
	userRepository.save(new Member("Ron \"Pigpen\" McKernan", "Keyboards", true));
	userRepository.save(new Member("Brent Mydland", "Keyboards", true));
	userRepository.save(new Member("Steve Parish", "Roadie", false));
	userRepository.save(new Member("Bob Weir", "Guitar", true));
	userRepository.save(new Member("Vince Welnick", "Keyboards", true));
    }

    @GetMapping("/api/get/{id}")
    public Optional<Member> get(@PathVariable Integer id) {
	return userRepository.findById(id);
    }
    
    @GetMapping("/api/getAll")
    public Iterable<Member> getAll() {
	return userRepository.findAll();
    }
    
    @DeleteMapping("/api/delete/{id}")
    public void delete(@PathVariable Integer id) {
	userRepository.delete(new Member(id));
    }
    
    @DeleteMapping("/api/deleteAll")
    public void deleteAll() {
	userRepository.deleteAll();
    }
}
