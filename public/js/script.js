const url_atual = window.location.pathname

if(url_atual == '/home'){
    document.getElementById('menuHome').className = 'nav-link text-black active'
} else if(url_atual == '/horoscopo'){
    document.getElementById('menuHoroscopo').className = 'nav-link text-black active'
}