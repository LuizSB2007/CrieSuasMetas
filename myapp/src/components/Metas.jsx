import { useEffect } from "react";
import "./Metas.css";

function MetaArea({ setMetas, metas }) {

  function checked(index) {
    document.getElementById(index).classList.toggle("checked");
  }

  function deletar(index) {
    const metasDb = JSON.parse(localStorage.getItem("metas2023"))
    metasDb.splice(index, 1)
    localStorage.setItem("metas2023", JSON.stringify(metasDb))
    setMetas((prev)=>{
        const elementoDeletado = [...prev]
        elementoDeletado.splice(index, 1)
        return elementoDeletado
    })
  }

  function loading(array) {
    return array.map((meta, index) => (
      <div key={index} className="meta" id={index}>
        <button id={index} className="check" onClick={() => checked(index)}>
          ✔️
        </button>
        <p className="paragrafoMeta">{meta}</p>
        <button id="excluir" onClick={() => deletar(index)}>
          🗑️
        </button>
      </div>
    ));
  }

  useEffect(() => {
    const metasArray = [];
    if (localStorage.getItem("metas2023") !== null) {
      const metasDb = JSON.parse(localStorage.getItem("metas2023"));
      for (let i = 0; i < metasDb.length; i++) {
        metasArray.push(metasDb[i]);
      }
    }
    setMetas([...metasArray]);
  }, [setMetas]);

  return loading(metas);
}

export { MetaArea };
