//Hole Checkbox und Stylesheet

const checkbox =
document.getElementById("toggle-stylesheet")
const stylesheet =
document.getElementById("stylesheet")

//Abfrage ob die Box gecheckt ist
checkbox.addEventListener("change",() => 
    {if (checkbox.checked)
    {stylesheet.href = "style_dark.css";}

    else {stylesheet.href ="style_fancy.css"}

    }
)