console.log("PÁGINA FEITA PELO MAIOR PROGRAMDOR DE TODOS OS TEMPOS, IAN FRACALOSSI")

var listaFilmes = [
    "https://s2.glbimg.com/HtKsPZuC6NdgEKFv48TVRyJ2SV4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/4/z/AqfvaPQfmR39ON8WQ31g/eas-fifa22-gen4-se-crop-1080x1350.png",
    "https://t.ctcdn.com.br/rfPvQZQ0OVXD_vFr89mna408to0=/660x0/smart/i203631.jpeg", 
    "https://cdn.europosters.eu/image/750/posters/coco-guitar-i56184.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/90/98/38/20123472.jpg",
    "https://uauposters.com.br/media/catalog/product/cache/1/image/333x500/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131197-uau-posters-filmes-animacao-spider-man-into-spiderverse-homem-aranha-no-aranhaverso.jpg",
    "https://ae01.alicdn.com/kf/HTB1eUeOSpXXXXaEXVXXq6xXFXXXt/Frete-gr-tis-24x31-polegadas-Rick-E-Morty-Poster-HD-Decora-o-HOME-DA-PAREDE-Personalizado.jpg_Q90.jpg_.webp",
    "https://mir-s3-cdn-cf.behance.net/projects/original/2bd106105022145.Y3JvcCwxMDgwLDg0NCwwLDE3MQ.png",
    "https://i.pinimg.com/originals/45/c8/a1/45c8a13fb34846b7e78eecd8bd0a306c.jpg",
    "https://static.displate.com/280x392/displate/2020-04-28/1f780582fdd1748f5c2e855cd9130227_79e0c0b8eab6b3b3468534963b8ea455.jpg",
    "https://pbs.twimg.com/media/E062R0JXsAEZ87G.jpg:large",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f3f01795384827.5e963d87159f3.jpg",
    "https://images.zeald.com/ic/elvoitdigital/3629066962/JORDAN1%20WEBSITE.1.png",
    "https://universoreverso.com.br/wp-content/uploads/2021/04/invincible-poster.jpg",
    "https://br.web.img3.acsta.net/pictures/14/02/04/13/20/128334.jpg",
    "https://m.media-amazon.com/images/I/81eEHlCkLsL._AC_SL1500_.jpg",

    //respectivamente: FIFA, ULTIMATO, COCO, OS INCRIVEIS, ARANHAVERSO, Rick and Morty, Flamengo, B99, Neymar , Casimiro, Desimpedidos, Jordan, invincible, the office, the modern family
]

var listaLinks = [
    "https://www.google.com/search?q=fifa+22&sxsrf=AOaemvKLN_Jpmwg12_Zkc0mOchVJZrvgFw%3A1632401928953&ei=CHpMYffXOZmv5OUP--OHsAc&oq=fifa+22&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyCwguEIAEELEDEIMBMgoIABCxAxCDARBDMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCAgAEIAEELEDMggIABCxAxCDATIECAAQQzILCAAQgAQQsQMQgwEyBQgAEIAEOgcIABBHELADOgcILhCwAxBDOggIABCABBCwA0oFCDwSATJKBAhBGABQuCJY9y5gy1VoAnACeACAAZEBiAGPApIBAzAuMpgBAKABAcgBCsABAQ&sclient=gws-wiz&ved=0ahUKEwj3--uIk5XzAhWZF7kGHfvxAXYQ4dUDCA4&uact=5",
    "https://www.google.com/search?gs_ssp=eJzj4tbP1TcwNDJLssguM2D0Ei7LzEtPTMkvSi1WKM0pycxNLMkHALNdC3Q&q=vingadores+ultimato&oq=vingadores+&aqs=chrome.1.69i57j46i433i512l2j46i512j46i433i512j0i512l2j69i61.2895j0j7&sourceid=chrome&ie=UTF-8",
    "https://www.google.com/search?q=viva+a+vida+%C3%A9+uma+festa&sxsrf=AOaemvIoch3GLGFPum8kJmQ61S2OOuBFMg%3A1632348695521&ei=F6pLYfmDH8mp1sQP8vackAk&gs_ssp=eJzj4tVP1zc0TDYuMDWoKIw3YPSSKMssS1RIVCjLTElUOLxSoTQ3USEttbgkEQAICQ2i&oq=viva&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCC4QQxCTAjIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIFCC4QgAQyCAguELEDEIMBMgUIABCABDIICC4QgAQQsQMyCAgAEIAEELEDMgUIABCABDoKCC4Q6gIQJxCTAjoHCCMQ6gIQJzoHCC4QJxCTAjoECCMQJzoECC4QQzoECAAQQzoLCAAQgAQQsQMQgwE6DgguEIAEELEDEMcBEKMCOg0ILhCxAxDHARCjAhBDOg4ILhCABBCxAxDHARDRA0oECEEYAFDwkQFYhpkBYIakAWgBcAJ4AIABngGIAbMEkgEDMC40mAEAoAEBsAEKwAEB&sclient=gws-wiz",
    "https://www.google.com/search?q=os+incriveis&sxsrf=AOaemvImfrmnjFxZHdJtuAYK8vg-GYJwpA%3A1632348717916&ei=LapLYY7sNsTf1sQPn6Wd-AU&gs_ssp=eJzj4tTP1TcwKsyNTzNg9OLJL1bIzEsuyixLzSwGAGGrCDk&oq=os+incriveis&gs_lcp=Cgdnd3Mtd2l6EAEYADILCC4QgAQQsQMQkwIyCAgAEIAEELEDMgQILhBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUILhCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCC4Q6gIQJxCTAjoHCC4Q6gIQJzoHCCMQ6gIQJzoGCCMQJxATOgQIIxAnOhEILhCABBCxAxCDARDHARDRAzoECAAQQzoICC4QgAQQsQM6CAguELEDEIMBOgoILhCxAxBDEJMCOgcILhCxAxBDSgQIQRgAUOF0WLCMAWDAmQFoAXACeACAAZ0BiAHyDJIBBDAuMTKYAQCgAQGwAQrAAQE&sclient=gws-wiz",
    "https://www.google.com/search?q=spider+man+into+the+spider+verse&sxsrf=AOaemvIWsOFI5-oSaxYDiv5zkxmGS81kZw%3A1632348738724&ei=QqpLYdbIK7DS1sQPypCG2Ac&gs_ssp=eJzj4tVP1zc0TDevSqswSTI1YPRSKC7ITEktUshNzFPIzCvJVyjJSIWJlaUWFacCAIYDEKU&oq=spider&gs_lcp=Cgdnd3Mtd2l6EAEYCDILCC4QgAQQsQMQkwIyCwguEIAEELEDEIMBMggIABCABBCxAzIICC4QgAQQsQMyCAguEIAEELEDMgUILhCABDIICC4QgAQQsQMyBQgAEIAEMgUILhCABDIICC4QgAQQsQM6BwgAEEcQsAM6CggAELEDELADEEM6CgguEMgDELADEEM6BwguECcQkwI6CgguEOoCECcQkwI6BwguEOoCECc6BwgjEOoCECc6BAgjECc6BAguECc6BAgAEEM6BAguEEM6DgguEIAEELEDEMcBENEDOgsILhCxAxDHARCjAkoFCDwSATFKBAhBGABQpnpYrJEBYIy2AWgCcAJ4BIABqQGIAe8MkgEEMC4xMpgBAKABAbABCsgBD8ABAQ&sclient=gws-wiz",
    "https://www.google.com/search?q=rick+and+morty&biw=2133&bih=1076&sxsrf=AOaemvLCWrLR-s_H_NDZP37n8yTVdjkL2w%3A1632348905106&ei=6apLYerlBevS1sQP_c666A8&gs_ssp=eJzj4tLP1TeoMiswMskyYPTiK8pMzlZIzEtRyM0vKqkEAHZRCOA&oq=rick+&gs_lcp=Cgdnd3Mtd2l6EAEYATIECAAQQzIHCC4QsQMQQzIHCAAQsQMQQzIECAAQQzIICAAQgAQQsQMyCgguELEDEIMBEEMyBAgAEEMyBwguELEDEEMyBAgAEEMyBwguELEDEEM6CgguEOoCECcQkwI6BwguEOoCECc6BwgjEOoCECc6BAgjECc6BAguEEM6BQgAEIAEOgsIABCABBCxAxCDAToHCC4QQxCTAjoFCC4QgAQ6DQguELEDEIMBEEMQkwI6DQguELEDEMcBEKMCEENKBAhBGABQmlFY515g12ZoAXACeACAAcMBiAHtBZIBAzAuNZgBAKABAbABCsABAQ&sclient=gws-wiz",
    "https://www.google.com/search?q=flamengo&biw=2133&bih=1076&sxsrf=AOaemvLgw2UNCBMoeQIQZ4nWikve6po3sQ%3A1632348887578&ei=16pLYZnPIsXM1sQPi-SEuAI&gs_ssp=eJzj4tTP1TcwtMwpqTRg9OJIy0nMTc1LzwcAQr4Gng&oq=flam&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCC4QJxCTAjIECCMQJzIECCMQJzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCxAxCDATIECAAQQzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDoKCC4Q6gIQJxCTAjoHCCMQ6gIQJzoHCC4Q6gIQJzoLCC4QgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOggILhCABBCxAzoECC4QJzoECC4QQ0oECEEYAFCEcVizdmCTgAFoAXACeACAAb4CiAHtB5IBBzAuMS4xLjKYAQCgAQGwAQrAAQE&sclient=gws-wiz",
    "https://www.google.com/search?q=brooklyn+99&biw=2133&bih=1076&sxsrf=AOaemvL95pxMLVOGpxHd6sBJLwcBFvZlTg%3A1632348850068&ei=sqpLYcijA_nf1sQPo4mnqAM&gs_ssp=eJzj4tLP1TcoMzGJN6syYPTiTirKz8_OqcxTsLQEAF6VB4U&oq=brojl&gs_lcp=Cgdnd3Mtd2l6EAEYAjIKCC4QsQMQQxCTAjIHCC4QsQMQQzIKCC4QsQMQgwEQQzIHCAAQgAQQCjIHCC4QsQMQQzIECAAQCjIKCAAQsQMQgwEQCjIHCC4QsQMQCjIECAAQCjIKCAAQsQMQgwEQCjoHCCMQ6gIQJzoHCC4Q6gIQJzoECCMQJzoECC4QQzoICC4QgAQQsQM6CwguEIAEELEDEIMBOgUILhCABDoHCC4QJxCTAjoHCC4QQxCTAjoECAAQQzoICAAQgAQQsQM6CgguELEDEAoQkwI6CAgAELEDEIMBOgQILhAKSgQIQRgAULLtAVjghwJgkJsCaAFwAngAgAGrAYgBgwaSAQMwLjWYAQCgAQGwAQrAAQE&sclient=gws-wiz",
    "https://www.google.com/search?q=neymar&biw=2133&bih=1076&sxsrf=AOaemvLmbaEbzOI4kjR9rJtIr3ZabDk4fQ%3A1632348816308&ei=kKpLYcyPEvHN1sQPnde62Ak&oq=neymar&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBwguELEDEEMyBggAEAoQQzIICAAQgAQQsQMyBggAEAoQQzIICC4QgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyBQguEIAEOgcIIxDqAhAnOgcILhDqAhAnOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6CwguEIAEELEDEIMBOg4ILhCABBCxAxDHARCjAjoHCCMQsQIQJzoHCAAQsQMQCjoHCC4QsQMQCjoECC4QCkoFCDwSATFKBAhBGABQi-cBWKn7AWD5_gFoAnACeAGAAb8BiAGLCpIBAzAuOZgBAKABAbABCsABAQ&sclient=gws-wiz&ved=0ahUKEwjMl-GazZPzAhXxppUCHZ2rDpsQ4dUDCA8&uact=5",
    "https://www.google.com/search?sxsrf=AOaemvJvfRJMM9DiqY-9_0-WJnLEhJEhqQ:1632348811976&q=casimiro&spell=1&sa=X&ved=2ahUKEwj209iYzZPzAhWlqJUCHYm9Bq0QBSgAegQIARA1&biw=2133&bih=1076&dpr=0.9",
    "https://www.google.com/search?q=desimpedidos&sxsrf=AOaemvIqQBWk9-d5M2wZrYIcDsgxcO3mBA%3A1632407053844&ei=DY5MYe_pMrXT1sQPg_690AM&oq=desimpedidos&gs_lcp=Cgdnd3Mtd2l6EAEYATIECCMQJzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ6gIQJzoHCC4Q6gIQJzoGCCMQJxATOgQIABBDOgsILhCABBDHARCjAjoOCC4QgAQQsQMQxwEQ0QM6BAguEEM6BQgAELEDOgcIABCABBAKSgQIQRgAUL7mIFi89SBg_IUhaAFwAngAgAGXAYgBhgySAQQwLjEymAEAoAEBsAEKwAEB&sclient=gws-wiz",
    "https://www.google.com/search?q=jordan+1&sxsrf=AOaemvLtsSZATlVGtvP5Ha4EnaKt5ieESg%3A1632407596848&ei=LJBMYYSMM7G95OUP4M-00A4&oq=jordan&gs_lcp=Cgdnd3Mtd2l6EAEYBDIECCMQJzIECCMQJzIICAAQgAQQsQMyCAgAEIAEELEDMgUIABCABDIICAAQgAQQsQMyCAgAEIAEELEDMgUIABCABDIICAAQgAQQsQMyCAgAEIAEELEDOgcIIxDqAhAnOgcILhDqAhAnOgQILhAnOgsIABCABBCxAxCDAToLCC4QgAQQsQMQgwE6CAgAELEDEIMBOgcILhAnEJMCOgQIABBDOgoIABCxAxCDARBDOgQILhBDOgUILhCABDoICC4QgAQQsQM6CwgAELEDEIMBEMkDSgQIQRgAUPF5WNeGAWCLmwFoAXACeACAAaoBiAG1BpIBAzAuNpgBAKABAbABCsABAQ&sclient=gws-wiz",
    "https://www.google.com/search?q=invincible&sxsrf=AOaemvJkQaM-15jFsnt396AXyuR4B3u3Zw%3A1632407617618&ei=QZBMYeiUJYSq5OUPoo2taA&gs_ssp=eJzj4tVP1zc0TDcoT8-oKkk3YPTiyswry8xLzkzKSQUAd74JGQ&oq=invin&gs_lcp=Cgdnd3Mtd2l6EAEYADIKCC4QsQMQQxCTAjIECAAQQzIFCAAQgAQyBAgAEEMyCwguEIAEEMcBEK8BMgQILhBDMgQILhBDMggIABCABBCxAzIFCAAQgAQyBAguEEM6BwgjEOoCECc6BwguEOoCECc6BAgjECc6BggjECcQEzoFCC4QgAQ6DgguEIAEELEDEMcBEKMCOg4ILhCABBCxAxDHARDRAzoICC4QgAQQsQM6BwgAELEDEEM6CwgAEIAEELEDEIMBOgcILhCxAxBDSgQIQRgAUNp1WMeDAWCsjgFoAXACeACAAbQBiAHDBZIBAzAuNZgBAKABAbABCsABAQ&sclient=gws-wiz",
    "https://www.google.com/search?q=the+office&sxsrf=AOaemvJaNJH7o_6qBBuKdFQt7rF8FRFZbg%3A1632407637095&ei=VZBMYeWaBYKP0AbotYKgBQ&oq=the+office&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEJMCMggILhCABBCxAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIICAAQgAQQsQMyCAgAEIAEELEDOgcIIxDqAhAnOgcILhDqAhAnOgQIIxAnOgQIABBDOgQILhBDOgsILhCABBDHARCvAToHCC4QJxCTAjoECC4QJzoHCC4QsQMQQzoFCC4QgAQ6CgguELEDEAoQkwI6BwguELEDEAo6BwgAELEDEAo6CggAELEDEIMBEAo6BAgAEApKBQg8EgExSgQIQRgAUPeyAViAxgFgycsBaANwAngAgAGyAYgBqgySAQQwLjExmAEAoAEBsAEKwAEB&sclient=gws-wiz&ved=0ahUKEwilmdmqqJXzAhWCB9QKHeiaAFQQ4dUDCA4&uact=5",
    "https://www.google.com/search?q=the+modern+family&sxsrf=AOaemvLabLEbf6Lsy4Q-K8wFxO6-t2ATLA%3A1632407664455&ei=cJBMYbaWG5665OUP-cOckAk&oq=the+modern+family&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEJMCMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIIxDqAhAnOgcILhDqAhAnOgQIIxAnOgQILhBDOgQIABBDOhEILhCABBCxAxCDARDHARDRAzoLCC4QgAQQxwEQrwE6BAguECc6CAguEIAEELEDOgsILhCABBCxAxCDAToLCAAQgAQQsQMQgwE6BQguEIAEOgcILhAnEJMCOgoILhCxAxCDARBDOgcILhCxAxBDOg0ILhCxAxCDARBDEJMCOggILhCxAxCDAUoECEEYAFCopgFYprsBYOfEAWgCcAJ4AIAB8gGIAd4SkgEGMC4xNi4xmAEAoAEBsAEKwAEB&sclient=gws-wiz&ved=0ahUKEwi2jt-3qJXzAhUeHbkGHfkhB5IQ4dUDCA4&uact=5",
    
]
//respectivamente: FIFA, ULTIMATO, COCO, OS INCRIVEIS, ARANHAVERSO, Rick and Morty, Flamengo, B99, Neymar , Casimiro , Desimpedidos, Jordan, invincible, the office, the modern family

var listaNomes = [
    "FIFA", "VINGADORES ULTIMATO" , "VIVA - A VIDA É UMA FESTA" , "OS INCRÍVEIS" , "HOMEM ARANHA NO ARANHAVERSO" , "RICK AND MORTY" , "MENGÃO" , "B99" , "ADULTO NEY" , "CASIMIRO" , "Desimpedidos", "Jordan", "invincible", "the office", "the modern family",
]

var secaoPosters = document.getElementById("posters")

var inicio = 0
var fim = 5
for (var i = inicio; i < fim; i++){
    secaoPosters.innerHTML = "<a href=" + listaLinks[i] + "><img src= " + listaFilmes[i] +  " class= gostos  >" + secaoPosters.innerHTML + "</a>"
    }
        
function mais(){
    document.getElementById("posters").innerHTML = ""
    if(fim < 15){inicio = inicio + 5
        fim = fim + 5}
    for (var i = inicio; i < fim; i++) {
        secaoPosters.innerHTML = "<a href=" + listaLinks[i] + "><img src= " + listaFilmes[i] +  " class= gostos  >" + secaoPosters.innerHTML + "</a>"
        }
   
}

function voltar(){
    document.getElementById("posters").innerHTML = ""
    if (inicio > 0){inicio = inicio - 5
        fim = fim - 5}
    
    for (var i = inicio; i < fim ; i++){
        secaoPosters.innerHTML = "<a href=" + listaLinks[i] + "><img src= " + listaFilmes[i] +  " class= gostos  >" + secaoPosters.innerHTML + "</a>"
        }
    
}

