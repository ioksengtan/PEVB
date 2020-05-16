svg_window_x = 640
svg_window_y = 480
def print_header():
	print "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 " + str(svg_window_x) + " " + str(svg_window_y) + "\" >"
 	print "<!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->"
        print "<g>"
  	print "<title>Layer 1</title>"

def print_footer():
	print "</g>"
	print "</svg>"

origin_x = 30
origin_y = 165
wire_length = 20
wire_width = 10
pin_pitch = 80
ic_pin_height = 10
ic_pin_width = 14
ic_height = 70
ic_width = 40
dict_layers = []
# P for Pin, T for Top
dict_layers.append({'type':'p', 'depth':'t'}) 
dict_layers.append({'type':'n', 'depth':'t'}) 
dict_layers.append({'type':'n', 'depth':'b'}) 
dict_layers.append({'type':'p', 'depth':'b'}) 
dict_btw_layers = []
dict_btw_layers.append({'type_from':'p','depth_from':'t', 'type_to':'n', 'depth_to':'t'})
dict_btw_layers.append({'type_from':'n','depth_from':'t', 'type_to':'n', 'depth_to':'b'})
dict_btw_layers.append({'type_from':'n','depth_from':'b', 'type_to':'p', 'depth_to':'b'})
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

for layer_id in Nodes:
	for cnt in Nodes[layer_id]:
		Nodes[layer_id][cnt]['loc_x'] = origin_x + cnt * pin_pitch
		Nodes[layer_id][cnt]['loc_y'] = origin_y + layer_id * pin_pitch


# Source
Sources = {
	0: {
		0: {'id': 'x1t'},
		1: {'id': 'y1t'}, 
		2: {'id': 'x2t'}, 
		3: {'id': 'y2t'}, 
		4: {'id': 'x3t'}, 
		5: {'id': 'y3t'}, 
		6: {'id': 'z1t'}
	},
	1: {
		0: {'id': 'g1'}, 
		1: {'id': 'v1'}, 
		2: {'id': 'g2'}, 
		3: {'id': 'v2'}, 
		4: {'id': 'g3'}, 
		5: {'id': 'v3'}, 
		6: {'id': 'g4'}
	},
	2: {
		0: {'id': 'x1b'}, 
		1: {'id': 'y1b'}, 
		2: {'id': 'x2b'}, 
		3: {'id': 'y2b'}, 
		4: {'id': 'x3b'}, 
		5: {'id': 'y3b'}, 
		6: {'id': 'z1b'}
	}
}
for layer_id in Sources:
	for cnt in Sources[layer_id]:
		Sources[layer_id][cnt]['loc_x'] = origin_x + cnt * pin_pitch + pin_pitch/2
		Sources[layer_id][cnt]['loc_y'] = origin_y + layer_id * pin_pitch + pin_pitch/2


def print_content():
	print_IC(
		id = 'ic',
		stroke_color = "#000000", 
		height = ic_height, 
		width = ic_width, 
		x = origin_x + pin_pitch * 3.5 - ic_width/2,
		y = origin_y/3, 
		fill_color = "#ffffff"
	)
	print_connections()
		
	print_nodes()
	print_impedences()
	print_texts()


IC_Pins = {
	0: {
		'id': 'ic_p1',
		'x': origin_x + pin_pitch * 3.5 - ic_width/2 - ic_pin_width/2, 
		'y': origin_y/3 + ic_height/5,
	},
	1: {
		'id': 'ic_p2',
		'x': origin_x + pin_pitch * 3.5 - ic_width/2  - ic_pin_width/2,  
		'y': origin_y/3 + ic_height*2/5,
	},
	2: {
		'id': 'ic_p3',
		'x': origin_x + pin_pitch * 3.5 - ic_width/2 - ic_pin_width/2, 
		'y': origin_y/3 + ic_height*3/5,
	},
	3: {
		'id': 'ic_p4',
		'x': origin_x + pin_pitch * 3.5 - ic_width/2 - ic_pin_width/2, 
		'y': origin_y/3 + ic_height*4/5,
	},
	4: {
		'id': 'ic_p5',
		'x': origin_x + pin_pitch * 3.5  + ic_width/2 + ic_pin_width/2, 
		'y': origin_y/3 + ic_height*4/5,
	},
	5: {
		'id': 'ic_p6',
		'x': origin_x + pin_pitch * 3.5  + ic_width/2 + ic_pin_width/2, 
		'y': origin_y/3 + ic_height*3/5,
	},
	6: {
		'id': 'ic_p7',
		'x': origin_x + pin_pitch * 3.5  + ic_width/2 + ic_pin_width/2, 
		'y': origin_y/3 + ic_height*2/5,
	},
	7: {
		'id': 'ic_p8',
		'x': origin_x + pin_pitch * 3.5  + ic_width/2 + ic_pin_width/2, 
		'y': origin_y/3 + ic_height*1/5,
	},
}

def print_connections():
	tmp_x1 = IC_Pins[4]['x']
	tmp_y1 = IC_Pins[4]['y']

	tmp_x2 = Nodes[0][4]['loc_x']
	tmp_diff_x = abs(tmp_x2 - tmp_x1)
	tmp_y2 = tmp_y1 + tmp_diff_x
	print_connection(
		id = "",
		stroke_color = "#000000", 
		x1 = tmp_x1,
		y1 = tmp_y1,
		y2 = tmp_y2,
		x2 = tmp_x2, 
	)
	print_connection(
		id = "",
		stroke_color = "#000000", 
		x1 = Nodes[0][4]['loc_x'],
		y1 = Nodes[0][4]['loc_y'],
		y2 = tmp_y2,
		x2 = tmp_x2, 
	)
	tmp_x1 = IC_Pins[3]['x']
	tmp_y1 = IC_Pins[3]['y']

	tmp_x2 = Nodes[0][3]['loc_x']
	tmp_diff_x = abs(tmp_x2 - tmp_x1)
	tmp_y2 = tmp_y1 + tmp_diff_x
	print_connection(
		id = "",
		stroke_color = "#000000", 
		x1 = tmp_x1,
		y1 = tmp_y1,
		y2 = tmp_y2,
		x2 = tmp_x2, 
	)
	print_connection(
		id = "",
		stroke_color = "#000000", 
		x1 = Nodes[0][3]['loc_x'],
		y1 = Nodes[0][3]['loc_y'],
		y2 = tmp_y2,
		x2 = tmp_x2, 
	)
	for i in range(0,3):
		tmp_x1 = Nodes[0][i]['loc_x']
		tmp_y1 = Nodes[0][i]['loc_y']
		tmp_y2 = IC_Pins[i]['y']
		tmp_diff_y = abs(tmp_y2 - tmp_y1)
		tmp_x2 = tmp_x1 + tmp_diff_y + ic_pin_height/2
		print_connection(
			id = "",
			stroke_color = "#000000", 
			x1 = Nodes[0][i]['loc_x'],
			y1 = Nodes[0][i]['loc_y'],
			y2 = tmp_y2,
			x2 = tmp_x2, 
		)
		print_connection(
			id = "",
			stroke_color = "#000000", 
			x1 = IC_Pins[i]['x'],
			y1 = IC_Pins[i]['y'],
			y2 = tmp_y2,
			x2 = tmp_x2, 
		)
	for i in range(5,8):
		tmp_x1 = Nodes[0][i]['loc_x']
		tmp_y1 = Nodes[0][i]['loc_y']
		tmp_y2 = IC_Pins[i]['y']
		tmp_diff_y = abs(tmp_y2 - tmp_y1)
		tmp_x2 = tmp_x1 - tmp_diff_y + ic_pin_height/2
		print_connection(
			id = "",
			stroke_color = "#000000", 
			x1 = Nodes[0][i]['loc_x'],
			y1 = Nodes[0][i]['loc_y'],
			y2 = tmp_y2,
			x2 = tmp_x2, 
		)
		print_connection(
			id = "",
			stroke_color = "#000000", 
			x1 = IC_Pins[i]['x'],
			y1 = IC_Pins[i]['y'],
			y2 = tmp_y2,
			x2 = tmp_x2, 
		)
	for each_src_id in Sources[2]:
		print_connection(
			id = "W_" + Nodes[3][each_src_id]['id'] +"_Z" + Nodes[3][each_src_id]['id'] + "_"+ Nodes[3][each_src_id+1]['id'], 
			stroke_color = "#000000", 
			x1 = Nodes[3][each_src_id]['loc_x'],
			y1 = Nodes[3][each_src_id]['loc_y'],
			x2 = Nodes[3][each_src_id +1]['loc_x'] - pin_pitch/2,
			y2 = Nodes[3][each_src_id]['loc_y'],
		)
		print_connection(
			id = "W_" + Nodes[3][each_src_id+1]['id'] +"_Z" + Nodes[3][each_src_id]['id'] + "_"+ Nodes[3][each_src_id+1]['id'], 
			stroke_color = "#000000", 
			x1 = Nodes[3][each_src_id+1]['loc_x'],
			y1 = Nodes[3][each_src_id]['loc_y'],
			x2 = Nodes[3][each_src_id +1]['loc_x'] - pin_pitch/2,
			y2 = Nodes[3][each_src_id]['loc_y'],
		)
	for each_layer_src_id in Sources: 
		for each_src_id in Sources[each_layer_src_id]:
			print_connection(
				id = "W_" + Nodes[each_layer_src_id][each_src_id]['id'] +"_Z" + Nodes[each_layer_src_id][each_src_id]['id'] + "_"+ Nodes[each_layer_src_id][each_src_id+1]['id'], 
				stroke_color = "#000000", 
				x1 = Nodes[each_layer_src_id][each_src_id]['loc_x'],
				y1 = Nodes[each_layer_src_id][each_src_id]['loc_y'],
				x2 = Nodes[each_layer_src_id][each_src_id +1]['loc_x'] - pin_pitch/2,
				y2 = Nodes[each_layer_src_id][each_src_id]['loc_y'],
			)
			print_connection(
				id = "W_" + Nodes[each_layer_src_id][each_src_id+1]['id'] +"_Z" + Nodes[each_layer_src_id][each_src_id]['id'] + "_"+ Nodes[each_layer_src_id][each_src_id+1]['id'], 
				stroke_color = "#000000", 
				x1 = Nodes[each_layer_src_id][each_src_id+1]['loc_x'],
				y1 = Nodes[each_layer_src_id][each_src_id]['loc_y'],
				x2 = Nodes[each_layer_src_id][each_src_id +1]['loc_x'] - pin_pitch/2,
				y2 = Nodes[each_layer_src_id][each_src_id]['loc_y'],
			)
	for each_layer_src_id in Sources: 
		for each_src_id in Nodes[each_layer_src_id]:
			print_connection(
				id = "W_" + Nodes[each_layer_src_id][each_src_id]['id'] +"_Z" + Nodes[each_layer_src_id][each_src_id]['id'] + "_"+ Nodes[each_layer_src_id+1][each_src_id]['id'], 
				stroke_color = "#000000", 
				x1 = Nodes[each_layer_src_id][each_src_id]['loc_x'],
				y1 = Nodes[each_layer_src_id][each_src_id]['loc_y'],
				x2 = Nodes[each_layer_src_id][each_src_id]['loc_x'],
				y2 = Sources[each_layer_src_id][0]['loc_y'],
			)
		for each_src_id in Nodes[each_layer_src_id]:
			print_connection(
				id = "W_" + Nodes[each_layer_src_id+1][each_src_id]['id'] +"_Z" + Nodes[each_layer_src_id][each_src_id]['id'] + "_"+ Nodes[each_layer_src_id+1][each_src_id]['id'], 
				stroke_color = "#000000", 
				x1 = Nodes[each_layer_src_id][each_src_id]['loc_x'],
				y1 = Nodes[each_layer_src_id+1][each_src_id]['loc_y'],
				x2 = Nodes[each_layer_src_id][each_src_id]['loc_x'],
				y2 = Sources[each_layer_src_id][0]['loc_y'],
			)
		for each_src_id in Sources[each_layer_src_id]:
			print_connection(
				id = "W_" + Nodes[each_layer_src_id][each_src_id]['id'] +"_Z" + Nodes[each_layer_src_id][each_src_id]['id'] + "_"+ Sources[each_layer_src_id][each_src_id]['id'], 
				stroke_color = "#000000", 
				x1 = Nodes[each_layer_src_id][each_src_id]['loc_x'],
				y1 = Nodes[each_layer_src_id][each_src_id]['loc_y'],
				x2 = Sources[each_layer_src_id][each_src_id]['loc_x'] - pin_pitch/4,
				y2 = Sources[each_layer_src_id][each_src_id]['loc_y'] - pin_pitch/4,
			)
			print_connection(
				id = "W_" + Nodes[each_layer_src_id][each_src_id+1]['id'] +"_Z" + Nodes[each_layer_src_id][each_src_id]['id'] + "_"+ Sources[each_layer_src_id][each_src_id]['id'], 
				stroke_color = "#000000", 
				x1 = Nodes[each_layer_src_id][each_src_id+1]['loc_x'],
				y1 = Nodes[each_layer_src_id][each_src_id+1]['loc_y'],
				x2 = Sources[each_layer_src_id][each_src_id]['loc_x'] + pin_pitch/4,
				y2 = Sources[each_layer_src_id][each_src_id]['loc_y'] - pin_pitch/4,
			)
			print_connection(
				id = "W_" + Nodes[each_layer_src_id+1][each_src_id]['id'] +"_Z" + Nodes[each_layer_src_id][each_src_id]['id'] + "_"+ Sources[each_layer_src_id][each_src_id]['id'], 
				stroke_color = "#000000", 
				x1 = Nodes[each_layer_src_id+1][each_src_id]['loc_x'],
				y1 = Nodes[each_layer_src_id+1][each_src_id]['loc_y'],
				x2 = Sources[each_layer_src_id][each_src_id]['loc_x'] - pin_pitch/4,
				y2 = Sources[each_layer_src_id][each_src_id]['loc_y'] + pin_pitch/4,
			)
			print_connection(
				id = "W_" + Nodes[each_layer_src_id+1][each_src_id+1]['id'] +"_Z" + Nodes[each_layer_src_id+1][each_src_id]['id'] + "_"+ Sources[each_layer_src_id][each_src_id]['id'], 
				stroke_color = "#000000", 
				x1 = Nodes[each_layer_src_id+1][each_src_id+1]['loc_x'],
				y1 = Nodes[each_layer_src_id+1][each_src_id+1]['loc_y'],
				x2 = Sources[each_layer_src_id][each_src_id]['loc_x'] + pin_pitch/4,
				y2 = Sources[each_layer_src_id][each_src_id]['loc_y'] + pin_pitch/4,
			)
			print_connection(
				id = "W_" + Sources[each_layer_src_id][each_src_id]['id'] +"_Z" + Nodes[each_layer_src_id][each_src_id]['id'] + "_"+ Sources[each_layer_src_id][each_src_id]['id'], 
				stroke_color = "#000000", 
				x1 = Sources[each_layer_src_id][each_src_id]['loc_x'],
				y1 = Sources[each_layer_src_id][each_src_id]['loc_y'],
				x2 = Sources[each_layer_src_id][each_src_id]['loc_x'] - pin_pitch/4,
				y2 = Sources[each_layer_src_id][each_src_id]['loc_y'] - pin_pitch/4,
			)
			print_connection(
				id = "W_" + Sources[each_layer_src_id][each_src_id]['id'] +"_Z" + Nodes[each_layer_src_id][each_src_id+1]['id'] + "_"+ Sources[each_layer_src_id][each_src_id]['id'], 
				stroke_color = "#000000", 
				x1 = Sources[each_layer_src_id][each_src_id]['loc_x'],
				y1 = Sources[each_layer_src_id][each_src_id]['loc_y'],
				x2 = Sources[each_layer_src_id][each_src_id]['loc_x'] + pin_pitch/4,
				y2 = Sources[each_layer_src_id][each_src_id]['loc_y'] - pin_pitch/4,
			)
			print_connection(
				id = "W_" + Sources[each_layer_src_id][each_src_id]['id'] +"_Z" + Nodes[each_layer_src_id][each_src_id+1]['id'] + "_"+ Sources[each_layer_src_id][each_src_id]['id'], 
				stroke_color = "#000000", 
				x1 = Sources[each_layer_src_id][each_src_id]['loc_x'],
				y1 = Sources[each_layer_src_id][each_src_id]['loc_y'],
				x2 = Sources[each_layer_src_id][each_src_id]['loc_x'] - pin_pitch/4,
				y2 = Sources[each_layer_src_id][each_src_id]['loc_y'] + pin_pitch/4,
			)
			print_connection(
				id = "W_" + Sources[each_layer_src_id][each_src_id]['id'] +"_Z" + Nodes[each_layer_src_id+1][each_src_id+1]['id'] + "_"+ Sources[each_layer_src_id][each_src_id]['id'], 
				stroke_color = "#000000", 
				x1 = Sources[each_layer_src_id][each_src_id]['loc_x'],
				y1 = Sources[each_layer_src_id][each_src_id]['loc_y'],
				x2 = Sources[each_layer_src_id][each_src_id]['loc_x'] + pin_pitch/4,
				y2 = Sources[each_layer_src_id][each_src_id]['loc_y'] + pin_pitch/4,
			)

def print_IC(id, stroke_color, height, width, x, y, fill_color):
	print "<rect id=\"" + id + "\" stroke=\"" + stroke_color + "\" height=\""+ str(height) +"\" width=\"" + str(width) +  "\" y=\"" + str(y) + "\" x=\"" + str(x) + "\" fill=\"" + fill_color + "\"/>"
	print "<rect id=\"" + "ic_p1" + "\" stroke=\"" + stroke_color + "\" height=\""+ str(ic_pin_height) +"\" width=\"" + str(ic_pin_width) +  "\" y=\"" + str(y+height/5 - ic_pin_height/2) + "\" x=\"" + str(x - ic_pin_width) + "\" fill=\"" + "#000000" + "\"/>"
	print "<rect id=\"" + "ic_p2" + "\" stroke=\"" + stroke_color + "\" height=\""+ str(ic_pin_height) +"\" width=\"" + str(ic_pin_width) +  "\" y=\"" + str(y+height*2/5 - ic_pin_height/2) + "\" x=\"" + str(x - ic_pin_width) + "\" fill=\"" + "#000000" + "\"/>"
	print "<rect id=\"" + "ic_p3" + "\" stroke=\"" + stroke_color + "\" height=\""+ str(ic_pin_height) +"\" width=\"" + str(ic_pin_width) +  "\" y=\"" + str(y+height*3/5 - ic_pin_height/2) + "\" x=\"" + str(x - ic_pin_width) + "\" fill=\"" + "#000000" + "\"/>"
	print "<rect id=\"" + "ic_p4" + "\" stroke=\"" + stroke_color + "\" height=\""+ str(ic_pin_height) +"\" width=\"" + str(ic_pin_width) +  "\" y=\"" + str(y+height*4/5 - ic_pin_height/2) + "\" x=\"" + str(x - ic_pin_width) + "\" fill=\"" + "#000000" + "\"/>"
	#
	print "<rect id=\"" + "ic_p8" + "\" stroke=\"" + stroke_color + "\" height=\""+ str(ic_pin_height) +"\" width=\"" + str(ic_pin_width) +  "\" y=\"" + str(y+height/5 - ic_pin_height/2) + "\" x=\"" + str(x  + width) + "\" fill=\"" + "#000000" + "\"/>"
	print "<rect id=\"" + "ic_p7" + "\" stroke=\"" + stroke_color + "\" height=\""+ str(ic_pin_height) +"\" width=\"" + str(ic_pin_width) +  "\" y=\"" + str(y+height*2/5 - ic_pin_height/2) + "\" x=\"" + str(x  + width) + "\" fill=\"" + "#000000" + "\"/>"
	print "<rect id=\"" + "ic_p6" + "\" stroke=\"" + stroke_color + "\" height=\""+ str(ic_pin_height) +"\" width=\"" + str(ic_pin_width) +  "\" y=\"" + str(y+height*3/5 - ic_pin_height/2) + "\" x=\"" + str(x  + width) + "\" fill=\"" + "#000000" + "\"/>"
	print "<rect id=\"" + "ic_p5" + "\" stroke=\"" + stroke_color + "\" height=\""+ str(ic_pin_height) +"\" width=\"" + str(ic_pin_width) +  "\" y=\"" + str(y+height*4/5 - ic_pin_height/2) + "\" x=\"" + str(x  + width) + "\" fill=\"" + "#000000" + "\"/>"
	
	
	

def print_connection(id, stroke_color, x1, y1, x2, y2):
	print "<line id=\"" + id + "\" y2=\"" + str(y2) + "\" x2=\""+ str(x2) +"\" y1=\""+ str(y1) +"\" x1=\""+ str(x1) +"\" stroke-linecap=\"null\" stroke-linejoin=\"null\" stroke-dasharray=\"null\" stroke-width=\"null\" fill=\"none\" stroke=\""+stroke_color+"\"/>"

def print_45_impedence(id, x, y, stroke_color, rotate_degree):
	xx = x - wire_length/2 + pin_pitch/4
	yy = y - wire_width/2 + pin_pitch/4
	print "<rect fill=\"#ffffff\" x=\"" + str(xx) +"\" y=\""+ str(yy) +"\" width=\""+ str(wire_length) +"\" height=\""+ str(wire_width) +"\" transform=\"rotate( " + str(rotate_degree) + ", " +str(xx + wire_length/2)+" ,"+str(yy + wire_width/2) +") \" id=\""+ id +"\" stroke=\""+ stroke_color +"\"/>"

def print_text(id, x, y, font_size, text_fill, stroke_color, text):
	print "<text fill=\"" + text_fill +"\" stroke=\"" + stroke_color+ "\" stroke-width=\"0\" stroke-dasharray=\"null\" stroke-linejoin=\"null\" stroke-linecap=\"null\" x=\"" + str(x) +"\" y=\"" + str(y)+ "\" id="+ id +" font-size=\"" + str(font_size) +"\" font-family=\"serif\" text-anchor=\"middle\" xml:space=\"preserve\">" + text + "</text>"


def print_impedence(id, stroke_color, height, width, x, y, fill_color):
	print "<rect id=\"" + id + "\" stroke=\"" + stroke_color + "\" height=\""+ str(height) +"\" width=\"" + str(width) +  "\" y=\"" + str(y) + "\" x=\"" + str(x) + "\" fill=\"" + fill_color + "\"/>"

def print_node(id, cx, cy):
	print "<circle cx=\"" + str(cx) +"\" cy=\"" + str(cy) +"\" r=\"10\" stroke=\"black\" stroke-width=\"2\" fill=\"red\" />"
	print "<circle cx=\"" + str(cx) +"\" cy=\"" + str(cy) +"\" r=\"6\" stroke=\"black\" stroke-width=\"2\" fill=\"white\" />"

def print_nodes():
	for i in range(1,9):
		for layer in dict_layers:
			if layer['type'] == 'p' and layer['depth'] == 't':
				layer_y_level = 0
			elif layer['type'] == 'n' and layer['depth'] == 't':
				layer_y_level = 1
			elif layer['type'] == 'n' and layer['depth'] == 'b':
				layer_y_level = 2
			elif layer['type'] == 'p' and layer['depth'] == 'b':
				layer_y_level = 3
			print_node(
				id = layer['type'] + str(i) + layer['depth'],
				cx = origin_x + (i-1)*pin_pitch , 
				cy = origin_y + layer_y_level * pin_pitch, 
			)
	
	for each_layer_src_id in Sources: 
		for each_src_id in Sources[each_layer_src_id]:
			print_node(
				id = "src_" + Sources[each_layer_src_id][each_src_id]['id'], 
				cx = origin_x + pin_pitch/2 + each_src_id * pin_pitch , 
				cy = origin_y + pin_pitch/2 + each_layer_src_id * pin_pitch, 
			)

def print_texts():
	for i in range(0,7):
		print_text(
			id = "txt_" + Sources[2][i]['id'] , 
			x = origin_x + pin_pitch * (i) +pin_pitch/2 + 20, 
			y = origin_y+pin_pitch*5/2 + 5, 
			font_size = 12, 
			text_fill = "#000000", 
			stroke_color = "#000000",
			text = Sources[2][i]['id'][0].upper()
		)
		print_text(
			id = "txt_" + Sources[1][i]['id'] , 
			x = origin_x + pin_pitch * (i) +pin_pitch/2 + 20, 
			y = origin_y+pin_pitch*3/2 + 5, 
			font_size = 12, 
			text_fill = "#000000", 
			stroke_color = "#000000",
			text = Sources[1][i]['id'][0].upper()
		)
		print_text(
			id = "txt_" + Sources[0][i]['id'] , 
			x = origin_x + pin_pitch * (i) +pin_pitch/2 + 20, 
			y = origin_y+pin_pitch/2 + 5, 
			font_size = 12, 
			text_fill = "#000000", 
			stroke_color = "#000000",
			text = Sources[0][i]['id'][0].upper()
		)
	
def print_impedences():
	#W_p1t_Zp1t2p2t
	for i in range(1, 8):
		for layer in dict_layers:
			print layer
			if layer['type'] == 'p' and layer['depth'] == 't':
				layer_y_level = 0
			elif layer['type'] == 'n' and layer['depth'] == 't':
				layer_y_level = 1
			elif layer['type'] == 'n' and layer['depth'] == 'b':
				layer_y_level = 2
			elif layer['type'] == 'p' and layer['depth'] == 'b':
				layer_y_level = 3
			# Zp1t2p2t
			print_impedence(
				id = "Z" + layer['type'] + str(i) + layer['depth'] + "_" + layer['type'] + str(i+1) + layer['depth'], 
				stroke_color = "#000000", 
				height = 10, width = 20, 
				x = origin_x + pin_pitch/2 - wire_length/2 + (i-1)* pin_pitch, 
				y = origin_y - wire_width/2 + layer_y_level * pin_pitch, 
				fill_color = "#ffffff"
			)
	for each_layer_src_id in Sources: 
		for each_src_id in Sources[each_layer_src_id]:
			#Zp1t2x1t
			print_45_impedence( 
				id = "Z" + Nodes[each_layer_src_id][each_src_id]['id'] + "_" + Sources[each_layer_src_id][each_src_id]['id'], 
				x = origin_x + each_src_id * pin_pitch, 
				y = origin_y + each_layer_src_id * pin_pitch, 
				stroke_color = "#000000", 
				rotate_degree = 45
			)
			#Zp2t2x1t
			print_45_impedence( 
				id = "Z" + Nodes[each_layer_src_id][each_src_id+1]['id'] + "_" + Sources[each_layer_src_id][each_src_id]['id'], 
				x = origin_x + each_src_id * pin_pitch + pin_pitch/2, 
				y = origin_y + each_layer_src_id * pin_pitch, 
				stroke_color = "#000000", 
				rotate_degree = 135
			)
			#Zn1t2x1t
			print_45_impedence( 
				id = "Z" + Nodes[each_layer_src_id+1][each_src_id]['id'] + "_" + Sources[each_layer_src_id][each_src_id]['id'], 
				x = origin_x + each_src_id * pin_pitch, 
				y = origin_y + each_layer_src_id * pin_pitch + pin_pitch/2, 
				stroke_color = "#000000", 
				rotate_degree = 135
			)
			#Zn2t2x1t
			print_45_impedence( 
				id = "Z" + Nodes[each_layer_src_id+1][each_src_id+1]['id'] + "_" + Sources[each_layer_src_id][each_src_id]['id'], 
				x = origin_x + each_src_id * pin_pitch + pin_pitch/2, 
				y = origin_y + each_layer_src_id * pin_pitch + pin_pitch/2, 
				stroke_color = "#000000", 
				rotate_degree = 45
			)

	for i in range(1,9):
		print_impedence(
			id = "Zp" + str(i) + "t_n" + str(i) +"t", 
			stroke_color = "#000000", 
			height = wire_length, width = wire_width, 
			x = origin_x + (i-1) * pin_pitch - wire_width/2,
			y = origin_y + pin_pitch/2 - wire_length/2,
			fill_color = "#ffffff"
		)
		print_impedence(
			id = "Zn" + str(i) + "t_n" + str(i) +"b", 
			stroke_color = "#000000", 
			height = wire_length, width = wire_width, 
			x = origin_x + (i-1)*pin_pitch - wire_width/2, 
			y = origin_y + pin_pitch*3/2 - wire_length/2,
			fill_color = "#ffffff"
		)
		print_impedence(
			id = "Zn" + str(i) + "b_p" + str(i) +"b", 
			stroke_color = "#000000", 
			height = wire_length, width = wire_width, 
			x = origin_x + (i-1)*pin_pitch - wire_width/2, 
			y = origin_y + pin_pitch*5/2 - wire_length/2,
			fill_color = "#ffffff"
		)


print_header()
print_content()
print_footer()

