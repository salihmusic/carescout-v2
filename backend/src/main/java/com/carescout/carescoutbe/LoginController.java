package com.carescout.carescoutbe;

import LoginService.LoginService;
import Models.LoginCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/login")
public class LoginController {
    private final LoginService loginService;

    @Autowired
    public LoginController() {
        this.loginService = new LoginService();
    }

    @GetMapping()
    public String LandingPage(){
        return "Welcome to the Carescout";
    }

    @GetMapping("/all-credentials")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<LoginCredentials> GetCredentials(){
        return this.loginService.GetUserCredentials();
    }

    @PostMapping()
    @CrossOrigin(origins = "http://localhost:4200")
    public boolean Login(@RequestBody LoginCredentials loginCredentials){
        return this.loginService.CheckCredentials(loginCredentials);
    }

}
