impedences_id = [
"#Zp1t_p2t" , "#Zn1t_n2t" , "#Zn1b_n2b" , "#Zp1b_p2b" , "#Zp2t_p3t" , "#Zn2t_n3t" , "#Zn2b_n3b" , "#Zp2b_p3b" , "#Zp3t_p4t" , "#Zn3t_n4t" , "#Zn3b_n4b" , "#Zp3b_p4b" , "#Zp4t_p5t" , "#Zn4t_n5t" , "#Zn4b_n5b" , "#Zp4b_p5b" , "#Zp5t_p6t" , "#Zn5t_n6t" , "#Zn5b_n6b" , "#Zp5b_p6b" , "#Zp6t_p7t" , "#Zn6t_n7t" , "#Zn6b_n7b" , "#Zp6b_p7b" , "#Zp7t_p8t" , "#Zn7t_n8t" , "#Zn7b_n8b" , "#Zp7b_p8b" , "#Zp1t_x1t" , "#Zp2t_x1t" , "#Zn1t_x1t" , "#Zn2t_x1t" , "#Zp2t_y1t" , "#Zp3t_y1t" , "#Zn2t_y1t" , "#Zn3t_y1t" , "#Zp3t_x2t" , "#Zp4t_x2t" , "#Zn3t_x2t" , "#Zn4t_x2t" , "#Zp4t_y2t" , "#Zp5t_y2t" , "#Zn4t_y2t" , "#Zn5t_y2t" , "#Zp5t_x3t" , "#Zp6t_x3t" , "#Zn5t_x3t" , "#Zn6t_x3t" , "#Zp6t_y3t" , "#Zp7t_y3t" , "#Zn6t_y3t" , "#Zn7t_y3t" , "#Zp7t_z1t" , "#Zp8t_z1t" , "#Zn7t_z1t" , "#Zn8t_z1t" , "#Zn1t_g1" , "#Zn2t_g1" , "#Zn1b_g1" , "#Zn2b_g1" , "#Zn2t_v1" , "#Zn3t_v1" , "#Zn2b_v1" , "#Zn3b_v1" , "#Zn3t_g2" , "#Zn4t_g2" , "#Zn3b_g2" , "#Zn4b_g2" , "#Zn4t_v2" , "#Zn5t_v2" , "#Zn4b_v2" , "#Zn5b_v2" , "#Zn5t_g3" , "#Zn6t_g3" , "#Zn5b_g3" , "#Zn6b_g3" , "#Zn6t_v3" , "#Zn7t_v3" , "#Zn6b_v3" , "#Zn7b_v3" , "#Zn7t_g4" , "#Zn8t_g4" , "#Zn7b_g4" , "#Zn8b_g4" , "#Zn1b_x1b" , "#Zn2b_x1b" , "#Zp1b_x1b" , "#Zp2b_x1b" , "#Zn2b_y1b" , "#Zn3b_y1b" , "#Zp2b_y1b" , "#Zp3b_y1b" , "#Zn3b_x2b" , "#Zn4b_x2b" , "#Zp3b_x2b" , "#Zp4b_x2b" , "#Zn4b_y2b" , "#Zn5b_y2b" , "#Zp4b_y2b" , "#Zp5b_y2b" , "#Zn5b_x3b" , "#Zn6b_x3b" , "#Zp5b_x3b" , "#Zp6b_x3b" , "#Zn6b_y3b" , "#Zn7b_y3b" , "#Zp6b_y3b" , "#Zp7b_y3b" , "#Zn7b_z1b" , "#Zn8b_z1b" , "#Zp7b_z1b" , "#Zp8b_z1b" , "#Zp1t_n1t" , "#Zn1t_n1b" , "#Zn1b_p1b" , "#Zp2t_n2t" , "#Zn2t_n2b" , "#Zn2b_p2b" , "#Zp3t_n3t" , "#Zn3t_n3b" , "#Zn3b_p3b" , "#Zp4t_n4t" , "#Zn4t_n4b" , "#Zn4b_p4b" , "#Zp5t_n5t" , "#Zn5t_n5b" , "#Zn5b_p5b" , "#Zp6t_n6t" , "#Zn6t_n6b" , "#Zn6b_p6b" , "#Zp7t_n7t" , "#Zn7t_n7b" , "#Zn7b_p7b" , "#Zp8t_n8t" , "#Zn8t_n8b" , "#Zn8b_p8b" , 
]
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

function impedence_clicked(Z_id) {
	//console.log(Z_id);
	update_impedence_state(Z_id)
	display_impedence_state(Z_id)
	//console.log(get_impedence_type(Z_id));
	//console.log(get_impedence_value(Z_id));
}

function display_impedence_state(Z_id){
	console.log('#'+Z_id)
	tmp = '#' + Z_id
	if ( get_impedence_type(Z_id) == 'R' & get_impedence_value(Z_id) == 0 ){
		$(tmp).css({
		fill: "#ff0000"
		});

	} else if ( get_impedence_type(Z_id) == 'R' & get_impedence_value(Z_id) > 0){
		$(tmp).css({
			fill: "#aaaaaa"
		});
	} else if ( get_impedence_type(Z_id) == 'C' ){
		$(tmp).css({
			fill: "#0000ff"
		});
	} else if ( get_impedence_type(Z_id) == 'open'){
		$(tmp).css({
			fill: "#ffffff"
		});

	}
}

function get_impedence_type(Z_id){
	return impedences[Z_id]['type']
}
function get_impedence_value(Z_id){
	return impedences[Z_id]['value']
}
function set_impedence_type(Z_id, type){
	impedences[Z_id]['type'] = type
}
function set_impedence_value(Z_id, value){
	impedences[Z_id]['value'] = value
}

function update_impedence_state(Z_id){
	if (get_impedence_type(Z_id) == 'R' & get_impedence_value(Z_id) == 0){
		set_impedence_value(Z_id, default_R)
	} else if ( get_impedence_type(Z_id) == 'R' & get_impedence_value(Z_id) > 0){
		set_impedence_type(Z_id, 'C')
		set_impedence_value(Z_id, default_C)
	} else if ( get_impedence_type(Z_id) == 'C') {
		set_impedence_type(Z_id, 'open')
	} else if ( get_impedence_type(Z_id) == 'open' ){		
		set_impedence_type(Z_id, 'R')
		set_impedence_value(Z_id, 0)
	}
}

function openTab(TabName) {
	var i;
	var x = document.getElementsByClassName("tab");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(TabName).style.display = "block";
}

function openCircuitView(ViewName) {
	if (ViewName == 'Schematic'){
		turn_off_layout_view();
	}else if (ViewName == 'Layout'){
		turn_on_layout_view();
	}
}
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  console.log('close')
  document.getElementById("mySidebar").style.display = "none";
}
function openICView(ViewName) {
	var i;
	var x = document.getElementsByClassName("ICView");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(ViewName).style.display = "block";
}

let default_R = 1000
let default_C = 0.1
impedences = []

$(document).ready(function() {
	w3_close();
	for (i =0;i<impedences_id.length;i++){	
		impedence_name = impedences_id[i].split('#')[1]
		tmp = {
			'type':'open',
		}
		impedences[impedence_name] = tmp
	}
	turn_off_layout_view();
	Nodes = {
		0: {
			0: {'id': 'p1t'},
			1: {'id': 'p2t'},
			2: {'id': 'p3t'},
			3: {'id': 'p4t'},
			6: {'id': 'p7t'},
			7: {'id': 'p8t'}
		},
		1: {
			0: {'id': 'n1t'},
			1: {'id': 'n2t'},
			2: {'id': 'n3t'},
			3: {'id': 'n4t'},
			4: {'id': 'n5t'},
			5: {'id': 'n6t'},
			6: {'id': 'n7t'},
			7: {'id': 'n8t'}
		},
		2: {
			0: {'id': 'n1b'},
			1: {'id': 'n2b'},
			2: {'id': 'n3b'},
			3: {'id': 'n4b'},
			4: {'id': 'n5b'},
			5: {'id': 'n6b'},
			6: {'id': 'n7b'},
			7: {'id': 'n8b'}
		},
		3: {
			0: {'id': 'p1b'},
			1: {'id': 'p2b'},
			2: {'id': 'p3b'},
			3: {'id': 'p4b'},
			4: {'id': 'p5b'},
			5: {'id': 'p6b'},
			6: {'id': 'p7b'},
			7: {'id': 'p8b'}
		}
	}
	for (i =0;i<impedences_id.length;i++){	
		$(impedences_id[i]).click(
			function(){
				impedence_clicked(this.id);
			}
		);
	}
})




