import Ember from 'ember';
import chatSocket from './../socket/socket-client';

export default Ember.Component.extend({
    listOfMessages: [{
        author: 'Bob',
        text: 'Hello World!'
    }],
    message: {},
    eventName: 'chatMessage',
    didInsertElement() {
        let that = this;
        chatSocket.injectSocketListener(this.eventName, function (message) {
            that.get('listOfMessages').pushObject(message);
        });
    },
    submitAction() {
        chatSocket.emitEvent(this.eventName, this.get('message'));
        this.set('message', {
            author: this.get('message').author,
            text: ''
        });
    }

});
