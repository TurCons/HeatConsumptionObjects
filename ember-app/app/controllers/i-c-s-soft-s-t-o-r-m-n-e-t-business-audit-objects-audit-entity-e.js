import EditFormController from './edit-form-common';

export default EditFormController.extend({
  title: 'Аудит по операции',
  parentRoute: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l',
  readonly: true,

  getCellComponent() {
    const cellComponent = this._super(...arguments);
    cellComponent.componentName = 'object-list-view-cell';
    return cellComponent;
  },

  /**
  * Свойство определяет наличие выпадающего меню с пунктами:
  * печать акта, информация и т.д.
  *
  * @property hasSettingInToolbar
  * @type Boolean
  * @default false
  */
  hasSettingInToolbar: false,

  /**
  * Наличие кнопки сохранения на форме.
  *
  * @property  hasSaveButton
  * @type { Boolean }
  * @default  false
  */
  hasSaveButton: false,
});
