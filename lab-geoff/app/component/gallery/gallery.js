require('./gallery.scss');

module.exports = {
  template: require('./gallery.html'),
  controller: ['$log', 'galleryService', GalleryController],
  controllerAs: 'galleryCtrl'
};

function GalleryController ($log, galleryService) {
  $log.debug('GalleryController');

  this.gallery = {};

  this.create = function() {
    galleryService.createGallery(this.gallery)
    .then( () => {
      this.gallery.name = null;
      this.gallery.desc = null;
    });
  };
}