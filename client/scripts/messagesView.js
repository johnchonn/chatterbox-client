// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.


// this is where we convert the messages and later render messages
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // console.log(Messages._data);
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.

    MessagesView.$chats.html('');
    Messages.items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },


  renderMessage: function(message) {
    // TODO: Render a single message.
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
  }

};
