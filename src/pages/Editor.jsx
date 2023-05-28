import React from 'react'
import { HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from'../data/dummy'
import { Header,Button } from '../compoents'
const Payment = () => {
  async function sendTransaction(){
    
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 p-10 bg-white rounded-3xl">
      <Header category="Page" title="Pay Gift to your employees"/>
      <div className = "flex m-3 flex-wrap justify-center gap-1 items-center " >
        <div
        onClick ={async ()=>{
        let connect =await  window.ethereum.enable()
      }}> <Button color="white" bgColor="blue" text="Connet MetaMask" borderRadius="10px" size="md" onClick ={async ()=>{
        let connect =await  window.ethereum.enable()
      }}/></div>
        
        {/* <button className="bg-blue" onClick ={async ()=>{
        let connect =await  window.ethereum.enable()
      }}>meta</button> */}
      
        <div onClick ={async ()=>{
        let params= [
  {
    "from": "0x552103E85b9b56D28b5E3bf6c61e59C9F03b01b9",
    "to": "0x026C19Fa472028EDF3f4FE3Bc0DE922c14001f3c",
    "gas": Number(21000).toString(16), // 30400
    "gasPrice": Number(2500000).toString(16), // 10000000000000
    "value": Number(10000).toString(16), // 2441406250
    
  },
]
    let result  = await window.ethereum.request({method: "eth_sendTransaction",params}).catch((err)=>{
      console.log(err)
    });

      }}>
          <Button color="white" bgColor="blue" text="Send Random Gift Tokens" borderRadius="10px" size="md" />
    </div>

        </div>
      </div>
      

      
  )
}

export default Payment