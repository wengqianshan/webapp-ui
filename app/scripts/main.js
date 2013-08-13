require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        ratchet: 'vendor/ratchet',
        fingerblast: 'vendor/fingerblast'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

/*require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});*/
require(['jquery', 'ratchet', 'fingerblast'], function($, ratchet){
    console.log(ratchet);
    new FingerBlast('body');
    document
      .querySelector('#mySlider')
      .addEventListener('slide', function(ev){
        console.log(ev.detail.slideNumber)
      })
    $('.toggle').on('toggle', function(f){
        console.log(f)
        console.log(f.originalEvent.detail.isActive)
    })
})