import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './splitbutton.styles';
import standardTemplate from './splitbutton.template';
let Splitbutton = class Splitbutton extends Base {
    constructor() {
        super(...arguments);
        this.type = '';
        this.label = '';
        this.left = false;
    }
    render() {
        return standardTemplate.call(this);
    }
};
Splitbutton.componentStyles = [labelStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Splitbutton.prototype, "type", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Splitbutton.prototype, "label", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Splitbutton.prototype, "left", void 0);
Splitbutton = __decorate([
    customElement('sp-splitbutton')
], Splitbutton);
export { Splitbutton };
//# sourceMappingURL=splitbutton.component.js.map