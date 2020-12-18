import { Request, Response, NextFunction } from 'express';
import League from '../models/league';


export class LeagueRoute {
    leagueRoute(app): void {

        // Get all teams by league Id
        app.route('/api/get-leagues').get((req: Request, res: Response, next: NextFunction) => {
            const query = League.find().select('-teams');
            query.exec((error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        })

    }
}