import Ember from 'ember';
const { get, set } = Ember;

const { HashLocation } = Ember;

export default HashLocation.extend({
  getHash() {
    return this._super().replace('#!', '#');
  },

  setURL(path) {
    get(this, 'location').hash = '!' + path;
    set(this, 'lastSetURL', path);
  },

  replaceURL(path) {
    get(this, 'location').replace(`#!${path}`);
    set(this, 'lastSetURL', path);
  }
});
