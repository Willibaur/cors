politify.controller('PolitifyController', ['MpSearch', 'NewsSearch', function (MpSearch, NewsSearch) {

  var self = this;
  self.postcode = '';

  self.doSearch = function() {
    MpSearch.query(self.postcode)
      .success(function(response) {
        self.mpResults = response.data;
      });
  };
}]);
