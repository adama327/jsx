const prenom = "Adama"
const nom = "Niang" 

const Fullname = () => {
    return(
        <div className="nom">
         <h3> Nom et prenom :</h3> <h3>{nom +" "+ prenom}</h3>
        </div>
       
    )
}
export default Fullname