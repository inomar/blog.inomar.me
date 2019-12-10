import moment from 'moment';

export const strDateTo = (date => {
  return moment(new Date(date)).format('YYYY.MM.DD');
});
