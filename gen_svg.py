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

def print_content():
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
			#print_connection(
			#	id = "W_" + layer['type'] + str(i) + layer['depth']+"_Z" + layer['type'] + str(i)+layer['depth'] + "2"+layer['type'] + str(i+1) + layer['depth'], 
			#	stroke_color = "#000000", 
			#	x1 = 34-5 + (i-1)*pin_pitch, y1 = 165 + layer_y_level * pin_pitch, 
			#	x2 = 64-5 + (i-1)*pin_pitch, y2 = 165 + layer_y_level * pin_pitch
			#)
			#print_connection(
			#	id = "W_" + layer['type'] + str(i) + layer['depth']+"_Z" + layer['type'] + str(i)+layer['depth'] + "2"+layer['type'] + str(i+1) + layer['depth'], 
			#	stroke_color = "#000000", 
			#	x1 = 34-5 + (i-1)*pin_pitch, y1 = 165 + layer_y_level * pin_pitch, 
			#	x2 = 64-5 + (i-1)*pin_pitch, y2 = 165 + layer_y_level * pin_pitch
			#)
			# Zp1t2p2t
			print_impedence(
				id = "Z" + layer['type'] + str(i) + layer['depth'] + "2" + layer['type'] + str(i+1) + layer['depth'], 
				stroke_color = "#000000", 
				height = 10, width = 20, 
				x = origin_x + pin_pitch/2 - wire_length/2 + (i-1)* pin_pitch, 
				y = origin_y - wire_width/2 + layer_y_level * pin_pitch, 
				fill_color = "#ffffff"
			)
	for i in range(1,9):
		print_impedence(
			id = "Zp" + str(i) + "t2n" + str(i) +"t", 
			stroke_color = "#000000", 
			height = wire_length, width = wire_width, 
			x = origin_x + (i-1) * pin_pitch - wire_width/2,
			y = origin_y + pin_pitch/2 - wire_length/2,
			fill_color = "#ffffff"
		)
		print_impedence(
			id = "Zn" + str(i) + "t2n" + str(i) +"b", 
			stroke_color = "#000000", 
			height = wire_length, width = wire_width, 
			x = origin_x + (i-1)*pin_pitch - wire_width/2, 
			y = origin_y + pin_pitch*3/2 - wire_length/2,
			fill_color = "#ffffff"
		)
		print_impedence(
			id = "Zn" + str(i) + "b2p" + str(i) +"b", 
			stroke_color = "#000000", 
			height = wire_length, width = wire_width, 
			x = origin_x + (i-1)*pin_pitch - wire_width/2, 
			y = origin_y + pin_pitch*5/2 - wire_length/2,
			fill_color = "#ffffff"
		)
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
	# FN for floating node
	FN = {
		0: {
			0: 'x1t', 
			1: 'y1t', 
			2: 'x2t', 
			3: 'y2t', 
			4: 'x3t', 
			5: 'y3t', 
			6: 'z1t'
		},
		1: {
			0: 'g1', 
			1: 'v1', 
			2: 'g2', 
			3: 'v2', 
			4: 'g3', 
			5: 'v3', 
			6: 'g4'
		},
		2: {
			0: 'x1b', 
			1: 'y1b', 
			2: 'x2b', 
			3: 'y2b', 
			4: 'x3b', 
			5: 'y3b', 
			6: 'z1b'
		}
	}
		
	for each_layer_fn_id in FN: 
		for each_fn_id in FN[each_layer_fn_id]:
			print_node(
				id = "fn_" + FN[each_layer_fn_id][each_fn_id], 
				cx = origin_x + pin_pitch/2 + each_fn_id * pin_pitch , 
				cy = origin_y + pin_pitch/2 + each_layer_fn_id * pin_pitch, 
			)
	print_45_impedence( "Zp1t2x1t", origin_x, origin_y, "#000000")
	print_45_impedence( "ZZ", origin_x + pin_pitch, origin_y + pin_pitch, "#000000")


def print_connection(id, stroke_color, x1, y1, x2, y2):
	print "<line id=\"" + id + "\" y2=\"" + str(y2) + "\" x2=\""+ str(x2) +"\" y1=\""+ str(y1) +"\" x1=\""+ str(x1) +"\" stroke-linecap=\"null\" stroke-linejoin=\"null\" stroke-dasharray=\"null\" stroke-width=\"null\" fill=\"none\" stroke=\""+stroke_color+"\"/>"

def print_45_impedence(id, x, y, stroke_color):
	xx = x - wire_length/2 + pin_pitch/4
	yy = y - wire_width/2 + pin_pitch/4
	print "<rect fill=\"#ffffff\" x=\"" + str(xx) +"\" y=\""+ str(yy) +"\" width=\""+ str(wire_length) +"\" height=\""+ str(wire_width) +"\" transform=\"rotate(45, " +str(xx + wire_length/2)+" ,"+str(yy + wire_width/2) +") \" id=\""+ id +"\" stroke=\""+ stroke_color +"\"/>"

def print_impedence(id, stroke_color, height, width, x, y, fill_color):
	print "<rect id=\"" + id + "\" stroke=\"" + stroke_color + "\" height=\""+ str(height) +"\" width=\"" + str(width) +  "\" y=\"" + str(y) + "\" x=\"" + str(x) + "\" fill=\"" + fill_color + "\"/>"

def print_node(id, cx, cy):
	print "<circle cx=\"" + str(cx) +"\" cy=\"" + str(cy) +"\" r=\"10\" stroke=\"black\" stroke-width=\"2\" fill=\"red\" />"
	print "<circle cx=\"" + str(cx) +"\" cy=\"" + str(cy) +"\" r=\"6\" stroke=\"black\" stroke-width=\"2\" fill=\"white\" />"

print_header()
print_content()
print_footer()

