var App = require('./../app/pages/Login.page'),
	React = require('react/addons'),
	TestUtils = React.addons.TestUtils;

describe("App", function() {

  it("should render text: Hello world!", function() {
  	//
    var app = TestUtils.renderIntoDocument(React.createElement(App));
    //
    expect(React.findDOMNode(app).textContent).toEqual('Hello world!');
  });

});
