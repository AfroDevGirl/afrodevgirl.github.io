$(document).ready(function(){
	$('#gamenight').on('click', function(e){
		e.preventDefault();
		$('#sideview').toggleClass('.active');
	});
});