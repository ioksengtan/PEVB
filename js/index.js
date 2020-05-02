$(document).ready(function() {
	// console.log("docuemnt ready");
	var inst_managerZ = new ManagerZ();  
	var inst_managerUI = new ManagerUI();  
	inst_managerZ.test();
	turn_off_layout_view();
	Nodes = {
		0: {
			0: {'id': 'p1t'},
			1: {'id': 'p2t'},
			2: {'id': 'p3t'},
			3: {'id': 'p4t'},
			4: {'id': 'p5t'},
			5: {'id': 'p6t'},
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
	//tmp = ['#Zp1t2p2t']
	tmp = []
	for (layer in Nodes){
		for (cnt in Nodes[layer]){
			if ( cnt < 7 ) {
				//console.log(Nodes[layer][cnt]['id'])
				//console.log(typeof(cnt))
				//console.log(Nodes[layer][parseInt(cnt)+1]['id'])
				str = '#Z' + Nodes[layer][cnt]['id'] + '2' + Nodes[layer][parseInt(cnt)+1]['id']
				//console.log(str)
				
				tmp.push(str)
			}
		}
	}
	for (i =0;i<tmp.length;i++){	
		$(tmp[i]).click(
			function(){
				console.log(this);
			}
		);

	}
	
  
  
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
