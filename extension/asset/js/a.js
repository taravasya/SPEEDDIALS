function getcustomicon() {
    if ( document.getElementsByClassName('_1abmwnCj-IqFvZZT3_DZy0')[2] && document.getElementsByClassName('_1abmwnCj-IqFvZZT3_DZy0')[2].style.backgroundImage == '') {
        console.log(document.getElementsByClassName('_14fkLEpRMg0Ecl_52-p6dU _2TYwBQxs3apdXRmlR3lTM1')[0].value);
        if (document.getElementsByClassName('_14fkLEpRMg0Ecl_52-p6dU')[0].value != '') {
            url = 'https://photomir.dn.ua/icon/geticons.php?site=' + document.getElementsByClassName('_14fkLEpRMg0Ecl_52-p6dU')[0].value
            window.open(url, '_blank').focus();
        }
    }
}