package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pom.Register;

public class StepDefinition {
	 WebDriver driver; 
	@Given("^I Luanch demo URL$")
	public void luanch()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Rajesh Kumar.K\\OneDrive\\Desktop\\Jar\\chromedriver.exe");
			//Initialize driver
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.get("http://demo.automationtesting.in/Register.html");
	} 
	@When("^I enter the First Name as \"(.*)\"$")
	public void enterFname(String fName)
	{
		Register objRegister = new Register(driver);
		objRegister.enterFirstName(fName);
		//driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys(fName);
		
	}
	@When("^I enter the Last Name as \"(.*)\"$")
	public void enterlname(String lName)
	{
		Register objRegister = new Register(driver);
		objRegister.enterFirstName(lName);
		//driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys(lName);
		
	}
	
	@And("^I enter the Address as \"(.*)\"$") 
	public void enterAddress(String address)
	{
		driver.findElement(By.xpath("//textarea[@ng-model='Adress']")).sendKeys(address);		
	}
	
	@And("^I enter the Email Address as \"(.*)\"$") 
	public void enterEmail(String email)
	{
		driver.findElement(By.xpath("//input[@type ='email']")).sendKeys(email);
		
	}
	@And("^I enter the Phone as \"(.*)\"$") 
	public void enterPhone(String phone)
	{
		driver.findElement(By.xpath("//input[@type ='tel']")).sendKeys(phone);
		
	}
	@And("^Click On Submit button")
	public void clickSubmit()
	{
		driver.findElement(By.xpath("//button[@id='submitbtn']")).click();
		
	}
}
