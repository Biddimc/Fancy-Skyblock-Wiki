//Start Variable
let custom = "no"

//Button Event Listener
document.getElementById("TextureChanger").addEventListener("click",
    function() {
        if (custom === "no"){
            //raw:
            //document.getElementById("").
            //src = ""

            //ändere Bild

            //Farming Talisman
            //Talismane ohne Familie
            document.getElementById("farming_talisman_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Ge%C3%A4ndert/farming_talisman.png";

            document.getElementById("farmer_orb_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Ge%C3%A4ndert/farmer_orb.png"

            //Minimg Talismane
            //Haste Familie
            document.getElementById("haste_ring_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Ge%C3%A4ndert/haste_ring.png"

            //Magie Talismane
            //Vaccine Familie
            document.getElementById("vaccine_talisman_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Ge%C3%A4ndert/vaccine_talisman.png"

            //Andere Talismane
            //Feather Familie
            document.getElementById("feather_talisman_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Ge%C3%A4ndert/feather_talisman.png"

            document.getElementById("feather_ring_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Ge%C3%A4ndert/feather_ring.png"

            document.getElementById("feather_artifact_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Ge%C3%A4ndert/feather_artifact.png"

            //Ohne Familie
            document.getElementById("night_vision_charm_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Ge%C3%A4ndert/night_vision_charm.png"


            custom ="yes";
        }
        else{
            //ändere Bild

            //Farming Talisman
            //Talismane ohne Familie
            document.getElementById("farming_talisman_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Standard/SkyBlock_items_farming_talisman.png"

            document.getElementById("farmer_orb_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Standard/SkyBlock_items_farmer_orb.png"

            //Minimg Talismane
            //Haste Familie
            document.getElementById("haste_ring_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Standard/SkyBlock_items_haste_ring.png"
            
            //Magie Talismane
            //Vaccine Familie
            document.getElementById("vaccine_talisman_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Standard/SkyBlock_items_vaccine_talisman.png"

            //Andere Talismane
            //Feather Familie
            document.getElementById("feather_talisman_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Standard/SkyBlock_items_feather_talisman.png"

            document.getElementById("feather_ring_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Standard/SkyBlock_items_feather_ring.png"

            document.getElementById("feather_artifact_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Standard/SkyBlock_items_feather_artifact.png"
            
            //Ohne Familie
            document.getElementById("night_vision_charm_pic").
            src = "https://raw.githubusercontent.com/Biddimc/Fancy-Skyblock-Wiki/refs/heads/main/textures/Artifakte/Standard/SkyBlock_items_night_vision_charm.png"


            custom = "no"
        }
    }


)