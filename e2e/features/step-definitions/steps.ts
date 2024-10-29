import { Given, When, Then } from '@wdio/cucumber-framework';
import {expect, $, browser} from '@wdio/globals'

import LoginPage, {LoginPage as  LoginPageType} from '../pageobjects/login.page';
import HomePage, {HomePage as  HomePageType} from '../pageobjects/home.page';
import SwitchNetworkPage, {SwitchNetworkPage as SwitchNetworkPageType} from '../pageobjects/switch-network.page';
import Page, {BASE_URL} from "../pageobjects/page";

import metaMaskPO from '../pageobjects/meta-mask';
import metamaskData from '../pagedata/metamask-data';
import elementUtil from "../pageobjects/element.util";
import homePage from "../pageobjects/home.page.js";

const pages: {
    login: LoginPageType,
    home: HomePageType,
    switchNetwork: SwitchNetworkPageType
} = {
    login: LoginPage,
    home: HomePage,
    switchNetwork: SwitchNetworkPage,
}

// Given(/^I am on the (\w+) page$/, async (page: string) => {
//     await pages[page].open()
// });

//
// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });
//
// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
//     //@ts-ignore
//     await browser.pause(4000);
// });

let initialHandles: string[] = [];
let finalHandles: string[] = [];

/** Test/Feature 1 **/
Given(/^A user with metamask installed connected to mainnet network - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    if(testId && scenarioId && testId===1 && scenarioId===1){
        await pages.home.open();
        await browser.maximizeWindow();
        await browser.pause(elementUtil.elementLoadTime);
        await browser.switchWindow('MetaMask');
        await browser.pause(elementUtil.elementLoadTime);
        
        elementUtil.click(await metaMaskPO.initIAgreesButton);
        elementUtil.click(await metaMaskPO.importWalletOnboardingButton)
        elementUtil.click(await metaMaskPO.iAgreeButton)
        await metaMaskPO.importAccount(metamaskData.metaMaskInformation)
        elementUtil.click(await metaMaskPO.importAllDoneButton)
        await browser.pause(elementUtil.elementLoadTime)
        elementUtil.click(await metaMaskPO.importCompleteNextButton)
        elementUtil.click(await metaMaskPO.importCompleteDoneButton)
        await browser.pause(elementUtil.elementLoadTime)
        elementUtil.click(await metaMaskPO.metaMaskChooseAccountNextButton)
        elementUtil.click(await metaMaskPO.metaMaskChooseAccountConfirmButton)
        await browser.pause(elementUtil.elementLoadTime)
        
    }
});

Given(/^A user with metamask installed connected to sepolia network - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    if(testId && scenarioId && [2, 3].includes(testId) && scenarioId===1){
        await pages.home.open();
        await browser.maximizeWindow();
        await browser.pause(elementUtil.elementLoadTime);
        await browser.switchWindow('MetaMask');
        await browser.pause(elementUtil.elementLoadTime);
        
        elementUtil.click(await metaMaskPO.initIAgreesButton);
        elementUtil.click(await metaMaskPO.importWalletOnboardingButton)
        elementUtil.click(await metaMaskPO.iAgreeButton)
        await metaMaskPO.importAccount(metamaskData.metaMaskInformation)
        elementUtil.click(await metaMaskPO.importAllDoneButton)
        await browser.pause(elementUtil.elementLoadTime)
        elementUtil.click(await metaMaskPO.importCompleteNextButton)
        elementUtil.click(await metaMaskPO.importCompleteDoneButton)
        await browser.pause(elementUtil.elementLoadTime)
        elementUtil.click(await metaMaskPO.metaMaskChooseAccountNextButton)
        elementUtil.click(await metaMaskPO.metaMaskChooseAccountConfirmButton)
        await browser.pause(elementUtil.elementLoadTime);
        
        await browser.switchWindow(BASE_URL);
        await browser.refresh();
        
        await handleSepoliaNetworkSwitch(1, 2);
        
    }
});


When(/^the user accesses the app page - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    if(testId && scenarioId && testId===1 && scenarioId===1){
        await browser.switchWindow(BASE_URL);
        await browser.refresh();
        initialHandles=await browser.getWindowHandles();
    }else{
        await browser.switchWindow(BASE_URL);
        await browser.refresh();
        await browser.refresh();
    }

});

When(/^the user accepts notifications to connect to Sepolia network - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await handleSepoliaNetworkSwitch(testId, scenarioId);
});

Then(/^the page shows the account address - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.switchWindow(BASE_URL);
    await expect(pages.home.connectedAccountAddressElem).toBeExisting();
    await expect(pages.home.connectedAccountAddressElem).toHaveText(expect.stringContaining('Connected as'));
});

Then(/^the page shows the input address field - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.switchWindow(BASE_URL);
    await expect(pages.home.connectedAddressInput).toBeExisting();
    await expect(pages.home.connectedAddressInput).toBeDisplayed();
});

Then(/^the page doesn't show a network error message - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await expect(await pages.home.networkErrorElem).not.toBeExisting();
    await browser.pause(elementUtil.elementLoadTime * 2);
});

Then(/^the page shows a network error message - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await expect(await pages.home.networkErrorElem).toBeExisting();
    await expect(await pages.home.networkErrorElem).toBeDisplayed();
});

Then(/^the page shows the switch network button - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await expect(await pages.home.connectToSepoliaNetworkButton).toBeExisting();
    await expect(await pages.home.connectToSepoliaNetworkButton).toBeDisplayed();
});

Then(/^the page doesn't show the input address field - Test (\d+) Scenario (\d+)$/, async (testId, scenarioId) => {
    await expect(await pages.home.connectedAddressInput).not.toBeExisting();
    await browser.refresh();
});

Then(/^the user clicks the switch network button - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await handleSepoliaNetworkSwitch(testId, scenarioId);
});

Then(/^the user confirms the switch network - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await handleSepoliaNetworkSwitch(testId, scenarioId);
});

When(/^the user enters the address (.+) in the input address field - Test (\d+) Scenario (\d+)$/, async (address: string, testId: number, scenarioId: number) => {
    await browser.switchWindow(BASE_URL);
    await browser.refresh();
    await expect(pages.home.connectedAddressInput).toBeExisting();
    elementUtil.enterText(await pages.home.connectedAddressInput, address);
});

When(/^the user clicks the Submit button - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await expect(pages.home.connectedAddressSubmitButton).toBeExisting();
    elementUtil.click(await pages.home.connectedAddressSubmitButton);
});

When(/^the submit button is disabled - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.pause( elementUtil.elementLoadTime);
    await expect(pages.home.connectedAddressSubmitButton).toBeExisting();
    await expect(pages.home.connectedAddressSubmitButton).toBeDisabled();
});

Then(/^the page shows the address balance for the selected token - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.pause( elementUtil.elementLoadTime);
    await expect(pages.home.selectedTokenBalanceElem).toBeExisting();
    await expect(pages.home.selectedTokenBalanceElem).toBeDisplayed();
    await expect(pages.home.selectedTokenBalanceElem).toHaveText(expect.stringContaining('Your token balance is'));
});

Then(/^the page shows the token balance 0 - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.pause( elementUtil.elementLoadTime);
    await expect(pages.home.selectedTokenBalanceElem).toBeExisting();
    await expect(pages.home.selectedTokenBalanceElem).toBeDisplayed();
    await expect(pages.home.selectedTokenBalanceElem).toHaveText(expect.stringContaining('Your token balance is 0'));
});

Then(/^the page shows the table of the deposit history for the selected token - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await expect(pages.home.selectedTokenTableHistoryElem).toBeExisting();
    await expect(pages.home.selectedTokenTableHistoryElem).toBeDisplayed();
    await expect(pages.home.selectedTokenTableHistoryElem).toHaveText(expect.stringContaining('ACCOUNT DEPOSIT HISTORY'));
});

When(/^the user clicks the example token link - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.pause( elementUtil.elementLoadTime);
    await expect(pages.home.exampleTokenLinkElem).toBeExisting();
    elementUtil.click(await pages.home.exampleTokenLinkElem);
});

Then(/^the deposit input shows an error - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await expect(pages.home.depositInputErrorElem).toBeExisting();
    await expect(pages.home.depositInputErrorElem).toBeDisplayed();
    await expect(pages.home.depositInputErrorElem).toHaveText(expect.stringContaining('The deposit is disabled'));
});

Then(/^the deposit button is not visible - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await expect(pages.home.depositInputButtonElem).not.toBeDisplayed();
});

When(/^the user clicks the Get more tokens link - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    initialHandles =await browser.getWindowHandles();
    await expect(pages.home.getMoreTokenLinkElem).toBeExisting();
    elementUtil.click(await pages.home.getMoreTokenLinkElem);
});

When(/^the user accepts the transaction - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.pause(elementUtil.elementLoadTime);
    const finalHandlesInner = await browser.getWindowHandles();
    const diffHandles = finalHandlesInner.filter(x => !initialHandles.includes(x));
    if (diffHandles.length > 0) {
        const windowToSwitch = diffHandles[diffHandles.length - 1];
        await browser.switchToWindow(windowToSwitch);
        await browser.maximizeWindow();
        await browser.pause(elementUtil.elementLoadTime * 2)
        
        elementUtil.click(await pages.home.getMoreMintEditFeeButton);
        await browser.pause(elementUtil.elementLoadTime)
        elementUtil.click(await pages.home.getMoreMintEditFeeAdvanceButton);
        await browser.pause(elementUtil.elementLoadTime)
        
        elementUtil.enterText(await pages.home.getMoreMintEditFeeAdvanceBaseFeeInput, '0');
        elementUtil.enterText(await pages.home.getMoreMintEditFeeAdvancePriorityFeeInput, '0');
        elementUtil.click(await pages.home.getMoreMintEditFeeAdvancePrioritySaveButton);
        await browser.pause(elementUtil.elementLoadTime * 2.5);
        await browser.closeWindow();
    }
});

Then(/^the deposit button is visible - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
  // @todo: get test address that will work for funding account
});
Then(/^the user enter the max amount of tokens in the amount field - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
  // @todo: get test address that will work for funding account
});
Then(/^the user clicks the deposit button - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
  // @todo: get test address that will work for funding account
});
Then(/^the user approve the deposit - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
  // @todo: get test address that will work for funding account
});

const handleSepoliaNetworkSwitch = async (testId: number, scenarioId: number) => {
    if(testId && scenarioId && testId==1 && scenarioId==2) {
        await browser.pause(elementUtil.elementLoadTime);
        const initialHandlesInner = await browser.getWindowHandles();
        elementUtil.click(await pages.home.connectToSepoliaNetworkButton);
        await browser.pause(elementUtil.elementLoadTime);
        const finalHandlesInner = await browser.getWindowHandles();
        const diffHandles = finalHandlesInner.filter(x => !initialHandlesInner.includes(x));
        if (diffHandles.length > 0) {
            const windowToSwitch = diffHandles[diffHandles.length - 1];
            await browser.switchToWindow(windowToSwitch);
            await browser.maximizeWindow();
            await browser.pause(elementUtil.elementLoadTime * 2.5)
            elementUtil.click(await pages.switchNetwork.switchToSepoliaNetworkButton);
            await browser.pause(elementUtil.elementLoadTime * 2.5)
        }
    }
}