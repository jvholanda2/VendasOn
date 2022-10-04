const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

if(params.e) {
    alert("Login ou senha incorretos. Tente novamente!")
}