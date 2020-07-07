import {
  defaultGetTextAndFormatDate, defaultGetSingleAppointment,
} from '../../../../../js/renovation/scheduler/appointment-tooltip/utils/default-functions';

describe('AppointmentTooltip Default Functions', () => {
  describe('defaultGetTextAndFormatDate', () => {
    it('should return default data', () => {
      expect(defaultGetTextAndFormatDate())
        .toEqual({ text: '', formatDate: '' });
    });
  });
  describe('defaultGetSingleAppointment', () => {
    it('should return default appointment', () => {
      expect(defaultGetSingleAppointment())
        .toEqual({ });
    });
  });
});
