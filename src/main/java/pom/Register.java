package pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Register {
	
	@FindBy(xpath="//input[@ng-model='FirstName']")
	WebElement txtFirstName;
	@FindBy(xpath="//input[@placeholder='Last Name']")
	WebElement txtLastname;
	@FindBy(xpath="//textarea[@ng-model='Adress']")
	WebElement txtAdress;
	@FindBy(xpath= "//input[@type ='email']")
	WebElement txtEmail;
	@FindBy(xpath = "//input[@type ='tel']")
	WebElement txtPhone;
	
	WebDriver driver;
	public Register(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
			}
	public void enterFirstName(String Fname)
	{
		txtFirstName.sendKeys(Fname);
	}
	

}
