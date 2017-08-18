app.directive('productInfo', function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/product-info.html'
		};
	});
	app.directive('navTabs', function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/nav-tabs.html'
		};
	});
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/product-title.html'
		};
	});
	app.directive('productSynopsis', function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/product-synopsis.html'
		};
	});
	app.directive('addCartBtn', function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/add-cart-btn.html'
		};
	});
	app.directive('cartBtn', function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/cart-btn.html'
		};
	});
	app.directive('modal', function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/modal.html'
		};
	});
	app.directive('headerTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/header-title.html'
		};
	});