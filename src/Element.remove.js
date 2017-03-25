$E.remove = function () {
    this.parentElement.removeChild(this);
}
$N.remove = $H.remove = function () {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i])
        }
    }
}
