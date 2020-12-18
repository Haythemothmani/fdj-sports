import * as mongoose from 'mongoose';
import Team from '../models/team';


const LeagueSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String
    },
    sport: {
        type: String
    },
    teams: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Team
        }
    ]
}, {
    collection: 'leagues'
})

export default mongoose.model('League', LeagueSchema);