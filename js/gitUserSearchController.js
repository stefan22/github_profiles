githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    var resultArray = []
    Search.query1(self.searchTerm)
      .then(function(response) {
        response.data.items.forEach(function(item) {
          Search.query2(item.login)
          .then(function(response) {
            resultArray.push(response.data)
            self.searchResult = resultArray;
            console.log(self.searchResult)
          });
        });
      })
  };
}]);