/**
 * Class to add DOM load functions and execute all node with onload attribute.
 *
 * @author Arthur Araújo
 * @date 01/12/2016
 */
$doc.onload = func => window.addEventListener('load', func)
$doc.onload(() => {
	$doc.findAll('[onload]').forEach( node => {
		var self = node
		eval(self.getAttribute('onload'))
	})
})
