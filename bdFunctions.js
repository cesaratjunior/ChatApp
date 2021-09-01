import Fire from './Fire'

const bdfunctions={

    findUserByName: async function(name) {
        const user = await Fire.database()
            .ref('users')
            .orderByChild('name')
            .equalTo(name)
            .once('value');
        if(user.exists()){
            return Object.values(user.val())[0];
        }
        return null;
    },
    findUser: async function() {
        let db = await Fire.database().ref('users');

        const listenet = await db.on('value', (snapshot) =>{
            snapshot.forEach()
        })
    },
    createUser: function (user){
        Fire.database().ref('users').push(user);
    },
    createMessage: function (message){        
        Fire.database().ref('messages').push(message);
    },
    loadMessages: function (callback){        
        Fire.database()
            .ref('messages')
            .limitToLast(20)
            .on('child_added', snapshot => {

            const {text, user, createdAt} = snapshot.val();
            const {key: _id} = snapshot;
            const message = {_id, text, user, createdAt};
            callback(message);
        });
    }
};

export default bdfunctions;