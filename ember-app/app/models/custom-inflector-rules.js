import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('building', 'Buildings');
inflector.irregular('consumer', 'Consumers');
inflector.irregular('section', 'Sections');
inflector.irregular('object', 'Objects');
inflector.irregular('area', 'Areas');

inflector.irregular('form', 'Forms'); 

// ICSSoft STORMNET
inflector.irregular('AuditObjectsAuditEntity', 'AuditObjectsAuditEntitys');


inflector.irregular('SecurityAccess', 'SecurityAccesss');
inflector.irregular('LockData', 'LockDatas');

// extended audit
inflector.irregular('IISOHCExtendedAuditEntity', 'IISOHCExtendedAuditEntitys');
// i-i-s-o-h-c-extended-audit-entity
//inflector.irregular('i-i-s-o-h-c-extended-audit-entity', 'ExtendedAuditEntity');


inflector.irregular('metadata', 'metadatas');
inflector.irregular('layer', 'layers');
inflector.irregular('settings', 'settingss');
inflector.irregular('map', 'maps'); 

export default {};