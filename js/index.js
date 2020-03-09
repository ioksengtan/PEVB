$(document).ready(function() {
  // console.log("docuemnt ready");
  var inst_managerZ = new ManagerZ();  
  var inst_managerUI = new ManagerUI();  
  inst_managerZ.test();
  turn_off_layout_view();
  
  
});

function turn_off_layout_view(){
	for(i=1;i<9;i++){
		$('#LW_P'+i+'t_Zp'+i+'t2n'+i+'t').css({
			display: "none"
		});
		$('#LW_N'+i+'t_Zp'+i+'t2n'+i+'t').css({
			display: "none"
		});
		$('#LW_N'+i+'t_Zn'+i+'t2n'+i+'b').css({
			display: "none"
		});
		$('#LW_N'+i+'b_Zn'+i+'t2n'+i+'b').css({
			display: "none"
		});
	}
	
}


function turn_on_layout_view(){
	for(i=1;i<9;i++){
		$('#LW_P'+i+'t_Zp'+i+'t2n'+i+'t').css({
			display: ""
		});
		$('#LW_N'+i+'t_Zp'+i+'t2n'+i+'t').css({
			display: ""
		});
		$('#LW_N'+i+'t_Zn'+i+'t2n'+i+'b').css({
			display: ""
		});
		$('#LW_N'+i+'b_Zn'+i+'t2n'+i+'b').css({
			display: ""
		});
	}
	
}