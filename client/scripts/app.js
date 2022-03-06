// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'), // spinning thingy on chatterbox

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner());

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    // get new messages every 2 seconds
    setInterval(App.fetch, 2000);
  },


  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => { // data gets retrieved
      // examine the response from the server request:
      // Messages.retrieve(data); // grabbing data from ajax and using retrieve function (callback)

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      // console.log('data: ', data);
      Messages = data.results;
      MessagesView.render();
      // Rooms.update();
      callback();

    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
