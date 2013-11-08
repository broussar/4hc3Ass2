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
    //$( "#vol-display" ).html( $( "#vol-control" ).slider( "value" ) );
	//changes z-index
	function closetabs(current,other,current){
		for(var i = 1; i < 5;i++)
		{
			if(current != i)
			{
				$('#tab' + i).css('z-index',other);
			}else{
				$('#tab' + i).css('z-index',current);
			}
		}
	}
	$("#content1").hide();
	$("#content2").hide();
	$("#content3").hide();
	$("#content4").hide();
	//Actually closes other tabs
	function closetabs2(current){
		for(var i = 1; i < 5;i++)
		{
			if(current != i)
			{
				$("#content" + i).hide();
				$("#tab" + i).animate({"left":"1131px","width":"10px"},500);
				
				
			}else{
				$('#tab' + i).css('z-index',current);
			}
		}

	}


	function checkPosition(currentTab,id){ 
		$(currentTab);
		//if current tab is greater than 50% open it
		if(parseInt($(currentTab).css("width"),10) > 420)
		{
			//open current tab
			$(currentTab).animate({"left":"370px","width":"768px"},500,function() {$("#content" + id).show();});
			closetabs(id,5,0);
			closetabs2(id);
			
		}else{
			//close current tab
			$("#content" + id).hide();
			$(currentTab).animate({"left":"1131px","width":"10px"},500);
		}
	}

	$("#tab1").resizable({
		maxWidth: 768,
		handles: {
			'w': '#handle1'
		},
		start: function () {
			//increase z index
			closetabs(1,0,5);
			$("#content1").hide();
			//decrease of z index
			//fade content until it is visible
		},
		stop: function () {
			// check where we are and correct to proper position
			// potentially close other tabs
			checkPosition(this,1);
		}
	});
	$("#tab2").resizable({
		maxWidth: 768,
		handles: {
			'w': '#handle2'
		},
		start: function () {
			closetabs(2,0,5);
		},
		stop: function () {
			// check where we are and correct to proper position
			// potentially close other tabs
			checkPosition(this,2);
		}
	});
	$("#tab3").resizable({
		maxWidth: 768,
		handles: {
			'w': '#handle3'
		},
		start: function () {
			closetabs(3,0,5);
		},
		stop: function () {
			// check where we are and correct to proper position
			// potentially close other tabs
			checkPosition(this,3);
		}
	});
	$("#tab4").resizable({
		maxWidth: 768,
		handles: {
			'w': '#handle4'
		},
		start: function () {
			closetabs(4,0,5);
			$("#content4").hide();
		},
		stop: function () {
			// check where we are and correct to proper position
			// potentially close other tabs
			checkPosition(this,4);
		}
	});
	//to be replaced by start
	$(".handle").mousedown(function() {
		// var parent = $(this).parent().get(0);
		// console.log($(parent).css('z-index'));
		// $(parent).css('z-index',5);
	});
	//to be replaced by stop
	$("#handle1").mouseup(function() {
		// var parent = $(this).parent().get(0);
		// console.log($(parent).css("left"));
		// if(parseInt($(parent).css("left"),10) < 620){
	});

	
    $('#button').click(function(){  
        $(this).toggleClass('on');
	return false;  
    }); 

$('.slider-handle').draggable({
        containment:'parent',
        axis:'y',
        drag:function(e,ui){

            /* The drag function is called on every drag movement, no matter how minute */

            if(!this.par)
            {
                /* Initializing the variables only on the first drag move for performance */

                this.par = $(this).parent();
                this.parHeight = this.par.height();
                this.height = $(this).height();
                this.color = $.trim(this.par.attr('class').replace('colorful-slider',''));
            }

            var ratio = 1-(ui.position.top+this.height)/this.parHeight;
		$("#vol-display").html(Math.round(ratio * 100));

        }
    });









var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');
 
    //open and close menu when the button is clicked
  var open = false;
  button.addEventListener('click', handler, false);
  button.addEventListener('focus', handler, false);
 
  function handler(){
    if(!open){
      this.innerHTML = "Play";
//	$(wrapper).addClass("opened-nav");
//      classie.add(wrapper, 'opened-nav');
    }
    else{
      this.innerHTML = "Pause";
  //  classie.remove(wrapper, 'opened-nav');
//	$(wrapper).removeClass("opened-nav");
    }
    open = !open;
  }
  function closeWrapper(){
    //classie.remove(wrapper, 'opened-nav');
//	$(wrapper).removeClass("opened-nav");
  }
 

 
  });

