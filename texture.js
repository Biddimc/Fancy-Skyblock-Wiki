//Start Variable
let custom = "no"

//Button Event Listener
document.getElementById("TextureChanger").addEventListener("click",
    function() {
        if (custom === "no"){
            //ändere Bild
            document.getElementById("farming_talisman_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Ge%C3%A4ndert/farming_talisman.png";

            document.getElementById("farmer_orb_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Ge%C3%A4ndert/farmer_orb.png"


            custom ="yes";
        }
        else{
            document.getElementById("farming_talisman_pic").
            src ="https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Standard/SkyBlock_items_farming_talisman.png"

            document.getElementById("farmer_orb_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Standard/SkyBlock_items_farmer_orb.png"

            custom = "no"
        }
    }


)