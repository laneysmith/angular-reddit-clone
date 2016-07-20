var app = angular.module('redditClone', []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.sortPostsBy = '-score'; // default post sort
  // toggle create post form
  $scope.showcreatepost = false;
  $scope.toggleCreatePost = function() {
    if (this.showcreatepost === true) {
      this.showcreatepost = false;
    } else {
      this.showcreatepost = true;
    }
  }
  // post builder
	$scope.Post = function() {
		this.date = new Date(),
		this.score = 0,
		this.upvote = function() {
			this.score += 1
		},
		this.downvote = function() {
			this.score -= 1
		},
		this.comments = [],
    this.addComment = function() {
      var newComment = this.formComment;
      newComment.date = new Date();
      this.comments.push(newComment);
    }
	}
  // seed page with sample posts
	$scope.posts = [{
		'title': 'Quail Watching 101',
		'author': 'Bradford',
		'image': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/California_quail.jpg',
		'content': 'I like quails.',
		'date': new Date(),
		'score': 5,
		'upvote': function() {
			this.score += 1
		},
		'downvote': function() {
			this.score -= 1
		},
		'comments': [{
			'author': 'Ned',
			'content': 'This post is dumb.',
			'date': new Date()
		}, {
			'author': 'Lucas',
			'content': 'This post is dumber.',
			'date': new Date()
		}],
    'addComment': function() {
      var newComment = this.formComment;
      newComment.date = new Date();
      this.comments.push(newComment);
    }
	}, {
		'title': 'How to Keep it Wonhunnit',
		'author': 'Bennett',
		'image': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Usdollar100front.jpg',
		'content': 'Be Bennett.',
		'date': new Date(),
		'score': 23,
		'upvote': function() {
			this.score += 1
		},
		'downvote': function() {
			this.score -= 1
		},
		'comments': [{
			'author': 'Amanda',
			'content': 'What\'s up!',
			'date': new Date()
		}],
    'addComment': function() {
      var newComment = this.formComment;
      newComment.date = new Date();
      this.comments.push(newComment);
    }
	}, {
		'title': 'My Shark Friends',
		'author': 'Daniel',
		'image': 'http://i.telegraph.co.uk/multimedia/archive/03575/shark_3575581b.jpg',
		'content': 'Here\'s a list of my favorite sharks: hammerhead, great white, tiger shark, baby shark, mama shark, adolescent shark, happy shark, ambivalent shark, careful shark, mako shark, girl shark, thresher shark, goblin shark.',
		'date': new Date(),
		'score': -27,
		'upvote': function() {
			this.score += 1
		},
		'downvote': function() {
			this.score -= 1
		},
		'comments': [],
    'addComment': function() {
      var newComment = this.formComment;
      newComment.date = new Date();
      this.comments.push(newComment);
    }
	}];
  // create new post
	$scope.addPost = function() {
		var newPost = new this.Post();
		newPost.title = this.formPost.title;
		newPost.author = this.formPost.author;
		newPost.content = this.formPost.content;
		newPost.image = this.formPost.image;
		$scope.posts.push(newPost);
    $scope.formPostName = angular.copy($scope.originForm);
    $scope.formPost.$setPristine();
    // $scope.showcreatepost = false;
	};
}]);
