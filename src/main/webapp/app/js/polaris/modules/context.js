﻿define({

	themeDomController : {
		create : {
			module : './mvc/controller/DomController',
			args : [ '.app', {
				'.globalNavigation' : {
					$ref : 'globalNavigationComponent'
				},
				'.disclaimers' : {
					$ref : 'disclaimerComponent'
				}
			} ]
		},
		ready : 'start'
	},

	globalNavigationComponent : {
		create : {
			module : './modules/header/globalnavigation/Component'
		}
	},

	disclaimerComponent : {
		create : {
			module : './modules/footer/disclaimers/Component'
		}
	},

	themeUrlController : {
		create : {
			module : './mvc/controller/UrlController',
			args : [ '.content', {
				$ref : 'routingService'
			}, {
				'/' : {
					$ref : 'pageComponent'
				},
				'main/home' : {
					$ref : 'pageComponent'
				}
			} ]
		},
		ready : 'start'
	},

	pageComponent : {
		create : {
			module : './modules/content/page/Component'
		}
	}


});
