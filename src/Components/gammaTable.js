import React from 'react'

//Importing Static Files
import winesData from "../Static Files/Wine-Data.json";
import textData from "../Static Files/staticText.json";
import '../Styles/tableStyle.css'

const GammaTable = () => {
    return(
        <React.Fragment>
               <table class="table">
        <thead>
          <th> {textData.tableText.meausre} </th>
          <th> {textData.tableText.gama} {textData.tableText.mean}  </th>
          <th> {textData.tableText.gama} {textData.tableText.median}  </th>
          <th> {textData.tableText.gama} {textData.tableText.mode}  </th>
          
        </thead>
        <tbody>
        {
            winesData.map(i=>{
                return <tr>
                    <td data-label={`${textData.tableText.meausre}`} ></td>
                    <td data-label={`${textData.tableText.gama} ${textData.tableText.mean}`} ></td>
                    <td data-label={`${textData.tableText.gama} ${textData.tableText.median}`} ></td>
                    <td data-label={`${textData.tableText.gama} ${textData.tableText.mode}`} ></td>
                     </tr>
            })
        }
        </tbody>
      </table>
        </React.Fragment>
    )
}

export default GammaTable