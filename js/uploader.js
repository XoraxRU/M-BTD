jQuery(document).ready(function() {
				var pages = new Array();
				var current = 0;
				var loaded = new Array();
				
				$('#pages a').each(function(index) {
					pages[index] = $(this).attr('href');
					loaded[$(this).attr('href')] = 0;
				});
				
				$(window).scroll(function() {
					if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
						loaded[pages[current+1]] = loaded[pages[current+1]] + 1;
						if(loaded[pages[current+1]] <= 1)
						loadMoreContent(current+1);
					}
				});
				
				function loadMoreContent(position) {
					if(position < pages.length) {
						$('#loader').fadeIn('slow', function() {
							$.post(pages[position], function(data) {
								$('#loader').fadeOut('slow', function() {
									$('#scroll-container').append(data).fadeIn(999);
									current=position;
								});
							});
						});
					}
				}
});

jQuery(document).ready(function() {
				var pages = new Array();
				var current = 0;
				var loaded = new Array();
				
				$('#pages2 a').each(function(index) {
					pages[index] = $(this).attr('href');
					loaded[$(this).attr('href')] = 0;
				});
				
				$(window).scroll(function() {
					if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
						loaded[pages[current+1]] = loaded[pages[current+1]] + 1;
						if(loaded[pages[current+1]] <= 1)
						loadMoreContent(current+1);
					}
				});
				
				function loadMoreContent(position) {
					if(position < pages.length) {
						$('#loader2').fadeIn('slow', function() {
							$.post(pages[position], function(data) {
								$('#loader2').fadeOut('slow', function() {
									$('#scroll-container2').append(data).fadeIn(999);
									current=position;
								});
							});
						});
					}
				}
});