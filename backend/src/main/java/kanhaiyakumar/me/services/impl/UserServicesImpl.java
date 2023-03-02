package kanhaiyakumar.me.services.impl;

import kanhaiyakumar.me.entity.User;
import kanhaiyakumar.me.entity.UserRole;
import kanhaiyakumar.me.repository.RoleRepository;
import kanhaiyakumar.me.repository.UserRepository;
import kanhaiyakumar.me.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public class UserServicesImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		User local =this.userRepository.findByUsername(user.getUsername());
		if(local != null) {
			System.out.println("User Already Registered");
			throw new Exception("User Already Registered");
		}else {
			for(UserRole ur:userRoles) {
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local = this.userRepository.save(user);
		}
		return local;
	}



	@Override
	public User updateUser(User user, String username) throws Exception {

		User local = this.userRepository.findByUsername(username);
		User updateUsername = this.userRepository.findByUsername(user.getUsername());
		if(local != null && updateUsername == null){
			local.setUsername(user.getUsername());
			local.setEmail(user.getEmail());
			local.setName(user.getName());
			local.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
			local.setProfileImg(user.getProfileImg());
		}else{
			throw new Exception("Username not found");
		}
		local = this.userRepository.save(local);
		return local;
	}


	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public RoleRepository getRoleRepository() {
		return roleRepository;
	}

	public void setRoleRepository(RoleRepository roleRepository) {
		this.roleRepository = roleRepository;
	}

	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		return this.userRepository.findByUsername(username);
	}

	@Override
	public User deleteUser(String username) {
		User user = this.userRepository.findByUsername(username);
		this.userRepository.deleteById(user.getId());
		return user;
	}

	
	
	

}
