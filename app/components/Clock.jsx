var React = require('react');


var Clock = React.createClass({
  getDefaultProps: () => {
    return {
      totalSeconds: 0
    };
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  componentWillReceiveProps: function(newProps){
    this.refs.clockText.value = this.formatSeconds(newProps.totalSeconds);
  },
  formatSeconds:  function (totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    seconds = (seconds < 10) ? ("0"+seconds.toString()) : seconds;
    minutes = (minutes < 10) ? ("0"+minutes.toString()) : minutes;
    return (minutes + ":" + seconds);
  },

  render: function() {
    var {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text" ref="clockText">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
});

module.exports = Clock;
