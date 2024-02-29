import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import TSectionTypeEnum from '../enums/i-i-s-o-h-c-t-section-type';

export default FlexberryEnum.extend({
  enum: TSectionTypeEnum,
  sourceType: 'IIS.OHC.TSectionType'
});
