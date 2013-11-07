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
/*
    $( "#tab1").draggable({ axis: "x", handle: "p",
        drag: function() {
            //console.log($(this).css("left"));
            $(this).css("z-index",0);
        },
        stop: function() {
            if($(this).css("left").replace("px","") < 200){
                $(this).css("z-index",100);
                $("#main .tab-container").each(function(index,value) {
                    if(parseInt($(this).css("left"),10) == 10){
                        $(this).css("z-index",0).animate({"left":729}).delay(1000).css("z-index",10);
                    }
                });
                $(this).animate({"left":10});
                $(this).css("z-index",0);

            }else{
                $(this).animate({"left":729});
            }
        }
    });

    $( "#tab2").draggable({ axis: "x", handle: "p",
        drag: function() {
            //console.log($(this).css("left"));
            $(this).css("z-index",0);
        },
        stop: function() {
            if($(this).css("left").replace("px","") < 200){
                $(this).css("z-index",100);
                $("#main .tab-container").each(function(index,value) {
                    if(parseInt($(this).css("left"),10) == 10){
                        $(this).css("z-index",0).animate({"left":729}).delay(1000).css("z-index",10);
                    }
                });
                $(this).animate({"left":10});
                $(this).css("z-index",0);

            }else{
                $(this).animate({"left":729});
            }
        }
    });
/*

    $( "#main div").draggable({stack: "#main div", handle: "p", axis:"x",
        drag: function() {
            console.log($(this).css("z-index",0));
        }
    });*/
  });

