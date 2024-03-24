// Define flip function
		function flip(options) {
    // Default options
    var settings = {
    	targetClass: '.m-flip_item'
    };
    // Merge default options with user-provided options
    if (options) {
    	for (var prop in options) {
    		if (options.hasOwnProperty(prop)) {
    			settings[prop] = options[prop];
    		}
    	}
    }

    // Get all elements with the specified class
    var elements = document.querySelectorAll('.js-flip');

    // Iterate over each element
    elements.forEach(function(element) {
    	var target = element.querySelectorAll(settings.targetClass);

        // Initialize flip effect
        function initFlip() {
        	var targetFirstHeight = target[0].offsetHeight;
        	element.style.height = targetFirstHeight + 'px';
        }

        // Mouse enter event
        element.addEventListener('mouseenter', function() {
        	target.forEach(function(item) {
        		item.style.top = -element.offsetHeight + 'px';
        	});
        });

        // Mouse leave event
        element.addEventListener('mouseleave', function() {
        	target.forEach(function(item) {
        		item.style.top = '0px';
        	});
        });

        // Initialize flip effect
        initFlip();
    });
}

// Call the flip function when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
	flip();
});