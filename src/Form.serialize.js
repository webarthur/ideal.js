$F.serialize = function() {
  var form = this
		, s = [];
  for (i=0; i<form.elements.length; i++) {
      field = form.elements[i];
      if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
          if (field.type == 'select-multiple') {
              for (j=form.elements[i].options.length-1; j>=0; j--) {
                  if(field.options[j].selected)
                      s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
              }
          }
					else if (field.type != 'checkbox' && field.type != 'radio') {
              s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
          }
					else if (field.type == 'checkbox' && field.checked) {
              s[s.length] = encodeURIComponent(field.name) + "[]=" + encodeURIComponent(field.value);
          }
      }
  }
  return s.join('&').replace(/%20/g, '+');
};
