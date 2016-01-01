(function () {
	var Router = require("./util/router");
	//
	var LoginPage = require("./pages/Login.page");
	//
	function loginRouteAction () {
		//
		var pageLogin = new LoginPage({
			title: "Dev Interactive Login Page"
		});

		pageLogin.render();
	}

	var appRouter = new Router();

	appRouter.addRoute("login", loginRouteAction);

	appRouter.startRouter();
})();