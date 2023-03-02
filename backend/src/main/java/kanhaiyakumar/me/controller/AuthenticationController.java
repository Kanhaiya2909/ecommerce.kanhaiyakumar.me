package kanhaiyakumar.me.controller;

import kanhaiyakumar.me.config.JwtUtils;
import kanhaiyakumar.me.entity.JwtRequest;
import kanhaiyakumar.me.entity.JwtResponse;
import kanhaiyakumar.me.entity.User;
import kanhaiyakumar.me.services.impl.UserDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailServiceImpl userDetailServiceImpl;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		try {
			authentication(jwtRequest.getUsername(), jwtRequest.getPassword());
			
		} catch (UsernameNotFoundException e) {
			e.printStackTrace();
			throw new Exception("User Not Found");
		}
		
		UserDetails userDetails = this.userDetailServiceImpl.loadUserByUsername(jwtRequest.getUsername());
		String generateToken = this.jwtUtils.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(generateToken));
	}
	
	private void authentication(String username,String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		} catch (DisabledException e) {
			throw new Exception("User Disabled "+ e.getMessage());
		}catch (BadCredentialsException e) {
			// TODO: handle exception
			throw new Exception("Invalid Credentials "+ e.getMessage());
		}
	}
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		return ((User) this.userDetailServiceImpl.loadUserByUsername(principal.getName()));
	}

}
