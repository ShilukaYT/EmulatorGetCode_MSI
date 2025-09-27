console.log(navigator.language); 
const idCode = GetID();
GetLocale();

// Ví dụ: "vi-VN", "en-US"
function GetLocale()
{
    if (navigator.language === "vi" || navigator.language === "vi-VN")
   {
        document.getElementById('Locale_ClickHereToGetCode').innerText = 'Nhấn vào đây để lấy mã';
        document.getElementById('Locale_GetCode').innerText = 'Lấy mã';
    }
}
function RedirectLink(){
  if (!idCode) {
    alert('Không thể gửi yêu cầu lấy mã, vui lòng thử lại sau!');
    return;
  }
  const url = new URL('/GetCode/', window.location.origin);
  url.searchParams.set('id', idCode);
  window.location.href = url.toString();
}

function GetID(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    window.history.replaceState({}, document.title, window.location.pathname);
    console.log(id);
return id;
}


