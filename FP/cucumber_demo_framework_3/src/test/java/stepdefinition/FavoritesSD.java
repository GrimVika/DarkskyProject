package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.mobile_pages.LandingPage;

public class FavoritesSD {
    LandingPage landingPage = new LandingPage();

    @When("^I click on favorites button$")
    public void clickOnFavoritesButton() throws InterruptedException {
        Thread.sleep(30000);
        landingPage.tapOnFavoritesButton();
    }
    @Then("^I verify 'No Sessions Found' text displayed$")
    public void verifyFavEmptyState () {
        landingPage.verifyEmptyText();
    }
}
