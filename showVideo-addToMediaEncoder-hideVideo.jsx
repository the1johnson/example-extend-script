var compItem = app.project.item(1);
var testCnt = 9;
var layerCnt = compItem.numLayers;

if(compItem.name === 'speed40'){
    for( var q = 1; q < testCnt; q++){
        if(compItem.layer(q) instanceof AVLayer){
            compItem.layer(q).enabled = true;
            app.executeCommand(3800);
            compItem.layer(q).enabled = false;
        }
    }
}