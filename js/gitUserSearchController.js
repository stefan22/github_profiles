githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;
  var resultArray = []

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        response.data.items.forEach(function(item) {
          Search.result(item.login)
          .then(function(response) {
            resultArray.push(response.data)
            self.searchResult = resultArray;
          });
        });
      })
  };
}]);