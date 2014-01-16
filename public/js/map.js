var Map = (function(google){
	return {
		init : function(){
			var Latlng = new google.maps.LatLng(25.834042,-80.371685),
				url = 'http://goo.gl/Tnu5yX';

			var mapOptions = {
				center: Latlng,
				zoom: 14,
				zoomControl : false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl : false,
				disableDoubleClickZoom: true,
				scaleControl : false,
				streetViewControl : false,
				draggable: false,
				scrollwheel:false,
				panControl : false, 
				zoom : 15
			};

			var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

			var pointerUrl = 'img/map/pointer-blue2.png',
				pointerUrl_hover = 'img/map/pointer-red2.png';

			var markerImage = new google.maps.MarkerImage(pointerUrl);
			var markerImage_hover = new google.maps.MarkerImage(pointerUrl_hover);
			
			var marker = new google.maps.Marker({
				url: url,
				position: Latlng,
				map: map,
				icon: markerImage
			});
			
			google.maps.event.addListener(marker, 'click', function(){
				window.open(marker.url);
				window.focus();
			});

			google.maps.event.addListener(marker, 'mouseover', function(){
				marker.setIcon(markerImage_hover);
			});

			google.maps.event.addListener(marker, 'mouseout', function(){
				marker.setIcon(markerImage);
			});
		}
	}
})(google);
