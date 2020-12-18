import { Request, Response, NextFunction } from 'express';
import League from '../models/league';


export class TeamRoute {
    teamRoute(app): void {

        // Get all teams by league Id
        app.route('/api/get-teams/:id').get((req: Request, res: Response, next: NextFunction) => {
            League.findById(req.params.id)
                .select('teams -_id')
                .populate('teams', '-players')
                .exec((error, result) => {
                    if (error) {
                        return next(error)
                    } else {
                        const data: any = result.toJSON();
                        res.send(data.teams);
                    }
                });
        });
    }
}