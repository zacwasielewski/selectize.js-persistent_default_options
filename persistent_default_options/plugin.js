/**
 * Plugin: "persistent_default_options" (selectize.js)
 * Copyright (c) 2014 Zac Wasielewski
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Zac Wasielewski <zac@wasielewski.org>
 */

Selectize.define('persistent_default_options', function(options) {

	var self = this,
			initialOptions = [];

	this.onInitialize = (function() {
		var original = self.onInitialize;
		initialOptions = Object.keys(self.options);
	})();
	
	this.onSearchChange = (function() {
		var original = self.onSearchChange;
		return function(value) {
			if (!value.length) {
				Object
					.keys(self.options)
					.diff(initialOptions)
					.forEach(function(id){
						self.removeOption(id);
					});			  
			}
			return original.apply(self, arguments);
		};
	})();
	
	this.addOption = (function() {
		var original = self.addOption;
		return function(data) {
			return original.apply(self, arguments);
		};
	})();
	
});

// TODO: replace with a function that doesn't extend the native Array object
Array.prototype.diff = function(a) {
	return this.filter(function(i) {return a.indexOf(i) < 0;});
};
