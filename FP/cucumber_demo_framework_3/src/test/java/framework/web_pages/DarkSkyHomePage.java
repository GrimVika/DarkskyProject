package framework.web_pages;

import framework.BasePage;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;

public class DarkSkyHomePage extends BasePage {

    private By searchTextField = By.xpath("//input[@type='text']");
    private By magnGlass = By.xpath("//a[@class='searchButton']");
    private By temp = By.xpath("//span[@class='summary swap']");
    private By lowTemp = By.xpath("//span[@class='currently']//span[2]//span[2]//span[2]");
    private By highTemp = By.xpath("//span[@class='summary-high-low']//span[3]");


 public void clearTextField () {
     clickOn(searchTextField);
     clearAField(searchTextField);
 }

 public void enterAddressOrZipcode (String addressOrZipcode) {
     sendText(searchTextField, addressOrZipcode);
 }

 public void clickOnGlass () {
     clickOn(magnGlass);
 }
 

 public void verifyTempValue () {
     String tempNum = getTextFromElement(temp);
     tempNum.substring(0, 1);
     int currentTemp = Integer.parseInt(tempNum);

     String tempLow = getTextFromElement(lowTemp);
     tempLow.substring(5, 6);
     int lowTemp = Integer.parseInt(tempLow);

     String tempHigh = getTextFromElement(highTemp);
     tempHigh.substring(5, 6);
     int highTemp = Integer.parseInt(tempHigh);

     if (currentTemp > lowTemp && currentTemp < highTemp) {
         return;
     }
 }

 }

