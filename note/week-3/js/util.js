function addClass(el,className){
	var oldClassStr = el.getAttribute('class')
	if (!oldClassStr) {
		el.setAttribute('class',className);
		return;
	}
	var oldClassArr = oldClassStr.split(' ');
	if(oldClassArr.indexOf(className)!=-1){
		return
	}
	oldClassStr += ' '+className;
	el.setAttribute('class',oldClassStr);
}
function delClass(el,className){
	if (!el.getAttribute('class')) {
		return;
	}
	var oldClassStr = el.getAttribute('class');
	var oldClassArr = oldClassStr.split(' ');
	var index = oldClassArr.indexOf(className);
	if (index!=-1){
		oldClassArr.splice(index,1);
		oldClassStr = oldClassArr.join(' ');
		el.setAttribute('class',oldClassStr);
	}
}