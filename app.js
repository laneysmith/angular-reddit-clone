var app = angular.module('redditClone',[]);

app.controller('MainController', ['$scope', function($scope) {
  $scope.Post = function() {
    this.title = '',
    this.author = '',
    this.image = '',
    this.content = '',
    this.date = new Date(),
    this.score = 0,
    this.upvote = function() {
      this.score += 1
    },
    this.downvote = function() {
      this.score -= 1
    }
  }
  $scope.posts = [
    {
      'title': 'Quail Watching 101',
      'author': 'Bradford',
      'image': '',
      'content': 'I like quails.',
      'date': '',
      'score': 5,
      'upvote': function() {
        this.score += 1
      },
      'downvote': function() {
        this.score -= 1
      },
      'comments': [
        {
          'author': 'Ned',
          'comment': 'This post is dumb.',
          'date': 'whenever'
        },
        {
          'author': 'Lucas',
          'comment': 'This post is dumber.',
          'date': 'whenevz'
        }
      ]
    },
    {
      'title': 'How to Keep it Wonhunnit',
      'author': 'Bennett',
      'image': '',
      'content': 'Be Bennett.',
      'date': '',
      'score': -3,
      'upvote': function() {
        this.score += 1
      },
      'downvote': function() {
        this.score -= 1
      }
    },
    {
      'title': 'My Shark Friends',
      'author': 'Daniel',
      'image': '',
      'content': 'Here\'s a list of my favorite sharks: hammerhead, great white, tiger shark, baby shark, mama shark, adolescent shark, happy shark, ambivalent shark, careful shark, mako shark, girl shark, thresher shark, goblin shark.',
      'date': '',
      'score': -27,
      'upvote': function() {
        this.score += 1
      },
      'downvote': function() {
        this.score -= 1
      }
    }
  ];
  // $scope.formPost = {
  //   $scope.title = ''
  //   $scope.author = ''
  //   $scope.content = ''
  //   $scope.image = ''
  // }
  $scope.addPost = function() {
    var newPost = new this.Post();
    newPost.title = this.formPost.title
    newPost.author = this.formPost.author
    newPost.content = this.formPost.content
    newPost.image = this.formPost.image
    $scope.posts.push(newPost)
  }

}]);
