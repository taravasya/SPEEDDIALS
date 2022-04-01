function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function copymyurl(id) {
    var mydiv = document.getElementById("ic_contaner"+id);
    var result = copyToClipboard(mydiv.firstChild.src);
    mydiv.children[1].innerText = 'Ссылка скопирована!';
    mydiv.children[1].style.backgroundColor = '#0b4646c4';
    console.log("copied?", result);
}

function showmsg(id) {
    $("#ic"+id).removeClass("ic_hiden").addClass("ic_hidenshow");
}

function hidemsg(id) {
    $("#ic"+id).removeClass("ic_hidenshow").addClass("ic_hiden");
    $("#ic"+id).css("background-color", "#41747485");  
}