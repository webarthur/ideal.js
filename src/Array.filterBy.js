// 05/12/16
Array.prototype.filterBy = function (key, val, returnFirst) {
    if (typeof key=='object') {
      returnFirst = val
    }
    var item = this.filter(function (x) {
      if (typeof key=='object') {
        var check = true
        Object.keys(key).forEach(function (k) {
          check = check && (x[k] == key[k])
        })
        return check
      }
      else {
        return x? (x[key] == val) : false
      }
    })

    return returnFirst? item[0] : item
};
