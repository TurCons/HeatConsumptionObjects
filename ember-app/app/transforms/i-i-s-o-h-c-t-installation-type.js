import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import TInstallationTypeEnum from '../enums/i-i-s-o-h-c-t-installation-type';

export default FlexberryEnum.extend({
  enum: TInstallationTypeEnum,
  sourceType: 'IIS.OHC.TInstallationType'
});
