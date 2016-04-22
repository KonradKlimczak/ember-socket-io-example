// import io from 'socket.io-client';

var chatSocket = {
    socket: io('http://localhost:3000'),
    listeners: [],
    emitEvent(eventName, eventObject) {
        this.socket.emit(eventName, eventObject);
    },
    injectSocketListener(eventName, callback) {
        if (this.listeners.indexOf(eventName) === -1) {
            this.socket.on(eventName, callback);
            this.listeners.push(eventName);
        } else {
            //TODO error handling
        }
    }
};

export default chatSocket;