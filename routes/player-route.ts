import { Request, Response, NextFunction } from 'express';
import Team from '../models/team';


export class PlayerRoute {
    playerRoute(app): void {

        // Get all players by team Id
        app.route('/api/get-players/:id').get((req: Request, res: Response, next: NextFunction) => {
            Team.findById(req.params.id)
            .select('players')
            .populate('players')
            .exec((error, result) => {
                if (error) {
                    return next(error)
                } else {
                    const data: any = result.toJSON();
                    res.send(data.players);

                }
            });
        })

    }
}