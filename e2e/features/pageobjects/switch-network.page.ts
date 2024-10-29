import { $ } from '@wdio/globals'
import Page from './page';

/**
 * page containing specific selectors and methods for a specific page
 */
export class SwitchNetworkPage extends Page {
    /**
     * define switch network page selectors using getter methods
     */
    
    public get switchToSepoliaNetworkButton () {
        return $("button.*=Switch network");
    }
    
}

export default new SwitchNetworkPage();

