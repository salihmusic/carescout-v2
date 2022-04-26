package Models;

import java.lang.*;

public class LoginCredentials {
    private String Username;
    private String Password;

    public LoginCredentials(String username, String password) {
        Username = username;
        Password = password;
    }

    public String getUsername(){
        return Username;
    }

    public String getPassword(){
        return Password;
    }
}


