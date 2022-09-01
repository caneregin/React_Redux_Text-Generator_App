import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { changeParas } from '../redux/textgenerator/textGeneratorSlice'
import axios from 'axios'
import { useSelector } from "react-redux"

function Body() {
    const [changeRandomParas, setChangeRandomParas] = useState(4)
    const [changeRandomDropdown, setChangeRandomDropdown] = useState("NO")
    const dispatch = useDispatch()
    const items = useSelector((state) => state.textGenerator.randomText)
    useEffect(() => {
        axios("https://baconipsum.com/api/?type=all-meat&paras=" + changeRandomParas + "&format=" + changeRandomDropdown + "")
            .then((res) => dispatch(changeParas(res.data)))
            .catch((e) => console.log(e))
    }, [changeRandomParas, changeRandomDropdown])
    const handleChangeDropdown = (e) => {
        setChangeRandomDropdown(e.target.value)
    }
    return (
        <div>
            <input type="number" min="1" onChange={(e) => setChangeRandomParas(e.target.value)} value={changeRandomParas}  />
            <label for="htmlinclude">Include HTML</label>
            <select name="htmlinclude" id="htmlinclude" onClick={handleChangeDropdown}>
                <option value="NO">NO</option>
                <option value="YES">YES</option>
            </select>
            <p>{items}</p>
        </div>
    )
}

export default Body