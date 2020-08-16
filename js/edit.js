var ColorMap = {
	Red: 's',
	Gray: 'r',
	Blue: 'c',
	White: 'o',
}
var {
	Red,
	Gray,
	Blue,
	White,
} = ColorMap;

impedances_id = [
	"#Zp1t_p2t" , "#Zn1t_n2t" , "#Zn1b_n2b" , "#Zp1b_p2b" , "#Zp2t_p3t" , "#Zn2t_n3t" , "#Zn2b_n3b" , "#Zp2b_p3b" , "#Zp3t_p4t" , "#Zn3t_n4t" , "#Zn3b_n4b" , "#Zp3b_p4b" , "#Zp4t_p5t" , "#Zn4t_n5t" , "#Zn4b_n5b" , "#Zp4b_p5b" , "#Zp5t_p6t" , "#Zn5t_n6t" , "#Zn5b_n6b" , "#Zp5b_p6b" , "#Zp6t_p7t" , "#Zn6t_n7t" , "#Zn6b_n7b" , "#Zp6b_p7b" , "#Zp7t_p8t" , "#Zn7t_n8t" , "#Zn7b_n8b" , "#Zp7b_p8b" , "#Zp1t_x1t" , "#Zp2t_x1t" , "#Zn1t_x1t" , "#Zn2t_x1t" , "#Zp2t_y1t" , "#Zp3t_y1t" , "#Zn2t_y1t" , "#Zn3t_y1t" , "#Zp3t_x2t" , "#Zp4t_x2t" , "#Zn3t_x2t" , "#Zn4t_x2t" , "#Zp4t_y2t" , "#Zp5t_y2t" , "#Zn4t_y2t" , "#Zn5t_y2t" , "#Zp5t_x3t" , "#Zp6t_x3t" , "#Zn5t_x3t" , "#Zn6t_x3t" , "#Zp6t_y3t" , "#Zp7t_y3t" , "#Zn6t_y3t" , "#Zn7t_y3t" , "#Zp7t_z1t" , "#Zp8t_z1t" , "#Zn7t_z1t" , "#Zn8t_z1t" , "#Zn1t_g1" , "#Zn2t_g1" , "#Zn1b_g1" , "#Zn2b_g1" , "#Zn2t_v1" , "#Zn3t_v1" , "#Zn2b_v1" , "#Zn3b_v1" , "#Zn3t_g2" , "#Zn4t_g2" , "#Zn3b_g2" , "#Zn4b_g2" , "#Zn4t_v2" , "#Zn5t_v2" , "#Zn4b_v2" , "#Zn5b_v2" , "#Zn5t_g3" , "#Zn6t_g3" , "#Zn5b_g3" , "#Zn6b_g3" , "#Zn6t_v3" , "#Zn7t_v3" , "#Zn6b_v3" , "#Zn7b_v3" , "#Zn7t_g4" , "#Zn8t_g4" , "#Zn7b_g4" , "#Zn8b_g4" , "#Zn1b_x1b" , "#Zn2b_x1b" , "#Zp1b_x1b" , "#Zp2b_x1b" , "#Zn2b_y1b" , "#Zn3b_y1b" , "#Zp2b_y1b" , "#Zp3b_y1b" , "#Zn3b_x2b" , "#Zn4b_x2b" , "#Zp3b_x2b" , "#Zp4b_x2b" , "#Zn4b_y2b" , "#Zn5b_y2b" , "#Zp4b_y2b" , "#Zp5b_y2b" , "#Zn5b_x3b" , "#Zn6b_x3b" , "#Zp5b_x3b" , "#Zp6b_x3b" , "#Zn6b_y3b" , "#Zn7b_y3b" , "#Zp6b_y3b" , "#Zp7b_y3b" , "#Zn7b_z1b" , "#Zn8b_z1b" , "#Zp7b_z1b" , "#Zp8b_z1b" , "#Zp1t_n1t" , "#Zn1t_n1b" , "#Zn1b_p1b" , "#Zp2t_n2t" , "#Zn2t_n2b" , "#Zn2b_p2b" , "#Zp3t_n3t" , "#Zn3t_n3b" , "#Zn3b_p3b" , "#Zp4t_n4t" , "#Zn4t_n4b" , "#Zn4b_p4b" , "#Zp5t_n5t" , "#Zn5t_n5b" , "#Zn5b_p5b" , "#Zp6t_n6t" , "#Zn6t_n6b" , "#Zn6b_p6b" , "#Zp7t_n7t" , "#Zn7t_n7b" , "#Zn7b_p7b" , "#Zp8t_n8t" , "#Zn8t_n8b" , "#Zn8b_p8b" , 
]

var editPin = ''

function impedance_clicked(Z_id) {
	change_impedance_input_value(Z_id)
	// r -> gray, o-> open (white), c-> (blue), s->red
	update_impedance_state(Z_id)
	display_impedance_state(Z_id)
}

function get_impedance_type(Z_id){
	return impedances[Z_id]['type']
}

function get_impedance_value(Z_id){
	return impedances[Z_id]['value']
}

function set_impedance_type(Z_id, type){
	impedances[Z_id]['type'] = type
}
function set_impedance_value(Z_id, value){
	impedances[Z_id]['value'] = value
}

function set_impedance_input_value(Z_id) {
	$('.pin-value').val(impedances[Z_id]['value'])
}
function get_impedance_input_value() {
	return $('.pin-value').val()
}
function change_impedance_input_value(Z_id) {
	if (editPin !== Z_id) {
		if (editPin) {
			set_impedance_value(editPin, get_impedance_input_value())
		}
		editPin = Z_id
		if (Z_id) {
			set_impedance_input_value(Z_id)
		}
	}
}

function display_impedance_state(Z_id){
	console.log('#'+Z_id)
	tmp = '#' + Z_id
	var impedanceType = get_impedance_type(Z_id)
	if ( impedanceType == Red){
		$(tmp).css({
			fill: "#ff0000"
		});
	} else if ( impedanceType == Gray){
		$(tmp).css({
			fill: "#aaaaaa"
		});
	} else if ( impedanceType == Blue ){
		$(tmp).css({
			fill: "#0000ff"
		});
	} else if ( impedanceType == White){
		$(tmp).css({
			fill: "#ffffff"
		});
	}
}

function update_impedance_state(Z_id){
	var impedanceType = get_impedance_type(Z_id)
	switch (impedanceType) {
		case Red: {
			set_impedance_type(Z_id, Gray)
			break
		}
		case Gray: {
			set_impedance_type(Z_id, Blue)
			break
		}
		case Blue: {
			set_impedance_type(Z_id, White)
			break
		}
		case White: {
			set_impedance_type(Z_id, Red)
			break
		}
		default: {
			set_impedance_type(Z_id, White)
		}
	}
}

function openICView(ViewName) {
	var i;
	var x = document.getElementsByClassName("ICView");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(ViewName).style.display = "block";
}

function setImageListener(id) {
	$(`${id} button`).click(function () {
		var imageUrl = $(`${id} input`).val()
		$(`${id} img`).attr('src', imageUrl)
	}) 
}

function getIcConfig() {
	const config = {}
	config.ic = {
		name: $('.OP741').val(),
		schematic: {
			name: $('.PinLocation').val(),
			src: $('#PinLocation input').val()
		},
		description: {
			name: $('.ICDescription').val(),
			title: $('#ICDescription input').val(),
			text: $('#ICDescription textarea').val()
		},
		pin_definition: {
			name: $('.PinDefinition').val(),
			...getTableValue(),
		},
	}
	return config
}

function getTableValue() {
	let tableValue = {}
	$('#PinDefinition tr').each(function(index) {
		if (index !== 0) {
			var tds = $(this).children()
			var value = {}
			tds.each(function(index) {
				switch (index) {
					case 0: {
						value.index = $(this).html()
						break
					}
					case 1: {
						value.pin_name = $(this).children().val()
						break
					}
					case 2: {
						value.direction = $(this).children().val()
						break
					}
					case 3: {
						value.description = $(this).children().val()
						break
					}
				}
			})
			tableValue = {
				...tableValue,
				[value.index]: {
					pin_name: value.pin_name,
					direction: value.direction,
					description: value.description,	
				}
			}
		}
	})
	return tableValue
}

function getInfoConfig() {
	return {
		info: $('#info').val()
	}
}

function getCircuitConfig() {
	const config = {}

	config.circuit = {
		name: $('#title').val(),
		schematic: {
			...getSchematicValue('both')
		},
		diagram: {
			name: $('#CircuitSchematicInput').val(),
			src: $('#CircuitSchematic input').val(),
		},
		description: {
			name: $('#CircuitDescription input').val(),
			description: $('#CircuitDescription textarea').val(),
		}
	}
	return config
}

function getSchematicValue(type) {
	/*
		type 可以決定 schematic 要回傳什麼型別
		array(預設) { map: [[], []...] }
		object { Zn1b_g1: "o", ... }
		both { map: [[], []...], Zn1b_g1: "o", ... }
	*/
	const schematicMap = {}
	const schematicArray = []
	for(var i = 0; i < 13 ; i++ ) {
		schematicArray[i] = new Array()
	}
	Object.keys(impedances).forEach(item => {
		const value = `${impedances[item].type}${impedances[item].value || ''}`
		if (value !== White) {
			schematicMap[item] = value
		}
		if (impedances_map[item]) {
			schematicArray[impedances_map[item].x][impedances_map[item].y] = value
		}
	})
	
	switch (type) {
		case 'object' : {
			return {
				...schematicMap
			}
		}
		case 'array' : {
			return {
				map: schematicArray
			}
		}
		case 'both' : {
			return {
				map: schematicArray,
				...schematicMap
			}
		}
		default: {
			return {
				map: schematicArray
			}
		}
	}
}

impedances = {}

$(document).ready(function() {
	for (var i =0;i<impedances_id.length;i++){
		impedance_name = impedances_id[i].split('#')[1]
		tmp = {
			'type': White,
		}
		impedances[impedance_name] = tmp
	}
  for (var i =0;i<impedances_id.length;i++){	
		$(impedances_id[i]).click(
			function(){
				impedance_clicked(this.id);
			}
		);
	}

	setImageListener('#CircuitSchematic')
	setImageListener('#PinLocation')

	$('.print-config-button').click(function() {
		change_impedance_input_value()
		const config = {
			...getCircuitConfig(),
			...getIcConfig(),
			...getInfoConfig(),
		}
		console.log(config)
	})
})
