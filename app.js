const dizelFiyat = 41.53
const benzinFiyat = 40.25
const lpgFiyat = 17.56
let bakiye = 1000
const cardHeader = document.querySelector(".card-header")
const hoşText = document.querySelector("#hos")
const yakıtTipi = document.querySelector("#yakıtTipi")
const dizelTus = document.querySelector("#dizelTus")
const benzinTus = document.querySelector("#benzinTus")
const lpgTus = document.querySelector("#lpgTus")
const giriş = document.querySelector("#giris")
const yenile = document.querySelector("#yenile")
const litreİnput = document.querySelector("#litre")
const onayla = document.createElement("onay")
const div = document.createElement("div")
let seçim = ""
run()
function run() {
    yenile.remove()
    litreİnput.remove()
    setTimeout(() => {
        hoşText.remove()
    }, 2000);
    dizelTus.addEventListener("click", dizel)
    benzinTus.addEventListener("click", benzin)
    lpgTus.addEventListener("click", lpg)
    litreİnput.addEventListener("keyup", işlem)
    onayla.addEventListener("click", bitir)
    yenile.addEventListener("click", geriDön)
}
function dizel() {
    tuşlarıKaldır()
    yakıtTipi.textContent = "Yakıt tipi : Dizel | Fiyat : "+dizelFiyat+" | Bakiye : "+bakiye+" ₺"
    cardHeader.appendChild(litreİnput)
    düzenle()
    seçim = dizelFiyat
}
function benzin() {
    tuşlarıKaldır()
    yakıtTipi.textContent = "Yakıt tipi: Benzin | Fiyat: "+benzinFiyat+" | Bakiye: "+bakiye+" ₺"
    cardHeader.appendChild(litreİnput)
    düzenle()
    seçim = benzinFiyat
}
function lpg() {
    tuşlarıKaldır()
    yakıtTipi.textContent = "Yakıt tipi : LPG | Fiyat : "+lpgFiyat+" | Bakiye : "+bakiye+" ₺"
    cardHeader.appendChild(litreİnput)
    düzenle()
    seçim = lpgFiyat
}
function tuşlarıKaldır() {
    dizelTus.remove()
    benzinTus.remove()
    lpgTus.remove()
    hoşText.remove()
    litreİnput.remove()
    yenile.remove()
}
function tuşlarıGetir() {
    cardHeader.appendChild(dizelTus)
    cardHeader.appendChild(benzinTus)
    cardHeader.appendChild(lpgTus)
}
function düzenle() {
    yakıtTipi.classList.replace("col-12", "col-11")
    yakıtTipi.classList.replace("rounded", "rounded-start")
    document.querySelector("#div").appendChild(yenile)
}
function işlem() {
    if (litreİnput.value > 0) {

        onayla.className = "btn btn-outline-success col-12"
        onayla.textContent = "Onayla"
        div.className = "card-body d-flex justify-content-center"

        div.appendChild(onayla)
        document.querySelector(".card").appendChild(div)
    } else if (litreİnput.value == 0) {
        onayla.className = "btn btn-danger col-12"
        onayla.textContent = "Lütfen 0'dan büyük bir sayı giriniz !"
        div.className = "card-body d-flex justify-content-center"

        div.appendChild(onayla)
        document.querySelector(".card").appendChild(div)
        litreİnput.value = ""
    } else {
        div.remove()
        onayla.remove()
    }
}
function geriDön() {
    tuşlarıKaldır()
    div.remove()
    onayla.remove()
    yakıtTipi.className = "border border-dark py-1 rounded bg-warning text-center col-12"
    yakıtTipi.textContent = "Yakıt tipi seçiniz :"
    tuşlarıGetir()
    litreİnput.value = ""
}
function bitir() {
    if(litreİnput.value!==""){
        let fiyat = seçim * litreİnput.value
        if (fiyat <= bakiye) {
            bakiye = Math.floor(bakiye-fiyat)
            onayla.remove()
            const dön = document.createElement("spin")
            dön.className = "spinner-border text-success"
            div.appendChild(dön)
            tuşlarıKaldır()
            yakıtTipi.className = "border border-dark py-1 rounded bg-success text-center col-12 text-white"
            yakıtTipi.textContent = "İşlem başarılı lütfen bekleyiniz."
            setTimeout(() => {
                dön.remove()
                div.remove()
                yakıtTipi.className = "border border-dark py-1 rounded bg-warning text-center col-12"
                yakıtTipi.textContent = "Yakıt tipi seçiniz :"
                tuşlarıGetir()
                litreİnput.value = ""
            }, 2000);
        } else {
            litreİnput.value = ""
            onayla.className = "btn btn-danger col-12"
            onayla.textContent = "Bakiye yetersiz !"
            div.className = "card-body d-flex justify-content-center"
    
            div.appendChild(onayla)
            document.querySelector(".card").appendChild(div)
        }
    }
}
