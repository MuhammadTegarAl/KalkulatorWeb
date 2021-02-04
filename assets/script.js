const hasil =document.getElementById('hasil')
const btn1 =document.getElementById('btn1')
const btn2 =document.getElementById("btn2")
const btn3 =document.getElementById("btn3")
const btn4 =document.getElementById("btn4")
const btn5 =document.getElementById("btn5")
const btn6 =document.getElementById("btn6")
const btn7 =document.getElementById("btn7")
const btn8 =document.getElementById("btn8")
const btn9 =document.getElementById("btn9")
const btn0 =document.getElementById("btn0")
const btntambah =document.getElementById("btntambah")
const btnkurangi =document.getElementById("btnkurangi")
const btnkali =document.getElementById("btnkali")
const btnbagi =document.getElementById("btnbagi")
const btnhasil =document.getElementById("btnhasil")
const btnclear =document.getElementById("btnclear")

hasil.value=0
function proses(val){
    if(hasil.value==0||hasil.value==9)
      hasil.value=''
    hasil.value+=val
}
function hitung(hasilPerhitungan){
  return eval(hasilPerhitungan)
}
btnclear.addEventListener('click',function(e){
    e.preventDefault()
    hasil.value=0
})
btn1.addEventListener('click',function(e){
  e.preventDefault()
  proses(1)
}) 
btn2.addEventListener('click',function(e){
  e.preventDefault()
  proses(2)
})
btn3.addEventListener('click',function(e){
  e.preventDefault()
  proses(3)
})
btn4.addEventListener('click',function(e){
  e.preventDefault()
  proses(4)
})
btn5.addEventListener('click',function(e){
  e.preventDefault()
  proses(5)
})
btn6.addEventListener('click',function(e){
  e.preventDefault()
  proses(6)
})
btn7.addEventListener('click',function(e){
  e.preventDefault()
  proses(7)
})
btn8.addEventListener('click',function(e){
  e.preventDefault()
  proses(8)
})
btn9.addEventListener('click',function(e){
  e.preventDefault()
  proses(9)
})
btn0.addEventListener('click',function(e){
  e.preventDefault()
  proses(0)
})
btnkali.addEventListener('click',function(e){
  e.preventDefault()
  hasil.value+='*'
})
btntambah.addEventListener('click',function(e){
  e.preventDefault()
  hasil.value+='+'
})
btnkurangi.addEventListener('click',function(e){
  e.preventDefault()
  hasil.value+='-'
})
btnbagi.addEventListener('click',function(e){
  e.preventDefault()
  hasil.value+='/'
})
btnhasil.addEventListener('click',function(e){
  e.preventDefault()
  hasil.value=hitung(hasil.value)
})