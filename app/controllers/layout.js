import Ember from 'ember'

export default Ember.Controller.extend({
  isMenuShown: false,

  menuVisibility: Ember.computed('isMenuShown', function() {
    return this.get('isMenuShown') ? this.get('styles.shown') : null
  })
})
