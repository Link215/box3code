function dup(f,name) {
    var cop = document.createElement('input');
    cop.setAttribute('value', `${f} 小朋友,这是由${name}创作的代码,请注意要注明代码作者哦~`);
    document.body.appendChild(cop);
    cop.select();
    document.execCommand('copy');
    document.body.removeChild(cop);
    mdui.snackbar({ message: "已经加入剪切板!", position: 'bottom', timeout:2000});
}
