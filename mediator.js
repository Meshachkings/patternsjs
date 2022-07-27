const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {}; // list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // single user message
                to.receive(message, from); 

            } else {
                // mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receive(message, from)
                    }
                }
            }
        }
    }
}
const meshach = new User('Meshach');
const young = new User('Young');
const mummy = new User('Mummy');
const daddy = new User('Daddy');
const preye = new User('Preye');

const chatroom = new Chatroom();

chatroom.register(meshach);
chatroom.register(young);
chatroom.register(mummy);
chatroom.register(daddy);
chatroom.register(preye);

meshach.send('hello young', young);
meshach.send('hello mummy', mummy);

mummy.send('hello to the wonderful family');