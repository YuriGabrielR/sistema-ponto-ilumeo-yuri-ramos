import moment from "moment";

export  const formatDate = (dateString?: Date) => { return dateString ? moment(dateString).format('DD/MM/YYYY') : '-'; }; 

export const formatTime = (dateString?: Date) => { return dateString ? moment(dateString).format('HH[h]mm[min]') : '-'; };