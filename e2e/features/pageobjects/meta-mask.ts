import elementHelper, {DynamicObjectType} from './element.util';
import {$, browser} from '@wdio/globals'
import {Key} from "webdriverio";
import {type} from "node:os";
class MetaMask {
    get metaMaskChromeWebStoreAddExtensionToChromeButton() {
        return $("//*[text()='Add extensions']")
    }
    get metaMaskChromeWebStoreAddExtensionToChromeCancelButton() {
        return $("//*[text()='Cancel']")
    }
    get metaMaskChromeWebStoreAddToChromeButton() {
        return $("//*[text()='Add to Chrome']")
    }
    get metaMaskChromeWebStoreRemoveFromChromeButton() {
        return $("//*[text()='Remove from Chrome']")
    }
    get metaMaskDownloadPageChromeInstallButton() {
        return $("//span[text()='Install MetaMask for Chrome']")
    }
    get metaMaskPluginLinkButton() {
        return $("//a[text()='Metamask plugin']")
    }
    get metaMaskDownloadPageChromeTabButton() {
        return $("//div[text()='Chrome']")
    }
    get metaMaskDownloadPageIOSTabButton() {
        return $("//div[text()='iOS']")
    }
    get initIAgreesButton() {
        // Get locator of GetStarted button
        // return $("//input[@id='onboarding__terms-checkbox']")
        return $("span.*=I agree to MetaMask")
        // return $("//button[@id='Create a new wallet']")
        // return $("//button[text()='Create a new wallet']")
    }
    get startedButton() {
        // Get locator of GetStarted button
        return $("//button[text()='Get Started']")
    }
    get importWalletOnboardingButton() {
        // Get locator of Import button
        return $("//button[@data-testid='onboarding-import-wallet']")
    }
    get iAgreeButton() {
        // Get locator of I Agree Button
        return $("//button[text()='I agree']")
    }
    get inputSecretKey() {
        // Get locator of secret key text box
        return $("//input[@id='import-srp__srp-word-0']")
    }
    
    get secretPhaseConfirmButton() {
        // Get locator of password text box
        return $("//button[@data-testid='import-srp-confirm']")
    }
    get inputPassword() {
        // Get locator of password text box
        return $("//input[@data-testid='create-password-new']")
    }
    get inputConfirmPassword() {
        // Get locator of confirm button text box
        return $("//input[@data-testid='create-password-confirm']")
    }
    get termsAndConditionCheckBox() {
        // Get locator of terms and condition check box
        return $("//input[@data-testid='create-password-terms']")
    }
    get importWalletButton() {
        // Get locator of import button
        return $("//button[@data-testid='create-password-import']")
    }
    get importAllDoneButton() {
        // Get locator of All Done button
        return $("//button[@data-testid='onboarding-complete-done']")
    }
    get importCompleteNextButton() {
        // Get locator of close button of pop up
        return $("//button[@data-testid='pin-extension-next']")
    }
    get importCompleteDoneButton() {
        // Get locator of close button of pop up
        return $("//button[@data-testid='pin-extension-done']")
    }
    get metaMaskChooseAccountNextButton() {
        // Get locator of close button of pop up
        return $("//button[@data-testid='page-container-footer-next']")
    }
    get metaMaskChooseAccountConfirmButton() {
        // Get locator of close button of pop up
        return $("//button[@data-testid='page-container-footer-next']")
    }
    get networkIcon() {
        // Get locator of network icon
        return $("//div[@class='app-header__contents']/div[2]//div[@class='chip__left-icon']")
    }
    get selectNetwork() {
        // Get locator of kovan network
        return $("//span[text()='Kovan Test Network']")
    }
    get nextButton() {
        // Get locator of next button
        return $("//button[text()='Next']")
    }
    get connectButton() {
        // Get locator of connect button
        return $("//button[text()='Connect']")
    }
   
    async importAccount(metamaskInfo: { secretKey: string, password: string }) {
        // Enter the Account information 
        await this.pasteSecretKey(metamaskInfo.secretKey)
        elementHelper.click(await this.secretPhaseConfirmButton)
        elementHelper.enterText(await this.inputPassword, metamaskInfo.password)
        elementHelper.enterText(await this.inputConfirmPassword, metamaskInfo.password)
        elementHelper.click(await this.termsAndConditionCheckBox)
        elementHelper.click(await this.importWalletButton)
    }
    
    async pasteSecretKey(secretKey: string) {
        if(typeof secretKey === 'string' && secretKey.trim().length > 0) {
            const secretWords = secretKey.split(' ');
            let currentIndex=0;
            for (const word of secretWords){
                await (await $("//input[@id='import-srp__srp-word-" + currentIndex + "']")).setValue(word);
                currentIndex++;
            }
        }
    }
   


}
export default new MetaMask()