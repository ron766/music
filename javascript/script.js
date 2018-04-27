/*MY PICTURES*************************************************************/	
/*image view grid*/
function onClick(element) 
{
	document.getElementById("img01").src = element.src;
	document.getElementById("modal01").style.display = "block";
}
/*jquery for switching div*/
	/*view gallery*/
	$('.galleryBtn').click(function()
	{
		$('.gallery').removeClass('disp');
		$('.galleryBtn').addClass('active');
		$('.grid').addClass('disp');
		$('.gridBtn').removeClass('active');
	})	
	/*view grid*/
	$('.gridBtn').click(function()
	{
		$('.grid').removeClass('disp');
		$('.gridBtn').addClass('active');
		$('.gallery').addClass('disp');
		$('.galleryBtn').removeClass('active');
	})

/*MY MUSIC***************************************************************/	
/*carousel for MUSIC & VIDEO gallery*/
if($("#carousel").length){
	var carousel = $("#carousel").flipster({
		style: 'carousel', spacing: -0.5, nav: true, buttons:   true,
	});
}
/*jquery for switching div MUSIC*/
	/*view list*/
	$('.listBtn').click(function()
	{
		$('.galleryBtn').removeClass('active');
		$('.gridBtn').removeClass('active');
		$('.listBtn').addClass('active');
		$('.musicList').removeClass('disp');
		$('.musicGrid').addClass('disp');
		$('.musicGallery').addClass('disp');
		/*pause audio on tab switch*/
 		$('audio').each(function() {
         this.pause();
    });
	})	
	/*view gallery*/
	$('.galleryBtn').click(function()
	{
		$('.listBtn').removeClass('active');
		$('.gridBtn').removeClass('active');
		$('.galleryBtn').addClass('active');
		$('.musicList').addClass('disp');
		$('.musicGrid').addClass('disp');
		$('.musicGallery').removeClass('disp');
		/*pause audio on tab switch*/
 		$('audio').each(function() {
         this.pause();
    });
	})
	/*view grid*/
	$('.gridBtn').on('click',function()
	{
		$('.galleryBtn').removeClass('active');
		$('.listBtn').removeClass('active');
		$('.gridBtn').addClass('active');
		$('.musicGrid').removeClass('disp');
		$('.musicList').addClass('disp');
		$('.musicGallery').addClass('disp');
		/*pause audio on tab switch*/
 		$('audio').each(function() {
         this.pause();
    });
	})
	/*to play audio gallery*/
	$('img.play_aud').click(function(event){
    $('.audio1').removeClass('disp');
    $("#resource_audio1")
      .attr("src",this.id)
      .get(0).play();
  });
  /*to play audio list*/
	$('tr.trAudio').click(function(event){
		$('.audioList').removeClass('disp');
		$("#resource_audioList").attr("src",this.id).get(0).play();
	});
	//displaying details to <p (gallery) MUSIC>
  $(".musicInfoGal").click(function(){
  	$('.galleryMusInfo').removeClass('disp');
  	var title = $(this).attr('data-title');
  	var artist = $(this).attr('data-artist');
  	var genre = $(this).attr('data-genre');
  	var length = $(this).attr('data-length');
  	var rating = $(this).attr('data-rating');
  	var index = 1;
  	var str = title +"<br/>"+ artist +"<br/>"+ genre +"<br/>"+ length +"<br/>"+ "Rating:"
  	while (index <= rating) 
  	{
		  str += ' <img src="images/star.png">';
		  index++;
		}
		$('.galleryMusInfo').html(str);
	});
	//list table
	$("#data tr").click(function() {
		$(this).find('.status').html('Stop');
		$(this).siblings().find('.status').html('Play');
		$(this).addClass('highlight');						
		$(this).siblings().removeClass('highlight')
	});
	/*jq to play audio on image click (Grid) MUSIC*/	
 	$('img.gridImg').click(function(event){
      /*$('muscicGridInfo').removeClass('disp');*/
      $("#resource_audio")
        .attr("src",this.id)
        .get(0).play();
  });
  //displaying details to <p (grid) MUSIC>
	$(".gridImg").click(function(){
		$('.muscicGridInfo').removeClass('disp');
		var title = $(this).attr('data-title');
		var artist = $(this).attr('data-artist');
		var genre = $(this).attr('data-genre');
		var length = $(this).attr('data-length');
		var rating = $(this).attr('data-rating');
		var index = 1;
		var str = title +"<br/>"+ artist +"<br/>"+ genre +"<br/>"+ length +"<br/>"+ "Rating:"
		while (index <= rating) 
		{
		 str += ' <img src="images/star.png">';
		 index++;
		}
		$('.gridMusInfo').html(str);
	});

/*MY VIDEOS*************************************************************/
/*jquery for switching div*/
 	/*view gallery VIDEO*/
 	$('.galleryBtn').click(function()
 	{
 		$('.videoGallery').removeClass('disp');
 		$('.gridBtn').removeClass('active');
 		$('.grid').addClass('disp');
 		$('.galleryBtn').addClass('active');
 		/*pause video on tab switch*/
 		$('video').each(function() {
         this.pause();
    });
 	})	
 	/*view grid VIDEO*/
 	$('.gridBtn').click(function()
 	{
 		$('.grid').removeClass('disp');
 		$('.galleryBtn').removeClass('active');
 		$('.videoGallery').addClass('disp');
 		$('.gridBtn').addClass('active');
 		/*pause video on tab switch*/
 		$('video').each(function() {
         this.pause();
    });
	})
/*jq to play video on image click (Grid) VIDEO*/	
 	$('img.play_media1').click(function(event){
      $('video').removeClass('disp');
      $("#resource_video")
        .attr("src",this.id)
        .get(0).play();
  });
//for play/pause VIDEO
	$(document).ready(function(){
    $(".vid").click(function(){
		 $('video').each(function() {
         this.pause();
    	});
		 $(this).get(0).play();
		});
	});
//tooltip
	if($('[data-toggle="tooltip"]').length){
		$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
		});
	}
	
//displaying details to <p (gallery) VIDEO>
  $(".videoInfoGal").click(function(){
  	$('.galleryVidInfo').removeClass('disp');
  	var title = $(this).attr('data-title');
  	var artist = $(this).attr('data-artist');
  	var genre = $(this).attr('data-genre');
  	var length = $(this).attr('data-length');
  	var rating = $(this).attr('data-rating');
  	var index = 1;
  	var img;
  	var str = title +"<br/>"+ artist +"<br/>"+ genre +"<br/>"+ length +"<br/>"+ "Rating:"
  	while (index <= rating) 
  	{
		  str += ' <img src="images/star.png">';
		  index++;
		}
		$('.galleryVidInfo').html(str);
	});
//displaying details to <p (grid) VIDEO>
$(".play_media1").click(function(){
	$('.videoInfo').removeClass('disp');
	var title = $(this).attr('data-title');
	var artist = $(this).attr('data-artist');
	var genre = $(this).attr('data-genre');
	var length = $(this).attr('data-length');
	var rating = $(this).attr('data-rating');
	var index = 1;
	var img;
	var str = title +"<br/>"+ artist +"<br/>"+ genre +"<br/>"+ length +"<br/>"+ "Rating:"
	while (index <= rating) 
	{
	  str += ' <img src="images/star.png">';
	  index++;
	}
	$('.gridVidInfo').html(str);
});

/*MY FILES*/
//active   
/*$('.panel-heading').on('click',function(){
	$(this).addClass('active');
	$(this).parent().siblings().find('.panel-heading').removeClass('active');
})*/