var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('events', () => {
    it('should increment when started', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.state.count = 10;
      timer.handleStatusChange('started');

      setTimeout( () => {
        expect(timer.state.count).toBe(11);
        expect(timer.state.timerStatus).toBe('started');
        done();
      }, 1001);
    });

    it('should pause when paused', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.state.count = 10;
      timer.handleStatusChange('paused');

      setTimeout( () => {
        expect(timer.state.count).toBe(10);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset to zero when stopped', () => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.state.count = 10;
      timer.handleStatusChange('stopped');

      expect(timer.state.count).toBe(0);
    });
  });
});
