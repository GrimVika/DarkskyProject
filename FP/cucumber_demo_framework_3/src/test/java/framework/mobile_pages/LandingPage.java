package framework.mobile_pages;

import framework.MobileBasePage;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSFindBy;

public class LandingPage extends MobileBasePage {

    @AndroidFindBy(xpath = "//android.widget.Button[@content-desc='SKIP ']")
    @iOSFindBy(accessibility = "yesButton")
    private MobileElement yesButton;

    @AndroidFindBy(xpath= "//android.webkit.WebView/android.view.View/android.widget.Button[1]")
    private MobileElement mainMenu;

    @AndroidFindBy(className = "android.view.View")
    private MobileElement sidebarHeader2;

    @AndroidFindBy(xpath= "//android.view.View[@content-desc='Menu']")
    private MobileElement sidebarHeader1;

    @AndroidFindBy(className = "android.widget.ToggleButton")
    private MobileElement favoritesButton;

    @AndroidFindBy(className = "android.view.View")
    private MobileElement noSessionsFoundText;

    public void tapOnSkipButton() { tapOn(yesButton); }

    public void tapOnMainMenuButton() { tapOn(mainMenu); }

    public boolean isSideMenuBarDisplayed() { return isElementDisplayed(sidebarHeader1); }

    public void tapOnFavoritesButton () {tapOn(favoritesButton);}

    public boolean verifyEmptyText() { return isElementDisplayed(noSessionsFoundText); }

}
