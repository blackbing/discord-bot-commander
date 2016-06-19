var request = require('sync-request');

module.exports = [
  {
    phrase: /(great|nice|good)/,
    callback: function() {
      return 'Thanks';
    }
  },
  {
    phrase: /(hi|hello)/,
    callback: function() {
      return 'Hello~';
    }
  },
  {
    phrase: /(deploy stage)/,
    callback: function() {
      var requestUrl = 'URL';
      try {
        var res = request('GET', requestUrl);
        var returner = res.getBody('utf8');
        return "Roger that. Starting deploy stage...";
      } catch (e) {
        return "Roger that. but there is something wrong. Please help me to check.";
      }
    }
  },
  {
    phrase: /(deploy prod)/,
    callback: function() {
      var requestUrl = 'URL';
      try {
        var res = request('GET', requestUrl);
        var returner = res.getBody('utf8');
        return "Roger that. Starting deploy prod...";
      } catch (e) {
        return "Roger that. but there is something wrong. Please help me to check.";
      }
    }
  },
];
