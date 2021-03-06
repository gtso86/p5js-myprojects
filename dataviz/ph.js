
function phrectangle(height,xpos,type) {
    this.h = height;
    this.x = xpos;
    
    this.seed = random(10,1000);
    
    this.show = function(){
        if(mouseY<=cnv.height&&mouseY>=0){
            noiseDetail(1, 0.5);
            noiseSeed(this.seed);
            smooth();
            
            let H = this.h*constrain(map(mouseX-this.x+0.75*mouseWidth,0,mouseWidth,0,1),0,1);
            let activation = constrain(map(mouseX-this.x+0.75*mouseWidth,0,mouseWidth,0,1),0,1);
            
            noStroke();
            fill(245);
            strokeWeight(1.0);
            
            let h2 = 100;
            
            push();
            translate(this.x,cnv.height-1.2*h2*activation);
            let val = map(this.h,100,300,0.1,0.9);
            rect(-10,0,20,h2);
            colorMode(HSB);
            let col = color(floor(val*255*0.85),200,200);
            fill(col);
            noStroke();
            rect(-10,0.6*h2,20,0.3*h2);
            stroke(20,100);
            noFill();
            rect(-10,0,20,h2);
            pop();
            
        }
    }
}