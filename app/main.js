(function () {
	var RDHub = require("./lib/RDHub");
	//
	var LoginPage 	= require("./pages/Login.page"),
		CvPage		= require("./pages/Cv.page"),
		XpPage		= require("./pages/Xp.page"),
		HomePage 	= require("./pages/Home.page");

	var AppHeader	= require('./dom/widget/Header.widget');
	//
	function appDefaultRouteAction () {
		//
		console.log("DevInteractive default");
	}

	function loginRouteAction () {
		//
		var pageLogin = new LoginPage({
			title: "Dev Interactive Login Page"
		});
		pageLogin.mount();
	}

	function appHomeRouteAction () {
		//
		var pageHome = new HomePage({
			title: "Dev Interactive Home Page"
		});

		RDHub.unmountCurrentPageView()
			 .setCurrentPageView(pageHome);

		pageHome.mount();
	}

	function appCvRouteAction () {
		//
		var pageCv = new CvPage({
			title: "Dev Interactive Cv Page",
			outer: document.getElementById("devint-cv")
		});

		RDHub.unmountCurrentPageView()
			 .setCurrentPageView(pageCv);

		pageCv.mount();
	}

	function appExperienceRouteAction () {
		//
		var pageXp = new XpPage({
			title: "Dev Interactive Experience Page"
		});

		RDHub.unmountCurrentPageView()
			 .setCurrentPageView(pageXp);

		pageXp.mount();
	}

	function appDefaultRouteAction () {
		//
		console.log("DEFAULT");
	}

	// adding routes
	RDHub.appRouter.setOnRouteChange(function (path) {
		//
		RDHub.invokeListener("onappnavigate", {path: path});
	});

	RDHub.appRouter.add(/login/, loginRouteAction)
					.add(/app\/home/, appHomeRouteAction)
					.add(/app\/experience/, appExperienceRouteAction)
					.add(/app\/cv/, appCvRouteAction)
					.add(appDefaultRouteAction) // default
					.check()
					.listen();


})();