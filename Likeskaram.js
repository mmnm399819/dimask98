Tsend_=Tsend;
reqlikes=100;
Tsend=function(){if(getuser(myid).rep<reqlikes){alert('يتطلب منك الحصول على لايكات'+reqlikes+' برعاية محمد الدمشقي'); return;}else{Tsend_();}}

sendpic_=sendpic;
reqlikes=100;
sendpic=function(){if(getuser(myid).rep<reqlikes){alert('يتطلب منك الحصول على لايكات '+reqlikes+' برعاية محمد الدمشقي'); return;}else{sendpic_();}}

setprofile_=setprofile;
reqlikes=100;
setprofile=function(){if(getuser(myid).rep<reqlikes){alert('يتطلب منك الحصول على لايكات'+reqlikes+' برعاية محمد الدمشقي '); return;}else{setprofile_();}}
setTimeout (function (){  $("<div class='fr borderg' style='padding:2px;background-color:white;margin-right:4px;'>تعديل و تصميم: <a href='https://api.whatsapp.com/send?phone=905349315009&amp;text=&amp;source=&amp;data=/'>  محمد الدمشقي © 2020</a></div>").insertAfter($(".loginstat"));  },1000);
