package kanhaiyakumar.me.services;


import kanhaiyakumar.me.entity.User;
import kanhaiyakumar.me.entity.UserRole;

import java.util.Set;

public interface UserService {
	
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;

	public User updateUser(User user, String username) throws Exception;
	
	public User getUser(String username);

	public User deleteUser(String username);

}
