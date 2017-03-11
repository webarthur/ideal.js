Element.prototype.css = function (n, v) {
  if (typeof v == 'undefined') {
    if (typeof n == 'object') {
      let k = Object.keys(n)
      const l = k.length
      for (let i = 0; i < l; i++) {
        this.css(k[i], n[k[i]])
      }
    }
    else {
      return this.style[n]
    }
  }
  else {
    this.style[n] = v
  }
  return this
}
