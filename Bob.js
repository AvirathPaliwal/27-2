class Bob {
   constructor(x,y,radius){
       var position={
           isStatic:true,
            restitution : 1,
             friction : 0, 
             density : 0.8
       }
 this.body=Bodies.circle(x,y,radius/2,position);
  World.add(world,this.body);
  this.r=radius

   }  
display(){
    var pos=this.body.position
rectMode(CENTER);
fill("yellow");
rect(pos.x,pos.y,this.r);

}
}
