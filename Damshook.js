Tsend_=Tsend;

reqlikes=100;

Tsend=function(){if(getuser(myid).rep<reqlikes){alert('يتطلب منك الحصول على لايكات'+reqlikes+' برعاية محمد الدمشقي'); return;}else{Tsend_();}}

sendpic_=sendpic;

reqlikes=100;

sendpic=function(){if(getuser(myid).rep<reqlikes){alert('يتطلب منك الحصول على لايكات '+reqlikes+' برعاية محمد الدمشقي'); return;}else{sendpic_();}}

setprofile_=setprofile;

reqlikes=100;

setprofile=function(){if(getuser(myid).rep<reqlikes){alert('يتطلب منك الحصول على لايكات'+reqlikes+' برعاية محمد الدمشقي '); return;}else{setprofile_();}}

