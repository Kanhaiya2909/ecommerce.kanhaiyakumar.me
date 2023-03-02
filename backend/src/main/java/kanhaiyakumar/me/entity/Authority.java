package kanhaiyakumar.me.entity;

import org.springframework.security.core.GrantedAuthority;

public class Authority implements GrantedAuthority{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String authority;
	
	public void setAuthority(String authority) {
		this.authority = authority;
	}

	public Authority(String authority) {
		this.authority = authority;
	}

	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return this.authority;
	}

}
