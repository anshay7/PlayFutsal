// $('#hide').click(function(){
// 	$('.comentBox').hide();
// })
// $('#show').click(function(){
// 	$('.comentBox').show();
// })
// $('#toggle').click(function(){
// 	$('.comentBox').toggle();
// })
// $('#slide-up').click(function(){
//     $("html, body").animate({ scrollTop: 0 }, 500);
//     return false;
// });
//
//
// function render(data){
// 	var html="<div class='comentBox'><div class='leftPanelImg'><img src='../images/i.png'/></div><div class='rightPanel'><span>"+data.name+" </span><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div></div>";
// 	$('#container').append(html);
//
// }
//
// $(document).ready(function(){
// 	var coment=[{"name":"Gaurav Raut","date":"02/12/2019","body":"this is first comment"}];
// 	if(!localStorage.comentData){
// 		localStorage.comentData=[];}
//      else{
//      	coment=JSON.parse(localStorage.comentData);
//      }
//      for(var i=0;i<coment.length;i++){
//      	render(coment[i]);
//      }
// 	$('#add').click(function(){
// 		var addObj={
// 			"name":$('#name').val(),
// 			"date":$('#date').val(),
// 			"body":$('#body').val(),
//
// 		};
// 		coment.push(addObj);
// 		localStorage.comentData=JSON.stringify(coment);
// 		render(addObj);
// 		$('#name').val('');
// 		$('#date').val('dd/mm/yyyy');
// 		$('#body').val('');
//
// 	});
// });
