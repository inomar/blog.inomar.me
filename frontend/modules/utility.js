import moment from 'moment';

export function strDateTo(date) {
  return moment(new Date(date)).format('YYYY.MM.DD');
}