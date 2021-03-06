var div = React.DOM.div;

var Dialog = React.createClass({displayName: "Dialog",

	getInitialState: function() {
    return {
        showDialog: true
    };
  },

	componentDidMount: function() {
    $(document.body).on('keydown', this.handleKeyDown);
  },

  componentWillUnMount: function() {
    $(document.body).off('keydown', this.handleKeyDown);
  },

	cancelAction() {
    this.setState({
      showDialog: false
    });
  },

	okAction: function() {
    this.setState({
      showDialog: false
    });
  },

	handleKeyDown: function(event) {
    if (event.keyCode == 13 /*enter*/) {
      this.okAction();
    }
    if (event.keyCode == 27 /*esc*/) {
      this.cancelAction();
    }
  },

  render: function() {
		return this.state.showDialog ? (
      React.createElement("div", {className: "react-dialog dialog transparent-border full", onKeyDown: this.handleKeyDown}, 
        React.createElement("div", {className: "inside"}, 
          React.createElement("h2", null, React.createElement("span", null, this.props.text)), 
          React.createElement("div", {className: "buttons"}, 
						React.createElement("button", {className: "cancel-button", onClick: this.cancelAction}, React.createElement("span", null, this.props.cancelButtonText)), 
						React.createElement("button", {className: "ok-button", onClick: this.okAction}, React.createElement("span", null, this.props.okButtonText))
          )
        )
      )
    ) : div();
  }
});

React.renderComponent(
	    React.createElement(Dialog, {
				text: "Do you want to continue?", 
				okButtonText: "OK", 
				cancelButtonText: "Cancel", 
				okAction: this.okAction}
			),
    document.body
);
