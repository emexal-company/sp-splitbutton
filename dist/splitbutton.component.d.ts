import { Base } from '@spectrum/sp-base';
export declare class Splitbutton extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    type: string;
    label: string;
    left: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-splitbutton': Splitbutton;
    }
}
