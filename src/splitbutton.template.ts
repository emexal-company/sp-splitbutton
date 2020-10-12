import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import '@spectrum/sp-button';
import { Splitbutton } from './splitbutton.component';

export default function standardTemplate(this: Splitbutton) {
    
    const classes = {
        'spectrum-SplitButton--left': this.left
    };
    var trigger='';
    var action='';
    switch (this.type) {
        case 'cta':
                trigger='splittriggercta';
                action='splitactioncta';
            break;
        case 'primary':
                trigger='splittriggerprimary';
                action='splitactionprimary';
            break;
        case 'secondary':
                trigger='splittriggersecondary';
                action='splitactionsecondary';
            break;
        default:
            console.log("No such type exists!");
            break;
    }
  

return html`
<div class="spectrum-SplitButton ${classMap(classes)}">
${this.left ? html`<sp-button type="${trigger}" icon="ChevronDownMedium"></sp-button>
                   <sp-button type="${action}" label="${this.label}"></sp-button>` 
            : html`<sp-button type="${action}" label="${this.label}"></sp-button>
                   <sp-button type="${trigger}" icon="ChevronDownMedium"></sp-button>`}  
</div>
   `;
}
