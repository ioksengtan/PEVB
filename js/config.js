var lp = 
{
	unit:{
		R:'',
		C:'p',
	},
	circuit:{
		name:'low_pass_filter',
		schematic:{
			map:[
			//r -> gray, o-> open (white), c-> (blue), s->red
				['r0', 'r100', 's', 'c1', 'c0.02', 's', 's'],
				['s11', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 's', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
				['o', 'o', 'o', 'o', 'o', 'o', 'o']
			],
			Zp2t_p3t:'r666',
			Zp3t_p4t:'o',
			Zp4t_p5t:'c1'
		},
		diagram:{
			name: 'Circuit Schematic',
			src:'https://lh5.googleusercontent.com/-dBHEUF4iHtQ/TW6b19-7N5I/AAAAAAAAACs/9NZHyRCTy6Y/s320/low-pass-filter-circuit-10khz-using-ua741.jpg'
		},
		description: {
			name: "Circuit Description",
			text: 'Active Inverting Op Amp Low Pass Filter Circuit The inverting low pass filter circuit that we will build with an LM741 op amp chip and a few resistors and a capacitor is shown below. This low pass filter below is an inverting low pass filter. This means that the output of the op amp is 180 degrees of out of phase with the input signal. This correlates, from an image angle, vertically flipping the input signal and this what would appear as output.',
		}
	},
	ic:{
		name:'OP741',
		description: {
			name: 'IC Description',
			title: 'IC Description',
			text: 'Active Inverting Op Amp Low Pass Filter Circuit The inverting low pass filter circuit that we will build with an LM741 op amp chip and a few resistors and a capacitor is shown below. This low pass filter below is an inverting low pass filter. This means that the output of the op amp is 180 degrees of out of phase with the input signal. This correlates, from an image angle, vertically flipping the input signal and this what would appear as output.',
		},
		pin_definition:{
			name: 'Pin Definition',
			1:{
				pin_name:'OFFSET',
				direction:'input',
				description:'External input offset voltage adjustment'
			},
			2:{
				pin_name:'IN-',
				direction:'input',
				description:'Inverting input'
			},
			3:{
				pin_name:'IN+',
				direction:'input',
				description:'Noninverting input'
			},
			4:{
				pin_name:'VCC-',
				direction:'-',
				description:'Negative supply'
			},
			5:{
				pin_name:'OFFSET-',
				direction:'input',
				description:'External input offset voltage adjustment'
			},
			6:{
				pin_name:'OUT',
				direction:'output',
				description:'Output'
			},
			7:{
				pin_name:'VCC+',
				direction:'-',
				description:'Positive supply'
			},
			8:{
				pin_name:'NC',
				direction:'-',
				description:'No internal connection'
			}
		},
		schematic:{
			name: 'IC Schematic',
			src:'https://www.st-andrews.ac.uk/~www_pa/Scots_Guide/datasheets/Opamps/741dia.gif'
		}
	},
	info:"How to build"
}
