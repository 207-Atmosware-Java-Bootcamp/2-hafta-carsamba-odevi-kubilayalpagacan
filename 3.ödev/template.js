//ÖDEV 1
// s1-) Bu sayılardan en küçüğü nedir ?
// // s2-) Bu sayılardan en büyüğü nedir ?
// // s3-) Bu sayılardan en küçüğü karekökü nedir ?
// // s4-) Bu sayılardan en küçüğü karekökünün alt yuvarlıyalım nedir ?
// // s5-) Bu sayılardan en büyüğü mutlak nedir ?
// // s6-) Bu sayılardan en büyük alt taban en küçük üst taban şeklinde üstünü alalım

var number1=Number(prompt("İlk sayıyı giriniz"))
var number2=Number(prompt("İkinci sayıyı giriniz"))

document.write("Küçük Sayı: " + Math.min(number1,number2) + "<br>")
document.write("Büyük Sayı: " + Math.max(number1,number2) + "<br>")
document.write("Küçük sayı karekökü: "+ Math.sqrt(Math.min(number1,number2)) + "<br>")
document.write("Küçük sayının karekökünün alt değere yuvarlanması: "+ Math.floor(Math.sqrt(Math.min(number1,number2)))+ "<br>")
document.write("Büyük sayının mutlak değer hali: "+Math.abs(Math.max(number1,number2))+"<br>")
document.write("Büyük sayı alt, Küçük sayı üst taban: "+ Math.pow(Math.max(number1,number2),Math.min(number1,number2)))

//ÖDEV 2
// kullanıcı tarafından girilen bir kelimenin
//S-1) Kaç karakterlidir ?
//S-2) boşluklar alınarak Kaç karakterlidir ?
//S-3) bütün kelimeyi küçük harfle göstermek ?
//S-4) bütün kelimeyi büyük harfle göstermek ?
//S-5) ilk harf nedir  ?
//S-6) girdiğiniz kelime java ile başlıyor mu  ?
//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?


var text=String(prompt("Text giriniz..."))

document.write("Girilen text'in uzunluğu: "+ text.length + "<br>")
document.write("Boşluklar alarak textimiz: "+ text.split(' ').join('').length + "<br>")
document.write("Bütün kelimeler küçük olursa: " + text.toLowerCase() + "<br>")
document.write("Bütün kelimeleri büyük olursa: "+ text.toUpperCase() + "<br>")
document.write("Kelimenin ilk harfi: " + text.charAt(0)+"<br>")
document.write("Kelime Java ile başlıyor mu? " + text.startsWith("Java")+"<br>")
document.write("Sonuna ben js öğreniyorum yazdırınca: " +text.concat("-ben js öğreniyorum")+"<br>")
document.write("Kelimenin 0 ile 4 arasındaki indexi: " + text.substring(0,4)+"<br>")

var text2=String(prompt("sonuna eklemek istediğiniz kelimeyi giriniz"))
document.write("Girdiğiniz ilk kelime: " +text +"<br>"+ "Girdiğiniz ikinci kelime: "+ text2+"<br>")

document.write("Yazdığınız kelimenin eklenmiş hali: " +text.concat(" "+text2)+"<br>")

//ÖDEV 3
//1.adım: adınızı ve soyadınızı json objesine ekleyip
//2.adım: bu json objesini String'e çevirip
//3.adım: bu json objesini String'e çevirilmiş kısımdan substring fonksiyon metodu ile isim ve soyismini ayrıştır
//4.adım: adınızı ve soyasınız document.write ile ekranda gösterelim.
//ip uçu: JSON.stringfy  ve substring()

var nameSurname = {
    "name": 'Kubilay Alp',
    "surname": 'Ağacan',
}
var JsonToString = JSON.stringify(nameSurname)
document.write(JsonToString+"<br>")
var name=JsonToString.substring(9,20)
var surname=JsonToString.substring(33,39)
document.write("Adınız: "+name+"<br>"+ "Soyadınız: "+surname)