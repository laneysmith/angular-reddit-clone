app.controller('MainController', ['$scope', function($scope) {
	$scope.sortPostsBy = '-score'; // set default post sort
	$scope.posts = postData; // sample posts stored in data.js
	// toggle new post form
	$scope.toggleCreatePost = function() {
		if (this.showcreatepost === true) {
			this.showcreatepost = false;
		} else {
			this.showcreatepost = true;
		}
	};
	// post builder
	$scope.Post = function() {
    this.title = $scope.formPost.title;
    this.author = $scope.formPost.author;
    this.content = $scope.formPost.content;
    this.image = $scope.formPost.image;
		this.date = new Date(),
		this.score = 0,
		this.comments = []
	}
	// post functionality
	$scope.upvote = function() {
		this.post.score += 1
	};
	$scope.downvote = function() {
		this.post.score -= 1
	};
	$scope.addComment = function() {
		var newComment = {};
		newComment.author = this.post.formComment.author;
		newComment.content = this.post.formComment.content;
		newComment.date = new Date();
		this.post.comments.push(newComment);
		this.post.formComment.author = '';
		this.post.formComment.content = '';
	};
	// create new post
	$scope.addPost = function() {
		var newPost = new $scope.Post();
		$scope.showcreatepost = false;
		$scope.posts.push(newPost);
		$scope.formPost.$setPristine();
		$scope.formPost = {};
	};
}]);
