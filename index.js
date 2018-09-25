let reqMovie,id,title,yr;
$(document).ready(() => {
	$('#a1').click(function(){
		reqMovie = $('#in1').val();
		if (reqMovie == null || reqMovie == "") {

        	alert("No movie entered by user");

    	} else {
    		getAllData3();
    	}
	});

	$('#a2').click(function(){
		title=$('#in2').val();
		yr=$('#in3').val();
		reqMovie = $('#in2').val();
		console.log(reqMovie);
		if (reqMovie == null || reqMovie == "") {
        	alert("No movie entered by user");

    	} else {
        	getAllData1();

    	}
	});

	$('#a3').click(function(){
		title=$('#in2').val();
		yr=$('#in3').val();
		reqMovie = $('#in3').val();
		console.log(reqMovie);
		if (reqMovie == null || reqMovie == "") {

        	alert("No movie entered by user");

    	} else {

        	getAllData1();

    	}
	});

});

let getAllData1 = () => {

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'http://www.omdbapi.com/?t=' +title+'&y='+yr+'&apikey=83139172',
        success: (data) => {
        	console.log(data);
        	let movieName=data.Title;
        	$("#movieName").text(movieName);
        	let plot=data.Plot;
        	$("#moviePlot").text(plot);
        	let rating=data.imdbRating;
        	$("#movieRating").text("Movie Rating: "+rating);

        	if(data.Poster!=null){
        		$('#moviePoster').attr("src",data.Poster);
        	}

        }, error: (err) => {
        	alert("Invalid input");

        }

    });// end ajax call*/ 
}

let getAllData3 = () => {


    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'http://www.omdbapi.com/?i=' +reqMovie+'&apikey=83139172',
        success: (data) => {
        	console.log(data);
            let movieName=data.Title;
        	$("#movieName").text(movieName);
        	let plot=data.Plot;
        	$("#moviePlot").text(plot);
        	let rating=data.imdbRating;
        	$("#movieRating").text("Movie Rating: "+rating);

        	if(data.Poster!=null){
        		$('#moviePoster').attr("src",data.Poster);
        	}

        }, error: (err) => {
        	alert("Invalid input");

        }

    });// end ajax call*/ 


}