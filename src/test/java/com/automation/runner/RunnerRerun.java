package com.automation.runner;

import java.io.IOException;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.Baseclass;
import com.automation.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "@Report\\rerun.txt",
                 glue ="com\\automation\\stepdefinition",
                 //plugin = {"com.cucumber.listener.ExtentCucumberFormatter:Report/cucumber-reports/json:target/cucumber.json",
                		 //"html:normal.html",
                 //},
                 
                 monochrome=true,
                 strict = true,
                 dryRun=false)

public class RunnerRerun {
public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws IOException
	{
String browserName=FileReaderManager.getInstance().getcrInstance().getBrowserName();
driver=Baseclass.browserLaunch(browserName);
	}
                 		
}
