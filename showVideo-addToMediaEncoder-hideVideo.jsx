/*
    My project is organized by type so my compsitions are at the top
    Image link: https://i.imgur.com/ERrWN9r.png (1395x769 ~160kb)
*/
var compItem = app.project.item(1);

if(compItem.name === 'speed40'){
    /*
        I used testCnt to debug the script with a smaller sample set
        The for loop currently has the layerCnt variable to hit all layers
    */
    var testCnt = 9;
    var layerCnt = compItem.numLayers;
    for( var q = 1; q <= layerCnt; q++){

        /*
            My project has 100+ mov files each on their own layer
            I check to see if the layer is the correct type
            Image link: https://i.imgur.com/95llnh5.png (1056x777 ~542kb)
        */
        if(compItem.layer(q) instanceof AVLayer){
            // If it is enable the layer
            compItem.layer(q).enabled = true;
            // Add the composition to Media Encoder
            app.executeCommand(3800);
            // disable the layer
            compItem.layer(q).enabled = false;
        }
    }
}