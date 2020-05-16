 
Tsend_=Tsend;
reqlikes=100;
Tsend=function(){if(getuser(myid).rep<reqlikes){alert('حياكم في شات دمعه للجوال لتستطيع الكتابة يتطلب منك الحصول على 100 لايك '+reqlikes+' برعاية محمد الدمشقي'); return;}else{Tsend_();}}

sendpic_=sendpic;
reqlikes=100;
sendpic=function(){if(getuser(myid).rep<reqlikes){alert('حياكم في شات دمعه للجوال لتستطيع الكتابة يتطلب منك الحصول على 100 لايك'+reqlikes+' برعاية محمد الدمشقي'); return;}else{sendpic_();}}

setprofile_=setprofile;
reqlikes=100;
setprofile=function(){if(getuser(myid).rep<reqlikes){alert (' حياكم في شات دمعه للجوال لتستطيع الكتابة يتطلب منك الحصول على 100 لايك'+reqlikes+' برعاية محمد الدمشقي '); return;}else{setprofile_();}}


$("div#tlogins input").attr("maxlength",8),$("textarea#tbox.fl.corner.tbox.filw").attr("maxlength",1000);


