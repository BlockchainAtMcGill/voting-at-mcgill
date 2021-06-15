const routes= require('next-routes')();

routes.add('/elections/apply/:address','/elections/apply/apply');
routes.add('/elections/vote/:address','/elections/vote/vote');
routes.add('/petitions/vote/:address','/petitions/vote/vote');
module.exports = routes;
