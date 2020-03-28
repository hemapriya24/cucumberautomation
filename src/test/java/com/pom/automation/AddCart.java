package com.pom.automation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddCart {

public static WebDriver driver;
@FindBy(xpath="//*[@id=\"block_top_menu\"]/ul/li[3]/a")
private WebElement tshrt;

@FindBy (xpath="//*[@id=\"center_column\"]/ul/li/div/div[1]/div/a[1]/img")
private WebElement product;

@FindBy (xpath="//*[@id=\"add_to_cart\"]/button/span")
private WebElement addcart;

@FindBy (xpath="//*[@id=\"layer_cart\"]/div[1]/div[2]/div[4]/a/span")
private WebElement proceed;

public AddCart(WebDriver driver2) {
	this.driver=driver2;
	PageFactory.initElements(driver, this);
	}


public static WebDriver getDriver() {
	return driver;
}

public WebElement getTshrt() {
	return tshrt;
}

public WebElement getProduct() {
	return product;
}

public WebElement getAddcart() {
	return addcart;
}

public WebElement getProceed() {
	return proceed;
}
}
