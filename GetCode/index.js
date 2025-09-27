console.log(navigator.language); 
// Ví dụ: "vi-VN", "en-US"

GetLocale();
const id = GetID();
HideParams();



function GetLocale()
{
    if (navigator.language === "vi" || navigator.language === "vi-VN")
   {
        document.getElementById('Locale_ClickHereToGetCode').innerText = 'Nhấn vào đây để lấy mã';
        document.getElementById('Locale_GetCode').innerText = 'Lấy mã';
    }
    else
    {
        document.getElementById('Locale_ClickHereToGetCode').innerText = 'Click here to get code';
        document.getElementById('Locale_GetCode').innerText = 'Get Code';
    }

}

const code = ["623504","958168","721658","851345","580052","833445"];

function GetID() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    console.log('id:', id);
    return id;
}
function HideParams() {
    window.history.replaceState({}, document.title, window.location.pathname);
}

function GetCode() {
    console.log("id get: " + id)
    if (id === null) {
        alert("Error.");
        return;
    }
    else{
        copyText(code[id]);
    }
}

function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert("Copied code!"))
        .catch(err => console.error("Error:", err));
}
