import format from 'date-fns/format';

export default function formatter(date) {
    return format(date, 'MMMM D YYYY');
}
