/**//////////
// SUNCALC
/**//////////
Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}
var datetime= new Date()./*FOR*/addHours(0*24)/*DEBUGGING*/;
function isPositive(num) {
  if (num > 0) { return 1; /*waning*/}
  else if (num < 0) { return -1; /*waxing*/};
};
//.toFixed(2)
var getMoonIllumination = SunCalc.getMoonIllumination(datetime);
var moonFraction        = getMoonIllumination.fraction;
var moonPhase           = getMoonIllumination.phase;
var moonAngle           = getMoonIllumination.angle;
var moonRotate          = moonAngle;
isWaxing            = isPositive(moonAngle);
moonSize            = 25;
zIndex              = 10;
shadowWidth         = moonSize;
shadowHeight        = moonSize;
shadowRadius        = Math.abs(50-(moonFraction*100));
lightMove           = (100-(moonFraction*100))*isWaxing;
shadowMove          = ((moonFraction*100))*isWaxing;
/**//////////
// CSS
/**//////////
if (moonPhase > 0 && moonPhase < 0.25) {
  $("#moon").css({"background":"linear-gradient(to bottom,rgba(210,220,230,1) 25%,rgba(200,210,250,1) 100%)"});
  console.log("New Moon // Waxing Crescent"+"\n");
} else if (moonPhase > 0.25 && moonPhase < 0.5) {
  $("#moon").css({"background":"linear-gradient(to bottom,rgba(10,20,30,1) 25%,rgba(20,40,60,1) 100%)"});
  console.log("First Quarter // Waxing Gibbous"+"\n");
} else if (moonPhase > 0.5 && moonPhase < 0.75) {
  $("#moon").css({"background":"linear-gradient(to bottom,rgba(10,20,30,1) 25%,rgba(20,40,60,1) 100%)"});
  console.log("Full Moon // Waning Gibbous"+"\n");
} else if (moonPhase > 0.75 && moonPhase < 1) {
  $("#moon").css({"background":"linear-gradient(to bottom,rgba(210,220,230,1) 25%,rgba(200,210,250,1) 100%)"});
  console.log("Last Quarter // Waning Crescent"+"\n");
};
$("#moon").css({
  "position":"absolute",
  "overflow":"hidden",
  "margin":"0 auto",
  "z-index":zIndex,
  "border-radius":"50%",
  "width":moonSize+"vmin",
  "height":moonSize+"vmin",
  "top":"calc(50% - "+moonSize/2+"vmin)",
  "left":"calc(50% - "+moonSize/2+"vmin)",
  "bottom":"calc(50% - "+moonSize/2+"vmin)",
  "right":"calc(50% - "+moonSize/2+"vmin)",
  "mix-blend-mode":"lighten",
});
$(".light").css({
  "position":"absolute",
  "overflow":"hidden",
  "margin":"0 auto",
  "z-index":zIndex+1,
  "border-radius":shadowRadius+"%/50%",
  "width":shadowWidth+"vmin",
  "height":shadowHeight+"vmin",
  "top":"calc(50% - "+shadowHeight/2+"vmin)",
  "left":"calc( (50% - "+shadowWidth/2+"vmin) - "+lightMove+"%)",
  "background":"linear-gradient(to bottom,rgba(210,220,230,1) 25%,rgba(200,210,250,1) 100%)",
  "box-shadow": "inset "+0+"vmin "+0+"vmin "+(moonSize*.25)+"vmin "+(moonSize*.01)+"vmin rgba(75,50,100,.5)",
  "mix-blend-mode":"lighten"
});
$(".shadow").css({
  "position":"absolute",
  "overflow":"hidden",
  "margin":"0 auto",
  "z-index":zIndex+2,
  "border-radius":shadowRadius+"%/50%",
  "width":shadowWidth+"vmin",
  "height":shadowHeight+"vmin",
  "top":"calc(50% - "+shadowHeight/2+"vmin)",
  "right":"calc( (50% - "+shadowWidth/2+"vmin) - "+shadowMove+"%)",
  "background":"linear-gradient(to bottom,rgba(10,20,30,1) 25%,rgba(20,40,60,1) 100%)"
});
/**//////////
// CONSOLE
/**//////////
console.log(
  "datetime:"+datetime+"\n"+
  "moonFraction:"+moonFraction+"\n"+
  "moonPhase:"+moonPhase+"\n"+
  "moonAngle:"+moonAngle+"\n"+
  "moonRotate:"+moonRotate+"\n"+
  "isWaxing:"+isWaxing+"\n"+
  "moonSize:"+moonSize+"\n"+
  "shadowWidth:"+shadowWidth+"\n"+
  "shadowHeight:"+shadowHeight+"\n"+
  "lightMove:"+lightMove+"\n"+
  "shadowMove:"+shadowMove+"\n"+
  "shadowRadius:"+shadowRadius+"\n"
);