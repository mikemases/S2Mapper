require.config({
  shim: {
    },

  paths: {
      hm: 'vendor/hm',
      esprima: 'vendor/esprima',
      jquery: 'vendor/jquery.min',
      mapper: 'scripts/mapper',
      config: 'test_config',
      spec: 'spec',
      json: 'json'
    }
});
 
require(['spec/s2_ajax_spec', 'spec/s2_tube_spec.js'], function() {
  // use app here
});