(function() {
	var app = angular.module('MovieStore', []);

	app.controller('StoreController', function(){
			this.product = movie;

	})

	var movie = {
		   title: "Avatar",
		   year: "2009",
		   plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
		 	  }
})