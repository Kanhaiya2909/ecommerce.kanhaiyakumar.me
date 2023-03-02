package kanhaiyakumar.me.controller;

import kanhaiyakumar.me.entity.Role;
import kanhaiyakumar.me.entity.User;
import kanhaiyakumar.me.entity.UserRole;
import kanhaiyakumar.me.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@GetMapping("/test")
	public String test() {
		return "Welcome to backend api";
	}
	
	@PostMapping("/create")
	public User createUser(@Valid @RequestBody User user) throws Exception {
		

		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		
		
		Set<UserRole> roles = new HashSet<>();
		
		Role role = new Role();
		
		
		
		role.setRoleName("NORMAL");
		role.setRoleId(12L);
		
		UserRole userRole = new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);
		
		roles.add(userRole);
		
		return this.userService.createUser(user, roles);
	}

	@PutMapping("/update/{username}")
	public User updateUser(@Valid @RequestBody User user, @PathVariable("username") String username)throws Exception{
		return this.userService.updateUser(user, username);
	}



	@GetMapping("get/{username}")
	public User getUser(@PathVariable("username") String username) {
		return this.userService.getUser(username);
	}

	@DeleteMapping("/delete/{username}")
	public User deleteUser(@PathVariable("username") String username){
		return this.userService.deleteUser(username);
	}












}
