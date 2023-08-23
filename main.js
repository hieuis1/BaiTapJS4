
// bai 2
document.getElementById('bai2').addEventListener('click',function(){
    let soDien = +document.getElementById('soDien').value ;
    let sum;
    console.log(soDien)

    if(soDien > 0){
        if(soDien <= 50){    // 120 50 60
            sum = soDien * 500
        }
        if(soDien > 50 && soDien < 100){
            sum = (soDien - 50) * 650 + (50 * 500);
        }
        if(soDien >= 100 && soDien < 200){
            sum = (soDien - 100)* 850 + (50*500)+ (50*650)
        }
        if(soDien >= 200 & soDien < 350){
            sum =(soDien - 200)* 1100 + (50*500)+ (50*650) + (100*850)
        }
        if(soDien >= 350){
            sum =(soDien - 350)* 1300 + (50*500)+ (50*650) + (100*850)+ (200*1100)
        }

        console.log(sum)
        document.getElementById('result2').innerText =`Số điện của bạn hết : ${sum}đ`
    }
    else{
        document.getElementById('result2').innerText =`Vui lòng nhập số điện`
    }
    
    
})


//bai 1
document.getElementById('bai1').addEventListener('click',()=>{
    let diemChuan = +document.getElementById('diemChuan').value
    let mon1 = +document.getElementById('mon1').value
    let mon2 =+document.getElementById('mon2').value
    let mon3 =+document.getElementById('mon3').value
    let check = false
    let check2 = false
    let check3 = false

    function checks(a,b,c){
        if(a ==0 || b == 0 || c == 0){
            document.getElementById("result1").innerText = `Bạn đã trượt vì có điểm 0`
            check = false
        }
        else{  
            check = true
        }
    }
    console.log(mon1,mon2,mon3)

  checks(mon1,mon2,mon3)

    let khuVuc = document.getElementById('khuVuc').value.toUpperCase();
    let doiTuong = +document.getElementById('doiTuong').value; 
    let diemCong1
    let diemCong2
 // kt khu vuc
if(check == true){
     switch(khuVuc){
        case 'A':
            diemCong1 = 2;
            check2 =true;
            break;
        case 'B':
            diemCong1 = 1;
            check2 =true;
            break;
        case 'C':
            diemCong1 = 0.5;
            check2 =true;
            break;
        case 'X':
            diemCong1 = 0;
            check2 =true;
            break;
        default:
            check2 = false
            break;
     }
     
     // kt doi tuong
        switch(doiTuong){
            case 1:
                diemCong2 = 2.5
                check3 =true;
                break;
            case 2:
                diemCong2 = 1.5
                check3 =true;
                break;
            case 3:
                diemCong2 = 1
                check3 =true;
                break;
            case 0:
                diemCong2 = 0
                check3 =true;
                break;
            default:
                check3 =true;
                break;
                

        }
    if(check2 == true && check3 == true){
        console.log(diemCong1,diemCong2)
        let sum1 = mon1 + mon2+ mon3 +diemCong1+ diemCong2
        
        
    
        if(sum1 >=diemChuan ){
        document.getElementById("result1").innerText = `Bạn đã trúng tuyển với số điểm ${sum1}`
     }
        else{
        document.getElementById("result1").innerText = `Bạn đã không trúng tuyển với số điểm ${sum1}`
     }
    }
    else{
        document.getElementById("result1").innerText = `Bạn đã nhập sai khu vực hoặc đối tượng ưu tiên`

    }
    
    
     
    
}
})


//bai 3

document.getElementById('bai3').addEventListener('click',function(){
    let name = document.getElementById('hoTen').value
    let thuNhap = +document.getElementById('thuNhap').value
    let people = +document.getElementById("soNguoi").value
    let persent = 0

    console.log(thuNhap,name,people)
    let thueChiu = thuNhap - 4 - (people * 1.6)
    console.log(thueChiu)

    if(thueChiu > 0){
        if(thueChiu <= 60){
            persent = 5
        }
        if(thueChiu > 60 && thuNhap <= 120){
            persent = 10
        }
        if(thueChiu > 120 && thuNhap <= 210){
            persent = 15
        }
        if(thueChiu > 210 && thuNhap <= 384){
            persent = 20
        }
        if(thueChiu > 384 && thuNhap <= 624){
            persent = 25
        }
        if(thueChiu > 624 && thuNhap <= 960){
            persent = 30
        }
        if(thueChiu > 960 ){
            persent = 35
        }
    }
    console.log(persent);

    let sum3 = (thueChiu * persent ) / 100
    console.log(sum3);
    document.getElementById('result3').innerText = `Số thuế phải trả của ông ${name} là ${sum3}`
    

})

