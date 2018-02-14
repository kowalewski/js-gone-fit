import * as moment from 'moment';

export default function formatter(date) {
    return moment(date).format('MMMM D YYYY');
}
