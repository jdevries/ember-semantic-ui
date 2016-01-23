import Ember from 'ember';
import layout from '../templates/components/ui-labeled-button';
import uiButtonBase from '../mixins/ui-button-base';


export default Ember.Component.extend(uiButtonBase, {
    tagName: 'div',
    layout: layout,
    _theme: 'labeled',
    /**
     * Attribute bindings for containing div
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: ['tabindex'],
    tabindex: 0
});
