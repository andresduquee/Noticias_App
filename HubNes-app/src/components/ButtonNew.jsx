import { Icon } from "@iconify/react";

export const ButtonNew = (linkNoticia) => {
    return (
        <a href={linkNoticia}><button type="button" className="btn btn-warning btn-floating" data-mdb-ripple-init>
            Ver noticia
            <Icon icon="mingcute:external-link-line" width="24" height="24" />
        </button></a>
        
    )
}