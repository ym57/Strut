// Generated by CoffeeScript 1.2.1-pre
/*
@author Matt Crinklaw-Vogt
*/

define(["model/geom/SpatialObject"], function(SpatialObject) {
  return SpatialObject.extend({
    initialize: function() {},
    dispose: function() {
      this.trigger("dispose", this);
      return this.off();
    }
  });
});
