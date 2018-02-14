import { loadScript } from '../helpers';

export const createMap = (container) => {
    const mapContainer = document.getElementById(container);

    const initMapFn = () => {
        return new google.maps.Map(mapContainer, {
            center: {
                lat: 54.403505,
                lng: 18.570691,
            },
            zoom: 14,
        });
    };

    return loadScript({
        url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBTtF0XieZJLhnn456wdszhNlg0VHShLLU',
        tagId: 'google-maps-script',
    }).then(initMapFn);
};

export default createMap;
