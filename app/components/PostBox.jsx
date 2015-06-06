'use strict';

var React = require('react/addons');
var fire = require('../db/firebase');
var PostBox = React.createClass({
	getInitialState: function(){
    	return {
    		text:"",
    		name:''
    	};
  	},

  	getDefaultProps: function(){
  		return {
    	};
  	},

	componentWillMount:function(){
		this.setState({
			text:this.props.data.val.text,
			name:this.props.data.val.name
	    });
	},

  	componentDidMount:function() {
	    this.fire = fire.getRef().child('charts/'+this.props.data.val.parentID+'/'+this.props.data.id);
	},

  	componentWillReceiveProps: function(nextProps) {
		this.setState({
			text:nextProps.data.val.text,
			name:nextProps.data.val.name
	    });
	},
  	componentDidUpdate: function (props, state) {
	    
  	},


	render: function() {
		return (
		  <div className = "linkBox" >
		  	<div className="containerBox">
		  	</div>
		  </div>
		);
  	}
});
module.exports = PostBox;