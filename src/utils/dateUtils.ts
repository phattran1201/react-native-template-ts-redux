import moment from 'moment';

export const formatDate = (date: Date | number | string | any) =>
  moment.unix(date / 1000).format('DD/MM/YYYY');

export const formatDateTime = (dateTime: Date | number | string | any) =>
  moment.unix(dateTime / 1000).format('MM/DD HH:mm');

export const formatDateToTimeStamp = (date: Date | number | string | any) =>
  moment(date, 'DD/MM/YYYY', true).format('x');

export const getDateTimeNow = () => moment().valueOf();

export const randomDate = () => {
  return new Date(
    new Date(2020, 1, 1).getTime() +
      Math.random() * (new Date().getTime() - new Date(2021, 1, 1).getTime())
  ).toISOString();
};
export function randomTimeDown() {
  return Math.floor((Math.random() * 3600 + 1) * 1000);
}
export function randomHour() {
  const hour = Math.floor(Math.random() * 24 + 1);
  return hour < 10 ? '0' + hour : hour;
}
export function randomMinute() {
  const minute = Math.floor(Math.random() * 59 + 1);
  return minute < 10 ? '0' + minute : minute;
}
