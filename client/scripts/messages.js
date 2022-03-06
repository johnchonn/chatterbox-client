// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

// this is the container of the messages.
var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {}, // store the messages

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // get us messages and put it in data storage
  retrieve: function(responseData) {
    // retrieve messages from server?
    // this._data.push(responseData);
    // console.log('_data: ', this._data);
    // console.log(_.chain(Object.values(Messages._data)).sortBy('createdAt')); // time of which messages came in
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');

  },

  update: function(messages, callback = ()=>{}) {

    var length = Object.keys(Messages._data).length; // turns into an array of keys and grabbing its length (value is stored in here)

    for (var i = 0; i < messages.length; i++) {
      Messages._data[messages[i].objectId] = Messages.clean(messages[i]);
    }

    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  clean: function(message) {
    // make sure every message hase a value for each key or replace with ''
    // to keep the program running smooth
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    message.updatedAt = message.updatedAt || new Date();
    return message;
  }
};