var React = require('react');

var CountdownForm = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();
    var totalSeconds = Math.floor(this.refs.seconds.value);
    this.refs.seconds.value = '';
    if(typeof totalSeconds === 'number' && totalSeconds > 0){
      this.props.onSetCountdown(totalSeconds);
    }
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="seconds" placeholder="Enter the number of seconds" />
        <button className="button expanded" type="submit" ref="countdownBtn">Start</button>
      </form>
    )
  }
});

module.exports = CountdownForm;
