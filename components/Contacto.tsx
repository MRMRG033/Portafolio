import React from "react";
import datos from "../contacto.json"
import Link from "next/link";

const Contacto = () =>{

    return(
        <div className="glass">
            {datos.map((item)=>{
                return <Link href={"https://github.com/MRMRG033?tab=repositories"} style={{textDecoration:"none", color:"white"}}>{item.item}</Link>
            })}
        </div>
    )
}
export default Contacto