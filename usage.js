$(function() {

	$.getJSON('/twitter-proxy.php?url='+encodeURIComponent('statuses/user_timeline.json?screen_name=caelum&count=200'), function(d){
		var html = [];
		d.forEach(function(r, i) {
			html.push('<p>'+ i + ' ' + r.text + '</p>');
		});
		$('#results').html(html.join(''))
	});

});

