class FetchRequests {
    getGithubUser(username) {
      return fetch('https://api.github.com/users/' + username)
        .then(function(response) {
          return response.json()
        }).catch(function(ex) {
          console.log('Parsing Failed: ', ex)
        })
    }
    getGithubUserRepositories(username) {
      return fetch('https://api.github.com/users/' + username + '/repos')
        .then(function(response){
          return response.json()
        }).catch(function(ex){
          console.log('Parsing Failed: ', ex)
        })
    }
}

export default FetchRequests;
