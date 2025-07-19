const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click",(e)=>{
    coupon.select
    coupon.setSelectionRange(0,9999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent = "คัดลอกคูปองเเล้ว!!!!"
    btn.style.backgroundColor = "#4CAF50";

    setTimeout(()=>{
        btn.textContent = "คัดดลอก"
        btn.style.backgroundColor = "rgb(207, 12, 152)";
    },2000)
})