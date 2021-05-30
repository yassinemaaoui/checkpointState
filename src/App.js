


import './App.css';
import React from 'react';
import photoprofil from "./Images/photoprofil.jpg"




class App extends React.Component {
state ={
  counter :0
}
componentDidMount() {
const counter=this.state
  
  setInterval (() => {
    this.setState({counter:this.state.counter+1})
  },1000)
}

implementProfil() {
 
  this.setState({
   show:true,

   imgSrc: photoprofil,fullName:"Yassine Maaoui",profession:"Avocat",bio:"Diplomé d'une licence en droit privée en 2013 j'ai réussis le concours d'entré à l'institut supérieur à la profession d'avocat ou j'ai passé 2 ans d'étude qui ont aboutit à l'obtention du certificat d'aptitude à la profession d'avocat avec laquelle j'ai pu m'inscrire en tant qu'avocat l'ordre national d'avocat de tunisie."
  })
  
}

  render () {

  return this.state.show ? (
    <div style={{display:"flex"}} >
    
     <img style={{width:230}} src ={this.state.imgSrc} alt="Bienvenue visiteur"/>
     <div >
       <h1 style={{marginTop:0}}>{this.state.fullName}</h1>
       <h2 style={{marginTop:-25}}>{this.state.profession}</h2>
       <p style={{width:"50%",marginTop:-15}}>{this.state.bio}</p>
       <h3>chrono : {this.state.counter}</h3>
 
   <button style={{width:80}} onClick={()=>  this.implementProfil()}>Shows</button>
      
   </div>
   
     </div>
  ): (
    <div>
     <button style={{width:80,marginLeft:"48%"}} onClick={()=>  this.implementProfil()}>Shows</button> 
    </div>
  )
  } 

}
export default App;