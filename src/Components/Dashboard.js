import { useState } from 'react'
import './Dashboard.css'


const ID= 0;
const ethereumBalance=0;
const assetAmount=0;
const account_period=0;
export default function Dashboard(){
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

    const processCSV = (str, delim=',') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

        setCsvArray(newArray)
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
        }

        reader.readAsText(file);
    }

    return(

        <>

<div className="Account_Address container">

<h2 >My Wallet Stats</h2>
<h3 className="label">Account Address</h3>
<p> {`${ID}`}</p>



<h3 className="label">Account Balance</h3>
<h4>{`${ethereumBalance}`}ETH <i class="fab fa-ethereum"></i></h4>
<h3 className="label">NFTS in Wallet</h3>
<h4>{`${assetAmount}`}</h4>
<h3 className="label">Days account active</h3>
<p> {`${account_period}`}</p>

</div>
 
        <form id='csv-form'>
            <h4>Upload files</h4>
            <input className="csv-input" 
            type='file'
             
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
            <br/>
            <button className="csv-button" 
                onClick={(e) => {
                    e.preventDefault()
                    if(csvFile)submit()
                }}
            >
                Submit
            </button>
            <br/>
            <br/>
            {csvArray.length>0 ? 
            <>
                <table className="table container">
                    <thead>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        {
                            csvArray.map((item, i) => (
                                <tr  key={i}>
                                    <td>{i+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td> 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </> : null}



        </form>



    

        </>



    );

}

