# ember-heap-analytics

`ember-heap-analytics` is an easy way to add Heap analytics to your ember-cli project without having to rely on the Heap dashboard.

If you have any questions, come :wave: hello in #e-heap on the [Ember Community Slack](https://ember-community-slackin.herokuapp.com).

## Features
- provides injectable Ember service for all the [ Heap client side APIs](https://docs.heapanalytics.com/reference)

## Installation

* `npm install --save ember-heap-analytics`
* `ember server`

## Usage

````javascript

export default Ember.Component.extend({

  heap: Ember.inject.service(),

  myCustomEventMethod: function() {

    var heap = this.get('heap');

    // track :: Send additional events to Heap.
    heap.track('Purchase', {dollars: 50, item: 'Furby'});

    // identify :: Attach a unique identity to a user.
    heap.identify('alice123');

    // addUserProperties :: Attach custom properties to user profiles.
    heap.addUserProperties({'Name': 'Alice Smith','Profession': 'Data Scientist'});

    // addEventProperties :: Specify a set of global key-value pairs to get attached to all of a user's subsequent events.
    heap.addEventProperties({'Logged In': 'true', 'Payment Plan': 'Free'});

    // removeEventProperty :: Stops a single event property from getting attached to all subsequent events.
    heap.removeEventProperty('Logged In');

    // clearEventProperties :: Removes all stored event properties.
    heap.clearEventProperties();

  }
})
````

For more information, check out the [official documentation](https://docs.heapanalytics.com/reference)
