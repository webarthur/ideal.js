Date.isValid = function (s) {
	var l = s.length
	var j = 0
	var dt = {0: '', 1:'', 2:''}
  
  // split date
  for (var i=0; i<l; i++) {
  	var c = s[i]
    if (c!=='/') {
    	dt[j] += c
    }
    else {
    	j++
    }
  }
  
  // date rules
  var d = +dt[0]
  var m = +dt[1]
  var y = +dt[2]
  var lp = +((y % 4 == 0) && ((y % 100 != 0) || (y % 400 == 0)))
  if (m<1 || m>12 || d<1) {
  	return false
  }
  else if ([1, 3, 5, 7, 8, 10, 12].indexOf(m)>-1 && d>31) {
  	return false
  }
  else if ([4, 6, 9, 11].indexOf(m)>-1 && d>30) {
  	return false
  }
  else if (m===2 && d>28+lp) {
  	return false
  }
  return true
}
