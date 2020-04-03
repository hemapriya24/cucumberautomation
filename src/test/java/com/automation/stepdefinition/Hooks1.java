package com.automation.stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks1 {
@Before("@Regressiontest")
public void beforeScenario() {
System.out.println("before:===regressiontest");	

}
@After("@RegressionTest")
public void afterScenario() {
	System.out.println("after:====regressiontest");

}
}
