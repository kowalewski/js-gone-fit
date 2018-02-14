import { getDateComponent } from './helpers/getDateComponent';
import printDifference from './lodash';
import { createMap } from './map';
import { print, intersectionObserver } from './helpers';

import '../css/app.css';

function initDateExample() {
    function printCurrentDate(formatterFn) {
        const now = new Date();
        print('date', formatterFn(now));
    }

    intersectionObserver('date', () => {
        getDateComponent().then(printCurrentDate);
    });
}

function initMapExample() {
    const mapId = 'map';
    intersectionObserver(mapId, () => createMap(mapId));
}

document.addEventListener('DOMContentLoaded', () => {
    printDifference();
    initDateExample();
    initMapExample();
});
