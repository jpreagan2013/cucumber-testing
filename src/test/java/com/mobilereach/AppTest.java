package com.mobilereach;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AppTest {
	
	@When ("I type ([^\"]*)")
	public void type(String str) {
		System.out.println(str);
	}
	
	@Then("I press log in")
	public void pressLogIn() {
		System.out.println("logged in!");
	}
	
	@Given("I am at the Login Screen")
	public void loginPage(){
		System.out.println("Ready to login");
	}

}