var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var totalSeconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(totalSeconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when mins and secs are less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var totalSeconds = 307;
      var expected = '05:07';
      var actual = clock.formatSeconds(totalSeconds);

      expect(actual).toBe(expected);
    });
  });
});