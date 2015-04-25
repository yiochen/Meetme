(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'Yo, Polymer App!';
  
  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
    var me={name:"yiou"};
    var map=document.querySelector('#map');
    var pin=document.querySelector('#pin');
    pin.markers=[];
    navigator.geolocation.getCurrentPosition(function(pos){
        map.latitude=pos.coords.latitude;
        map.longitude=pos.coords.longitude;
        map.zoom=15;
        me.lat=pos.coords.latitude;
        me.lng=pos.coords.longitude;
        geo_success(pos);
        pin.markers[0]=me; 
        var watchID=navigator.geolocation.watchPosition(geo_success,geo_error);
    },geo_error);
    function geo_success(pos){
        me.lat=pos.coords.latitude;
        me.lng=pos.coords.longitude;
    }
    function geo_error(){
        alert("sorry, no position available");
    }
  });
  

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
