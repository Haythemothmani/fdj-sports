import * as mongoose from 'mongoose';

const PlayerSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String
    },
    position: {
        type: String
    },
    thumbnail: {
        type: String
    },
    signin: {
        amount : {
            type: Number
        },
        currency: {
            type: String
        }
    },
    born: {
        type: Date
    }

}, {
    collection: 'players'
})

export default mongoose.model('Player', PlayerSchema);