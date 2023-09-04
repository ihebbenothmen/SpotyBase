package com.example.intermove.Entities.User;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder
public class User  implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;
    private String firstname;
    private String lastname;
    private String email;

    public User(int userid) {
        this.userid = userid;
    }

    private String password;
    private String phone;
    private String address;
    private String profilepicture;
    @Enumerated(EnumType.STRING)
    private roletype Roletype;

    @Column(name = "active")
    private int active;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "code_id")
    @JsonIgnore
    private Code code;

    public roletype getRoletype() {
        return Roletype;
    }

    public void setRoletype(roletype roletype) {
        this.Roletype = roletype;
    }




    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        if (Roletype!=null) {
                authorities.add(new SimpleGrantedAuthority(Roletype.toString()));
        }
        return authorities;
    }

    public User(String firstname, String lastname, String email, String password, String phone, String address, String profilepicture) {

        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.profilepicture = profilepicture;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public boolean getId() {return true;
    }
}
