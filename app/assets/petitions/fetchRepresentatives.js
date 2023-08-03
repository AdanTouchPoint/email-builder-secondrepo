import { fetchData } from "./fetchData";

const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setSenator, setShowLoadSpin, setShowList,sendMany,setAllDataIn) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
    if(sendMany === "Si") {
      const emails = await mailerExtracter(datos.data)
      console.log(emails)
      setAllDataIn(emails)
      setMp(datos.data)
      setShowLoadSpin(false)
      setShowList(false)
      return
     }

  
    let query = datos.data;
    console.log(query)
    const deepArrays = query.flatMap((elemento) => elemento);
    let fill = deepArrays
    setMp(fill.filter((mp)  => mp.govt_type === "State MPs"));
    setSenator(deepArrays.filter((mp)  => mp.govt_type !== "State MPs"))
    setShowLoadSpin(false)
    setShowList(false)

}


export{
    fetchRepresentatives
}
