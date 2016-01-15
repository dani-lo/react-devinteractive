(function () {
	//
	var RDHub 	= require("./lib/RDHub"),
		RDEvent	= require("./lib/RDEvent");
	//
	var LoginPage 	= require("./pages/Login.page"),
		CvPage		= require("./pages/Cv.page"),
		XpPage		= require("./pages/Xp.page"),
		HomePage 	= require("./pages/Home.page");
	//
	var AppHeader	= require('./widget/Header.widget');
	//
	function loadAppPageView (pageView) {
		//
		var currPage = RDHub.getCurrentPageView();
		//
		RDHub.setCurrentPageView(pageView);

		if (currPage !== null) {
			//
			currPage.unmount().then(function () {
				//
				pageView.mount();
			});
		} else {
			//
			pageView.mount();
		}
	}
	function appDefaultRouteAction () {
		//
		console.log("DevInteractive default");
	}
	//
	function loginRouteAction () {
		//
		var pageLogin = new LoginPage({
			title: "Dev Interactive Login Page"
		});
		
		loadAppPageView(pageLogin);
	}
	//
	function appHomeRouteAction () {
		//
		var pageHome = new HomePage({
			title: "Dev Interactive Home Page",
			outer: document.getElementById("devint-home")
		});

		loadAppPageView(pageHome);
	}
	//
	function appCvRouteAction () {
		//
		var pageCv = new CvPage({
			title: "Dev Interactive Cv Page",
			outer: document.getElementById("devint-cv")
		});

		loadAppPageView(pageCv);
	}
	//
	function appExperienceRouteAction () {
		//
		var pageXp = new XpPage({
			title: "Dev Interactive Experience Page",
			outer: document.getElementById("devint-cv")
		});

		loadAppPageView(pageXp);
	}
	// adding routes
	RDHub.appRouter.setOnRouteChange(function (path) {
		//
		RDEvent.invokeListener("onappnavigate", {path: path});
	});
	//
	RDHub.appRouter.add(/login/, loginRouteAction)
					.add(/app\/home/, appHomeRouteAction)
					.add(/app\/experience/, appExperienceRouteAction)
					.add(/app\/cv/, appCvRouteAction)
					.add(appHomeRouteAction) // default
					.check()
					.listen();


})();