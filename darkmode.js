//Hole Checkbox und Stylesheet

const checkbox =
document.getElementById("toggle-stylesheet")
const stylesheet =
document.getElementById("stylesheet")

//Abfrage ob die Box gecheckt ist
checkbox.addEventListener("change",() => 
    {if (checkbox.checked)
    {stylesheet.href = "style/style_dark.css";}

    else {stylesheet.href ="style/style_fancy.css"}

    }
)