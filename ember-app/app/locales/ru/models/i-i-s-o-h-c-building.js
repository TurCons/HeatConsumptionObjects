export default {
  projections: {
    AuditView: {
      address: {
        __caption__: 'Address'
      },
      resultSquare: {
        __caption__: 'Result square'
      },
      networkArea: {
        __caption__: 'Network area',
        areaName: {
          __caption__: 'Area name'
        }
      }
    },
    BuildingE: {
      networkArea: {
        __caption__: '',
        areaName: {
          __caption__: 'Район'
        }
      },
      address: {
        __caption__: 'Адрес'
      },
      resultSquare: {
        __caption__: 'Общая площадь'
      },
      resultSquare_notStored: {
        __caption__: 'Общая площадь не хранимая'
      }
    },
    BuildingL: {
      networkArea: {
        __caption__: 'Название района',
        areaName: {
          __caption__: 'Название района'
        }
      },
      address: {
        __caption__: 'Адрес'
      },
      resultSquare: {
        __caption__: 'Общая площадь ОТП'
      },
      resultSquare_notStored: {
        __caption__: 'общая площадь не хранимая'
      }
    }
  }
};
