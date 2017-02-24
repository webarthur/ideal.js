window.location.getQueryParams = function(query) {
  
  if (!query) {
    query = window.location.search
  }
  
  var l = query.length
  var q = {} // query
  var n = '' // name
  var v = '' // value
  var t = false
  
  for(i=0; i<l; i++) {
    var c = query[i]
    
    if (c==='=') {
      t = true
    }
    else if (c==='&' || i===l-1) {
      t = false
      q[n] = decodeURIComponent(v)
      n = ''
      v = ''
    }
    else if (i>0 || c!=='?') {
      if (t) {
        if (c==='+') {
          c = ' '
        }
        v += c
      }
      else {
        n += c
      }
    }
  }
  return q
}