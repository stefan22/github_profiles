githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';

  return {
    query: 'foo'
  }

}]);