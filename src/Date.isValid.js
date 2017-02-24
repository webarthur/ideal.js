Date.isValid = function (s) {
  var l = s.length
  var j = 0
  var dt = { 0: '', 1:'', 2:'' }
  
  // days in month
  var n = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
  // split the date
  for (var i=0; i<l; i++) {
  	var c = s[i]
    if (c!=='/') {
    	dt[j] += c
    }
    else {
    	j++
    }
  }
  
  // convert string to numbers
  var d = +dt[0]
  var m = +dt[1]
  var y = +dt[2]
  
  // update leap year days
  n[2] += +((y % 4 == 0) && ((y % 100 != 0) || (y % 400 == 0)))
  
  // date rules:
  // month 1-12 and day>0
  if (m<1 || m>12 || d<1) {
  	return false
  }
  // validate days in month
  else if (d > n[m]) {
  	return false
  }

  // date is valid!
  return true
}
