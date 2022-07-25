var searchelement;
setInterval(()=>{
	searchelement = document.getElementById("textsearch").value;
},1);

function bing(){
    window.open("https://www.bing.com/search?q="+searchelement)
}

function google(){
    window.open("https://www.google.com/search?q="+searchelement)
}

function yandex(){
    window.open("https://yandex.com/search/?text="+searchelement)
}

function ask(){
    window.open("https://www.ask.com/web?q="+searchelement)
}

function aol(){
    window.open("https://search.aol.com/aol/search?q="+searchelement)
}

function duckduckgo(){
    window.open("https://duckduckgo.com/?q="+searchelement)
}

function goo(){
    window.open("https://search.goo.ne.jp/web.jsp?MT="+searchelement)
}

function lycos(){
    window.open("https://search.lycos.com/web/?q="+searchelement);
}

function daumkakao(){
    window.open("https://m.search.daum.net/search?nil_profile=btn&w=tot&DA=SBC&q="+searchelement);
}

function excite(){
    window.open("https://results.excite.com/serp?q="+searchelement)
}

function naver(){
    window.open("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query="+searchelement)
}

function ecosia(){
    window.open("https://www.ecosia.org/search?method=index&q="+searchelement)
}

function yahoo(){
    window.open("https://search.yahoo.com/search?q="+searchelement);
}

function exalead(){
    window.open("https://www.exalead.com/search/web/results/?q="+searchelement);
}

function walla(){
    window.open("https://search.walla.co.il/?q="+searchelement);
}

function webcrawler(){
    window.open("https://www.webcrawler.com/serp?q="+searchelement);
}
function metacrawler(){
    window.open("https://www.metacrawler.com/serp?q="+searchelement);
}
function egerin(){
    window.open("https://egerin.com/search/?type=Web&start=0&image_size=&image_color=&image_date=&load_more=&q="+searchelement);
}
function mojeek(){
    window.open("https://www.mojeek.com/search?q="+searchelement);
}
function leit(){
    window.open("http://leit.is/leita?utf8=%E2%9C%93&search="+searchelement);
}