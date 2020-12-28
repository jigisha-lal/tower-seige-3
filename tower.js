class Block{
    constructor(x,y,width,height){
        var option={
            'restitution':0.04,
            'friction':0.0,
            
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
       this.width=width
       this.height=height
       World.add(world,this.body)
       this.Visiblity=255;
    }

    score(){
      if(this.visiblity<0 && this.visiblity >-105){
          score++;
      }

    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed<3){
            var pos=this.body.position
            var angle=this.body.angle
           push()
           translate(pos.x,pos.y)
           rotate(angle)
           rectMode(CENTER)
           strokeWeight(4)
           stroke("red")
           fill("yellow")
           rect(0,0,this.width,this.height)
           pop()
        }
        else{
          World.remove(world,this.body);
          push()
          this.Visiblity=this.Visiblity-5;
         tint(255,this.Visiblity);
         
         pop()
        }
      }
   }
   
    
