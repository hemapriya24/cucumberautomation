package com.automation.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.Baseclass;
import com.automation.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
/*@ExtendedCucumberOptions(retryCount=4,
                       json="REPORT/jsonReport.json")*/
@CucumberOptions(features = "@Report/Rerun.txt", 
                 glue ="com\\automation\\stepdefinition",
                 plugin = {"com.cucumber.listener.ExtentCucumberFormatter:Report//extentsReport.html",
                		 "html:normal.html",
                		 "rerun:Report/Rerun.txt"},
                 monochrome=true,
                 strict = true,
                 dryRun=false)

public class Runner2 {
public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws IOException
	{
String browserName=FileReaderManager.getInstance().getcrInstance().getBrowserName();
driver=Baseclass.browserLaunch(browserName);
	}
    
	@AfterClass
	public static void tearDown() {
		driver.close();
	}
	
}