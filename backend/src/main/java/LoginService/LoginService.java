package LoginService;

import Models.LoginCredentials;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
@Component
public class LoginService {

    private ArrayList<LoginCredentials> Users = new ArrayList<>();
    public LoginService() {
        Users.add(new LoginCredentials("salih", "123"));
        Users.add(new LoginCredentials("bekir", "123"));
        Users.add(new LoginCredentials("amila", "123"));
    }

    public ArrayList<LoginCredentials> GetUserCredentials(){
        return this.Users;
    }

    public boolean CheckCredentials(LoginCredentials loginCredentials){
        for (var user:
                this.GetUserCredentials()) {
            if(user.getUsername().equals(loginCredentials.getUsername()) && user.getPassword().equals(loginCredentials.getPassword())) return true;
            continue;
        }
        return false;
    }
}
