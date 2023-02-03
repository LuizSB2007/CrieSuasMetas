import { useState } from "react"
import styles from"./Form.module.css"

function Form({setMetas, metas}){
    const [valueText, setValueText] = useState('')
    const meta = [...metas, valueText, ]
    function handleChange(e){
        setValueText(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setMetas((prev)=>{
            const newMeta = [...prev]
            newMeta.push(valueText)
            return newMeta
        })  
        localStorage.setItem('metas2023', JSON.stringify(meta))
        setValueText('')
        window.location.reload()
    }

    return(
        <div className={styles.form_metas}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="metas">Adicione abaixo suas metas para 2023</label>
                <textarea id="metas" onChange={handleChange} value={valueText} />
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
}

export { Form }