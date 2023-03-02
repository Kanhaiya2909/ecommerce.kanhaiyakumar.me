package kanhaiyakumar.me.entity;

import javax.persistence.*;


@Entity
public class UserRole {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userRoleId;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private User user;
	
	@ManyToOne
	private Role role;

	public Long getUserRoleId() {
		return userRoleId;
	}

	public void setUserRoleId(Long userRoleId) {
		this.userRoleId = userRoleId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

//	public UserRole(Long userRoleId, User user, Role role) {
//		super();
//		this.userRoleId = userRoleId;
//		this.user = user;
//		this.role = role;
//	}

	public UserRole() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
