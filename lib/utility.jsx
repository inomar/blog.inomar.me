import moment from 'moment';

export const strDateTo = (date => moment(new Date(date)).format('YYYY.MM.DD'));

export const htmlDateTo = (date => moment(new Date(date)).format('YYY-MM-DD'));
