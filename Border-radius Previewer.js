//需要的元素
const doms = {
    topleft_input: document.getElementById("topleft"),
    topright_input: document.getElementById("topright"),
    bottomleft_input: document.getElementById("bottomleft"),
    bottomright_input: document.getElementById("bottomright"),
    output : document.getElementById('realTimeContent'),
    surface : document.getElementById('surface'),
    textarea : document.getElementById('code'),
}
//更新圆角的函数并写在textarea标签中
function updateSurface(){
    var topleft_value = doms.topleft_input.value;
    var topright_value = doms.topright_input.value;
    var bottomleft_value = doms.bottomleft_input.value;
    var bottomright_value = doms.bottomright_input.value;
    doms.surface.style.borderRadius = `${topleft_value}px ${topright_value}px ${bottomright_value}px ${bottomleft_value}px`;
    if(topleft_value !== '0' || topright_value !== '0' || bottomleft_value !== '0' || bottomright_value !== '0'){
    doms.textarea.textContent = `border-radius: ${topleft_value}px ${topright_value}px ${bottomright_value}px ${bottomleft_value}px;`;
}else{
    doms.textarea.textContent = '';
}
}
//处理用户数据
doms.topleft_input.addEventListener('input', updateSurface);
doms.topright_input.addEventListener('input', updateSurface);
doms.bottomleft_input.addEventListener('input', updateSurface);
doms.bottomright_input.addEventListener('input', updateSurface);

updateSurface();

