  // убирает карту-картинку при наличии JS

window.addEventListener('load', function() {
      var img = document.querySelector('.main-container__map-image--nojs');
      img.parentNode.removeChild(img); });

// Добавляет карту
let center = [34.86587166493344,-111.756278];
function init() {
    let map = new ymaps.Map('map', {
    center: center,
    zoom: 8
  });

// Добавляет маркер
  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/map-marker.svg',
    iconImageSize: [27, 27],
    iconImageOffset: [-10, 0]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);
}
ymaps.ready(init);
