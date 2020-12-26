var canvas = new fabric.Canvas("myCanvas");

block_img_width = 30;
block_img_height = 30;

player_x = 10;
player_y = 10;
var player_object = "";
var block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
             top:player_y,
             left:player_x
        });
        canvas.add(block_object);
    })
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '80' && e.shiftKey  ==  true){
        console.log("p and shift key is pressed together");
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(keyPressed == '77' && e.shiftKey  ==  true){
        console.log("m and shift key is pressed together");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(keyPressed  == '65'){
        new_image('ironman_face.png');
        console.log('a');
    }

    if(keyPressed  == '66'){
        new_image('spiderman_body.png');
        console.log('b');
    }
  
    if(keyPressed  == '67'){
        new_image('hulk_legs.png');
        console.log('c');
    }

    if(keyPressed  == '68'){
        new_image('captain_america_left_hand.png');
        console.log('d');
    }
    if(keyPressed  == '69'){
        new_image('thor_right_hand.png');
        console.log('e');
    }
     
    if(keyPressed  == '70'){
        new_image('ironman_body.png');
        console.log('f');
    }
    if(keyPressed  == '71'){
        new_image('ironman_left_hand.png');
        console.log('g');
    }
    if(keyPressed  == '72'){
        new_image('ironman_right_hand.png');
        console.log('h');
    }
    if(keyPressed  == '73'){
        new_image('ironman_legs.png');
        console.log('i');
    }
    if(keyPressed  == '74'){
        new_image('spiderman_right_hand.png');
        console.log('j');
    }
    if(keyPressed  == '75'){
        new_image('spiderman_left_hand.png');
        console.log('k');
    }
    if(keyPressed  == '76'){
        new_image('spiderman_legs.png');
        console.log('l');
    }
    if(keyPressed  == '85'){
        new_image('spiderman_face.png');
        console.log('u');
    }
    if(keyPressed  == '78'){
        new_image('hulk_face.png');
        console.log('n');
    }
    if(keyPressed  == '79'){
        new_image('hulk_left_hand.png');
        console.log('o');
    }
    if(keyPressed  == '84'){
        new_image('hulk_right_hand.png');
        console.log('t');
    }
    if(keyPressed  == '81'){
        new_image('hulkd_body.png');
        console.log('q');
    }
    if(keyPressed  == '82'){
        new_image('thor_face.png');
        console.log('r');
    }
    if(keyPressed  == '83'){
        new_image('thor_left_hand.png');
        console.log('s');
    }
    if(keyPressed == '38'){
        up();
        console.log('up');

    }
    if(keyPressed == '40'){
        down();
        console.log('down');
        
    }
    if(keyPressed == '37'){
        left();
        console.log('left');
        
    }
    if(keyPressed == '39'){
        right();
        console.log('right');
        
    }
}

function up(){
    if(player_y >= 0){
    player_y = player_y - block_img_height;
    console.log("block image height =" + block_img_height) ;
    console.log("When up arrow key pressed X = " + player_x + " ,Y = " + player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function down(){
    if(player_y <= 500){
    player_y = player_y + block_img_height;
    console.log("block image height =" + block_img_height) ;
    console.log("When down arrow key pressed X = " + player_x + " ,Y = " + player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function right(){
    if(player_x <= 700){
    player_x = player_x + block_img_width;
    console.log("block image width =" + block_img_width) ;
    console.log("When right arrow key pressed X = " + player_x + " ,Y = " + player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function left(){
    if(player_x >= 0){
    player_x = player_x - block_img_height;
    console.log("block image width =" + block_img_width) ;
    console.log("When left arrow key pressed X = " + player_x + " ,Y = " + player_y);
    canvas.remove(player_object);
    player_update();
    }
}