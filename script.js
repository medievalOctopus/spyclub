function copyToClipboard(text) {
  window.prompt("Please press Ctrl+C and then Enter.", text);
}
$(document).ready(function(){
    $("#encode").click(function(){
        var key = $("#key").val();
        var message = $("textarea").val();
        var encrypted = CryptoJS.AES.encrypt(message, key);
        $("#result").val(encrypted);
    });
    $("#decode").click(function(){
        var key = $("#key").val();
        var message = $("textarea").val();
        var decrypted = CryptoJS.AES.decrypt(message, key);
        decrypted = decrypted.toString(CryptoJS.enc.Utf8);
        $("#result").val(decrypted);
    });
    $("#selectall").click(function(){
        copyToClipboard($("#result").val());
    });
});
