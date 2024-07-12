import { onNavigate } from "$app/navigation"

export function onHydrated() {
    console.log("\n" + "%c█▄█ ▀█▀ █▀▄ █▀▀ █▄▀ █▀█ Portfolio \n" +
        "█ █ ▄█▄ █▄▀ ██▄ █ █ █▄█ Site\n", "color: DodgerBlue font-weight: bold")
}