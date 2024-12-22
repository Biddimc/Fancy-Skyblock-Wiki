//Start Variable
let custom = "no"

//Button Event Listener
document.getElementById("TextureChanger").addEventListener("click",
    function() {
        if (custom === "no"){
            //ändere Bild
            document.getElementById("f_t_pic").
            src = "";


            custom ="yes";
        }
        else{
            document.getElementById("f_t_pic").
            src ="https://wiki.hypixel.net/images/5/5a/SkyBlock_items_farming_talisman.png"

            custom = "no"
        }
    }


)