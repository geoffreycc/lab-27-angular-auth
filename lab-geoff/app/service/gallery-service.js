module.exports = ['$q', '$log', '$http', 'authService', galleryService];

function galleryService($q, $log, $http, authService) {
  $log.debug('galleryService');

  let service = {};
  service.galleries = [];

  service.createGallery = function(gallery) {
    $log.debug('galleryService.createGallery()');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/gallery`;
      let config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization : `Basic ${token}`,
          Accept: 'application/json'
        }
      };
      return $http.post(url, gallery, config)
      .then( res => {
        $log.debug('post request');
        $log.debug(res.data);
      });
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}