import { html } from 'lit-element';
import { DemoSplitbutton } from './demo-splitbutton.component';

import '@spectrum/sp-splitbutton';
import '@spectrum/sp-container';


export default function template(this: DemoSplitbutton) {
  return html`
  <sp-rule medium label="CTA"></sp-rule>

  <sp-demo width="180">
    <pre><sp-splitbutton type="cta" label="Split Button"></sp-splitbutton></pre>
  </sp-demo>
  <sp-demo width="180">
    <pre><sp-splitbutton left type="cta" label="Split Button"></sp-splitbutton></pre>
  </sp-demo>

  <sp-rule medium label="Primary"></sp-rule>

  <sp-demo width="180">
    <pre><sp-splitbutton type="primary" label="Split Button"></sp-splitbutton></pre>
  </sp-demo>
  <sp-demo width="180">
    <pre><sp-splitbutton left type="primary" label="Split Button"></sp-splitbutton></pre>
  </sp-demo>

  <sp-rule medium label="Secondary"></sp-rule>

  <sp-demo width="180">
    <pre><sp-splitbutton type="secondary" label="Split Button"></sp-splitbutton></pre>
  </sp-demo>
  <sp-demo width="180">
    <pre><sp-splitbutton left type="secondary" label="Split Button"></sp-splitbutton></pre>
  </sp-demo>
  `;
  
}
