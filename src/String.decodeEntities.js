// http://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
$S.decodeEntities = function() {
	return this.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
			var num = parseInt(numStr, 10) // read num as normal number
			return String.fromCharCode(num)
	})
}
