function getcustomicon () {
    if (document.getElementsByClassName("_1DzzHnyr0PWan_yx7BH2PK")[0] != undefined ) {
        if (document.getElementById("getcustomicon") === null) {
            var el = document.createElement("div");
            el.setAttribute("class", "_22Bk9qKmv1hfgT0avgvLPU");
            el.setAttribute("id", "getcustomicon");
            el.innerHTML = "Найти изображение на этом сайте";
            el.onclick = function() {openiconsite()};
            var div = document.getElementsByClassName("_1DzzHnyr0PWan_yx7BH2PK")[0];
            insertAfter(div, el);
        }
    }
 }

function openiconsite() {
    inputval = document.getElementsByClassName("_14fkLEpRMg0Ecl_52-p6dU _2TYwBQxs3apdXRmlR3lTM1")[0].value;
    if (inputval != '') {
        url = 'http://photomir.dn.ua/icon/geticons.php?site=' + inputval
        window.open(url, '_blank').focus();
    }    
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}