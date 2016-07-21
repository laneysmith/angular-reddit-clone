app.controller('MainController', ['$scope', function($scope) {
	$scope.sortPostsBy = '-score'; // set default post sort
	$scope.posts = postData; // sample posts stored in data.js
	// toggle new post form
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
			var newComment = {};
			newComment.author = this.formComment.author;
			newComment.content = this.formComment.content;
			newComment.date = new Date();
			this.comments.push(newComment);
			this.formComment.author = '';
			this.formComment.content = '';
			}
		}
	// create new post
	$scope.addPost = function() {
		var newPost = new this.Post();
		newPost.title = this.formPost.title;
		newPost.author = this.formPost.author;
		newPost.content = this.formPost.content;
		newPost.image = this.formPost.image;
		$scope.showcreatepost = false;
		$scope.posts.push(newPost);
	};
}]);
