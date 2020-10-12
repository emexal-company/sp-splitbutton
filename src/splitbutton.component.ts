import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './splitbutton.styles';
import standardTemplate from './splitbutton.template';

@customElement('sp-splitbutton')
export class Splitbutton extends Base {
  public static componentStyles = [labelStyles];

  @property({ type: String }) public type: string = '';
  @property({ type: String }) public label: string = '';
  @property({ type: Boolean }) public left: boolean = false;

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-splitbutton': Splitbutton;
  }
}
