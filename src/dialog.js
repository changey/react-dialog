var Dialog = React.createClass({
  render: function() {
		return (
			<div className="react-dialog dialog transparent-border full" >
			<div className="inside">
				<h2><span>{this.props.text}</span></h2>
				<div className="buttons">
			  	<button className="cancel-button" onClick={this.cancelAction}><span>{this.props.cancelButtonText}</span></button>
		  		<button className="ok-button" onClick={this.okAction}><span>{this.props.okButtonText}</span></button>
				</div>
			</div>
		</div>
  	);
  }
});

React.renderComponent(
	    <Dialog
				text="Do you want to continue?"
				okButtonText="OK"
				cancelButtonText="Cancel"
				okAction={this.okAction}
			/>,
    document.body
);
