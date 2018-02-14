import printDifference from './lodash';
import { createMap } from './map';
import formatter from './date';
import { print } from './helpers';

import '../css/app.css';

function initDateExample() {
    function printCurrentDate(formatterFn) {
        const now = new Date();
        print('date', formatterFn(now));
    }

    printCurrentDate(formatter);
}

function initMapExample() {
    const mapId = 'map';
    createMap(mapId);
}

document.addEventListener('DOMContentLoaded', () => {
    printDifference();
    initDateExample();
    initMapExample();
});
