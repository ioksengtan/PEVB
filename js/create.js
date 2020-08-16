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

var {
  circuit,
  ic,
  info
} = lp

function displayImpedance(key, value) {
  var impedanceType = value.slice(0, 1)
  tmp = '#' + key
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
function bindClickImpedance(key, value) {
  var impedanceValue = value.slice(1)
  $(`#${key}`).click(function() {
    $('#ImpedanceValue').text(impedanceValue)
  })
}

function transferArrayToMap(array = []) {
  const object = {}
  for(var i = 0; i < array.length; i++) {
    if (array[i]) {
      for (var j = 0; j < array[i].length; j++) {
        object[impedances_array_to_map[i][j]] = array[i][j]
      }
    }
  }
  return object;
}

function openICView(ViewName) {
	var i;
	var x = document.getElementsByClassName("ICView");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(ViewName).style.display = "block";
}

$(document).ready(function() {
  $('#info h1').append(info)

  $('#ic_name').text(ic.name)

  $('#PinLocationTitle').text(ic.schematic.name)
  $('#PinLocation img').attr('src', ic.schematic.src)

  $('#PinDefinitionTitle').text(ic.pin_definition.name)
  $('#PinDefinition tr').each(function(index) {
    if (ic.pin_definition[index]) {
      const data = ic.pin_definition[index]
      $(this).append(`
        <td>${index}</td>
        <td>${data.pin_name}</td>
        <td>${data.direction}</td>
        <td>${data.description}</td>
      `)
    }
  })

  var schematicObject = transferArrayToMap(circuit.schematic.map)
  var allImpedances = {
    ...schematicObject,
    ...circuit.schematic
  }
  delete allImpedances.map
  Object.keys(allImpedances).forEach(key => {
    displayImpedance(key, allImpedances[key])
    bindClickImpedance(key, allImpedances[key])
  });
  $('#title').text(circuit.name)

  $('#ICDescriptionTitle').text(ic.description.name)
  $('#ICDescription h1').append(ic.description.title)
  $('#ICDescription p').append(ic.description.text)

  $('#CircuitSchematic h1').append(circuit.diagram.name)
  $('#CircuitSchematic img').attr('src', circuit.diagram.src)

  $('#CircuitDescription h1').append(circuit.description.name)
  $('#CircuitDescription p').append(circuit.description.text)

})