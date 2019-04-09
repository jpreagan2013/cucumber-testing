package com.mobilereach;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"html:output"}, //this creates an output with the testing info
features= "src/test/resources/com/mobilereach") //for some reason you have to specify the location, the default won't work for me
public class testRunner {

}
