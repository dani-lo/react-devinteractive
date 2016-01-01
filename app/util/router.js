//
//require "./finder";
//
function Router() {
	//
	this.routes = {};
};

Router.prototype.addRoute = function (routeName, routeAction) {
	//
	this.routes[routeName] = routeAction;
}

Router.prototype.onRoute = function (url) {
	//
	var routeNames = Object.keys(this.routes),
		routeAction = null;
	//
	for (var i = 0, l = routeNames.length; i < l; i++) {
		//
		if (url.indexOf(routeNames[i]) !== -1) {
			//
			routeAction = this.routes[routeNames[i]];
			break;
		}
	}

	if (routeAction !== null) {
		//
		routeAction.call(null);
	}
}

Router.prototype.startRouter = function () {
	//
	this.onRoute(document.location.href);
}

module.exports = Router;