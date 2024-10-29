import { browser } from '@wdio/globals'
import {Element, Key} from 'webdriverio';
export class ElementUtil{
    click(element: Element){
        element.click();
    }
    enterText(element: Element,value: string){
        element.setValue("")
        browser.keys([Key.Ctrl,'a'])
        element.setValue(value)
    }
    async scrollToElement(element: Element){
        await element.scrollIntoView();
    }
    
    public get elementLoadTime(): number {
        return 1000 * 2;
    }

}
export default new ElementUtil();

export interface DynamicObjectType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: string | number | boolean | any;
}