import { useParams } from "react-router-dom"
export default function Color(){
    const { color } = useParams()
    const style = {
        backgroundColor: color || "white",
        color: "white"
    }
    return(
        <div style={style}>
            <h1>{color}</h1>
        </div>
    )
}