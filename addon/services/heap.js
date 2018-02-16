import Ember from 'ember';

const {
    Service,
    set,
    get,
    assert,
    run
  } = Ember;

export default Service.extend({
  _heap: null,

  init() {
    this.checkForHeap();
  },

  checkForHeap() {
    try {
      run(() => set(this, '_heap', window && window.heap));
      if (!get(this, '_heap')) {
        run.later(this, 'checkForHeap', 500);
      }
    } catch(e) {
      assert('Heap window object not initialized!');
    }
  },

  track(...args) {
    try {
      get(this, '_heap').track(args);
    } catch(e) {
      assert('Heap track event failed!');
    }
  },

  addUserProperties(userProperties = {}) {
    try {
      get(this, '_heap').addUserProperties(userProperties);
    } catch(e) {
      assert('Heap addUserProperties failed!');
    }
  },

  addEventProperties(eventProperties = {}) {
    try {
      get(this, '_heap').addEventProperties(eventProperties);
    } catch(e) {
      assert('Heap addEventProperties failed!');
    }
  },

  removeEventProperties(eventProperty) {
    try {
      get(this, '_heap').removeEventProperty(eventProperty);
    } catch(e) {
      assert('Heap removeEventProperty failed!');
    }
  },

  clearEventProperties() {
    try {
      get(this, '_heap').clearEventProperties();
    } catch(e) {
      assert('Heap clearEventProperties failed!');
    }
  },

  identify(id) {
    try {
      get(this, '_heap').identify(id);
    } catch(e) {
      assert('Heap identify event failed!');
    }
  }

});