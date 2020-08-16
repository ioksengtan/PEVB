var impedances_map = {
	Zp1t_p2t:{
		x: 0,
		y: 0,
  },
  Zp2t_p3t:{
		x: 0,
		y: 1,
  },
  Zp3t_p4t:{
		x: 0,
		y: 2,
  },
  Zp4t_p5t:{
		x: 0,
		y: 3,
  },
  Zp5t_p6t:{
		x: 0,
		y: 4,
  },
  Zp6t_p7t:{
		x: 0,
		y: 5,
  },
  Zp7t_p8t:{
		x: 0,
		y: 6,
  },
// ------------------
  Zp1t_x1t: {
    x: 1,
    y: 0
  },
  Zp2t_x1t: {
    x: 1,
    y: 1
  },
  Zp2t_y1t: {
    x: 1,
    y: 2
  },
  Zp3t_y1t: {
    x: 1,
    y: 3
  },
  Zp3t_x2t: {
    x: 1,
    y: 4
  },
  Zp4t_x2t: {
    x: 1,
    y: 5
  },
  Zp4t_y2t: {
    x: 1,
    y: 6
  },
  Zp5t_y2t: {
    x: 1,
    y: 7
  },
  Zp5t_x3t: {
    x: 1,
    y: 8
  },
  Zp6t_x3t: {
    x: 1,
    y: 9
  },
  Zp6t_y3t: {
    x: 1,
    y: 10
  },
  Zp7t_y3t: {
    x: 1,
    y: 11
  },
  Zp7t_z1t: {
    x: 1,
    y: 12
  },
  Zp8t_z1t: {
    x: 1,
    y: 13
  },
// ------------------
  Zp1t_n1t: {
    x:2,
    y:0
  },
  Zp2t_n2t: {
    x:2,
    y:1
  },
  Zp3t_n3t: {
    x:2,
    y:2
  },
  Zp4t_n4t: {
    x:2,
    y:3
  },
  Zp5t_n5t: {
    x:2,
    y:4
  },
  Zp6t_n6t: {
    x:2,
    y:5
  },
  Zp7t_n7t: {
    x:2,
    y:6
  },
  Zp8t_n8t: {
    x:2,
    y:7
  },
// ------------------
  Zn1t_x1t: {
    x: 3,
    y: 0
  },
  Zn2t_x1t: {
    x: 3,
    y: 1
  },
  Zn2t_y1t: {
    x: 3,
    y: 2
  },
  Zn3t_y1t: {
    x: 3,
    y: 3
  },
  Zn3t_x2t: {
    x: 3,
    y: 4
  },
  Zn4t_x2t: {
    x: 3,
    y: 5
  },
  Zn4t_y2t: {
    x: 3,
    y: 6
  },
  Zn5t_y2t: {
    x: 3,
    y: 7
  },
  Zn5t_x3t: {
    x: 3,
    y: 8
  },
  Zn6t_x3t: {
    x: 3,
    y: 9
  },
  Zn6t_y3t: {
    x: 3,
    y: 10
  },
  Zn7t_y3t: {
    x: 3,
    y: 11
  },
  Zn7t_z1t: {
    x: 3,
    y: 12
  },
  Zn8t_z1t: {
    x: 3,
    y: 13
  },
// ------------------
  Zn1t_n2t:{
		x: 4,
		y: 0,
  },
  Zn2t_n3t:{
		x: 4,
		y: 1,
  },
  Zn3t_n4t:{
		x: 4,
		y: 2,
  },
  Zn4t_n5t:{
		x: 4,
		y: 3,
  },
  Zn5t_n6t:{
		x: 4,
		y: 4,
  },
  Zn6t_n7t:{
		x: 4,
		y: 5,
  },
  Zn7t_n8t:{
		x: 4,
		y: 6,
  },
// ------------------
  Zn1t_g1: {
    x: 5,
    y: 0
  },
  Zn2t_g1: {
    x: 5,
    y: 1
  },
  Zn2t_v1: {
    x: 5,
    y: 2
  },
  Zn3t_v1: {
    x: 5,
    y: 3
  },
  Zn3t_g2: {
    x: 5,
    y: 4
  },
  Zn4t_g2: {
    x: 5,
    y: 5
  },
  Zn4t_v2: {
    x: 5,
    y: 6
  },
  Zn5t_v2: {
    x: 5,
    y: 7
  },
  Zn5t_g3: {
    x: 5,
    y: 8
  },
  Zn6t_g3: {
    x: 5,
    y: 9
  },
  Zn6t_v3: {
    x: 5,
    y: 10
  },
  Zn7t_v3: {
    x: 5,
    y: 11
  },
  Zn7t_g4: {
    x: 5,
    y: 12
  },
  Zn8t_g4: {
    x: 5,
    y: 13
  },
// ------------------
  Zn1t_n1b: {
    x:6,
    y:0
  },
  Zn2t_n2b: {
    x:6,
    y:1
  },
  Zn3t_n3b: {
    x:6,
    y:2
  },
  Zn4t_n4b: {
    x:6,
    y:3
  },
  Zn5t_n5b: {
    x:6,
    y:4
  },
  Zn6t_n6b: {
    x:6,
    y:5
  },
  Zn7t_n7b: {
    x:6,
    y:6
  },
  Zn8t_n8b: {
    x:6,
    y:7
  },
// ------------------
  Zn1b_g1: {
    x: 7,
    y: 0
  },
  Zn2b_g1: {
    x: 7,
    y: 1
  },
  Zn2b_v1: {
    x: 7,
    y: 2
  },
  Zn3b_v1: {
    x: 7,
    y: 3
  },
  Zn3b_g2: {
    x: 7,
    y: 4
  },
  Zn4b_g2: {
    x: 7,
    y: 5
  },
  Zn4b_v2: {
    x: 7,
    y: 6
  },
  Zn5b_v2: {
    x: 7,
    y: 7
  },
  Zn5b_g3: {
    x: 7,
    y: 8
  },
  Zn6b_g3: {
    x: 7,
    y: 9
  },
  Zn6b_v3: {
    x: 7,
    y: 10
  },
  Zn7b_v3: {
    x: 7,
    y: 11
  },
  Zn7b_g4: {
    x: 7,
    y: 12
  },
  Zn8b_g4: {
    x: 7,
    y: 13
  },
// ------------------
  Zn1b_n2b:{
		x: 8,
		y: 0,
  },
  Zn2b_n3b:{
		x: 8,
		y: 1,
  },
  Zn3b_n4b:{
		x: 8,
		y: 2,
  },
  Zn4b_n5b:{
		x: 8,
		y: 3,
  },
  Zn5b_n6b:{
		x: 8,
		y: 4,
  },
  Zn6b_n7b:{
		x: 8,
		y: 5,
  },
  Zn7b_n8b:{
		x: 8,
		y: 6,
  },
// ------------------
  Zn1b_x1b: {
    x: 9,
    y: 0
  },
  Zn2b_x1b: {
    x: 9,
    y: 1
  },
  Zn2b_y1b: {
    x: 9,
    y: 2
  },
  Zn3b_y1b: {
    x: 9,
    y: 3
  },
  Zn3b_x2b: {
    x: 9,
    y: 4
  },
  Zn4b_x2b: {
    x: 9,
    y: 5
  },
  Zn4b_y2b: {
    x: 9,
    y: 6
  },
  Zn5b_y2b: {
    x: 9,
    y: 7
  },
  Zn5b_x3b: {
    x: 9,
    y: 8
  },
  Zn6b_x3b: {
    x: 9,
    y: 9
  },
  Zn6b_y3b: {
    x: 9,
    y: 10
  },
  Zn7b_y3b: {
    x: 9,
    y: 11
  },
  Zn7b_z1b: {
    x: 9,
    y: 12
  },
  Zn8b_z1b: {
    x: 9,
    y: 13
  },
// ------------------
  Zn1b_p1b: {
    x:10,
    y:0
  },
  Zn2b_p2b: {
    x:10,
    y:1
  },
  Zn3b_p3b: {
    x:10,
    y:2
  },
  Zn4b_p4b: {
    x:10,
    y:3
  },
  Zn5b_p5b: {
    x:10,
    y:4
  },
  Zn6b_p6b: {
    x:10,
    y:5
  },
  Zn7b_p7b: {
    x:10,
    y:6
  },
  Zn8b_p8b: {
    x:10,
    y:7
  },
// ------------------
  Zp1b_x1b: {
    x: 11,
    y: 0
  },
  Zp2b_x1b: {
    x: 11,
    y: 1
  },
  Zp2b_y1b: {
    x: 11,
    y: 2
  },
  Zp3b_y1b: {
    x: 11,
    y: 3
  },
  Zp3b_x2b: {
    x: 11,
    y: 4
  },
  Zp4b_x2b: {
    x: 11,
    y: 5
  },
  Zp4b_y2b: {
    x: 11,
    y: 6
  },
  Zp5b_y2b: {
    x: 11,
    y: 7
  },
  Zp5b_x3b: {
    x: 11,
    y: 8
  },
  Zp6b_x3b: {
    x: 11,
    y: 9
  },
  Zp6b_y3b: {
    x: 11,
    y: 10
  },
  Zp7b_y3b: {
    x: 11,
    y: 11
  },
  Zp7b_z1b: {
    x: 11,
    y: 12
  },
  Zp8b_z1b: {
    x: 11,
    y: 13
  },
// ------------------
	Zp1b_p2b:{
		x: 12,
		y: 0,
  },
  Zp2b_p3b:{
		x: 12,
		y: 1,
  },
  Zp3b_p4b:{
		x: 12,
		y: 2,
  },
  Zp4b_p5b:{
		x: 12,
		y: 3,
  },
  Zp5b_p6b:{
		x: 12,
		y: 4,
  },
  Zp6b_p7b:{
		x: 12,
		y: 5,
  },
  Zp7b_p8b:{
		x: 12,
		y: 6,
  },
}