package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
@CucumberOptions(	
		format = {"pretty","html:target/cucumber-reports/cucumber-pretty"},	
			tags={"@TestCase_DemoAutomation"},
			features = "src/main/java/features",
			glue={"stepDefinitions"}
	)

public class TestRunner extends AbstractTestNGCucumberTests {
	
	

}
