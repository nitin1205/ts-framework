import { User } from "./models/User";

// const user = new User({name: 'myname', age: 18});

// user.set({name: 'nitin'})

// user.on('change', () => console.log('change no 1'));
// user.on('change', () => console.log('change no 2'));
// user.on('change', () => console.log('change no 3'));
// user.on('save', () => console.log('save was trigger'));

// console.log(user);
// console.log(user.get('age'));
// user.trigger('change');
// user.trigger('save');

const user = User.buildUser({ id: 1 });

user.on('change', () => {
    console.log(user);
});

user.fetch();