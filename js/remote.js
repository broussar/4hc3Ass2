/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/*
 * JQUERY UI vertical slider
 */

  $(function() {
    $( "#vol-control" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#vol-display" ).html( ui.value );
      }
    });
    $( "#vol-display" ).html( $( "#vol-control" ).slider( "value" ) );

	function closetabs(current){

	} 
	$("#tab1").resizable({
		maxWidth: 800,
		handles: {
			'w': '#handle1'
		},
		start: function () {
			
		},
		stop: function () {
			
		}
	});
	$("#tab2").resizable({
		maxWidth: 800,
		animate: true,
		handles: {
			'w': '#handle2'
		}
	});
	$("#tab3").resizable({
		maxWidth: 800,
		handles: {
			'w': '#handle3'
		}
	});
	$("#tab4").resizable({
		maxWidth: 800,
		handles: {
			'w': '#handle4'
		}
	});
	
	$(".handle").mousedown(function() {
		var parent = $(this).parent().get(0);
		console.log($(parent).css('z-index'));
		$(parent).css('z-index',5);
	});
	$("#handle1").mouseup(function() {
		var parent = $(this).parent().get(0);
		console.log($(parent).css("left"));
		//$(this).animate({opacity:"0"},500);	
		if(parseInt($(parent).css("left"),10) < 620){
		//close all other tabs
		}else{
		//close this tab
			//$(parent).animate({width:"10px"},1000);
		}
	});

  });

