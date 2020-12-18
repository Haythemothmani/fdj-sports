import * as mongoose from 'mongoose';
import Player from '../models/player';

const TeamSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String
    },
    thumbnail: {
        type: String
    },
    players: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Player
        }
    ]
}, {
    collection: 'teams'
})

export default mongoose.model('Team', TeamSchema);