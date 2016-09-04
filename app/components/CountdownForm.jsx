var React = require('react');

var CountdownForm = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();
    var totalSeconds = Math.floor(this.refs.seconds.value);

    console.log('input count', $('input').length);

    if (totalSeconds > 0) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(totalSeconds);
    }
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="seconds" placeholder="Enter the number of seconds" />
          <button className="button expanded" type="submit" ref="countdownBtn">Start</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;
