
$(document).ready(function(){

	$(".countries").change(function(){
		
	    $( ".countries option:selected" ).each(function() {
		     var country = $( this ).val();

		     $(".countries_lotto select").addClass("hide");

		     $(".countries_lotto").find("."+country).toggleClass("hide");

		     $(".countries_lotto select").first('option').click();
		     
		     if(country == 'nz'){
		     	$(".max").text(50);
		     	$(".small_num").text(1);
				$(".high_num").text(2);
		     }else{
		     	$(".max").text(45);
		     	$(".small_num").text(0);
				$(".high_num").text(0);
		     }
	    });

	});

	if(	$(".big_wednesday").is(":selected")){
		$(".small_num").text(1);
		$(".high_num").text(2);
	}else if($(".powerball").is(":selected")){
		$(".small_num").text(1);
		$(".high_num").text(10);
	}else{
		$(".small_num").text(0);
		$(".high_num").text(0);
	}


	$(".countries_lotto select").change(function(){

		var value = $(this).find("option:selected").val();
			
		$(".max").text(value);

		if(	$(".big_wednesday").is(":selected")){
			$(".small_num").text(1);
			$(".high_num").text(2);
		}else if($(".powerball").is(":selected")){
			$(".small_num").text(1);
			$(".high_num").text(10);
		}else{
			$(".small_num").text(0);
			$(".high_num").text(0);
		}
		
	});


	$(".btn").click(function(e){
		e.preventDefault();
		var arr = []

		var maxVal = $(".max").text();
		var smallNum = $(".small_num").text();
		var highNum = $(".high_num").text();

		while(arr.length < 6){
		  var randomnumber=Math.ceil(Math.random()*maxVal)
		  var found=false;
		  for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber){
				found=true;
				break
			}
		  }
		  if(!found)arr[arr.length]=randomnumber;
		}

        var nums = arr.sort(function(a, b){return a-b});
        var highnums = getRandomInt(Number(smallNum), Number(highNum)+1);
		$(".result").text(nums + "  /  " +highnums);
 
	});

	function getRandom() {
	  return Math.random();
	}


	// Returns a random number between min (inclusive) and max (exclusive)
	function getRandomArbitrary(min, max) {
  		return Math.random() * (max - min) + min;
	}

	// Returns a random integer between min (included) and max (excluded)
	// Using Math.round() will give you a non-uniform distribution!
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	

	// var rollDie = getRandomizer( 1, 6 );

	// var results = ""
	// for ( var i = 0; i<1000; i++ ) {
	//     results += rollDie() + " ";    //make a string filled with 1000 random numbers in the range 1-6.
	// }

	//console.log(arr);

	
});