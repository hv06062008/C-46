class Form{

    constructor(){
     this.name = createInput('Name');
     this.title = createElement('h2');
     this.button = createButton('Play');
     this.greeting = createElement('h2');
     this.reset = createButton('Reset');
     this.go= createButton('Go');
     this.message = createElement("Choose anyone of the Epic Mahabharta or Ramayana")
    }
    hide(){
        this.name.hide();
        this.title.hide();
        this.button.hide();
        this.greeting.hide();
        this.go.hide();

    }

    display(){
        this.title.html("The Two Epics");
        this.title.position(displayWidth/2-220,0,400, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'brown');

        this.name.position(displayWidth/2-50,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
            this.name.hide();
            this.button.hide();
            var name = this.name.value();

            
            this.greeting.html("Welcome to the ancient period " + name);
            this.greeting.position(displayWidth/2-70,displayHeight/2-50);
            this.greeting.style('color', 'yellow');
            this.greeting.style('font-size', '40px');

            
            this.go.position(1000,700);
            this.go.mousePressed(()=>{
                //this.greeting.hide();
                //this.message.position(400,200);

            

           
             });
            
           

        });

        

        
        
    }
}
