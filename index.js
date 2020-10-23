function Medchilgee(){
    return <h1>Hello, world!</h1>; //function component.props-gui
}
function Medchilgee123(props){ console.log(props) //function component.props-tois
    return (
        <div>
        <h1> {props.ner} </h1> 
         <p>{props.nas}</p>
         <p>{props.surchBgaEseh ? "unen" : "choloo avsan"}</p>
         <p>{props.dunguud[0]}</p>
         <p>{props.dunguud[1]}</p>
         <p>{props.dunguud[2]}</p>

        

         {props.dunguud.map(
             (el, index)=> 
             <p key = {index}>{el} </p>
             )
         }
         <p>{props.myobj.mergejil}</p>
         <p>{props.myobj.index}</p>
    </div>

    );


}
//Dom
ReactDOM.render(
    <Medchilgee123 ner={"hello dorj"} nas={20} surchBgaEseh={true} dunguud={ [80, "dalan yos", true]} myobj={{mergejil:'sw', index:'DS2015'}} />,

    document.getElementById('root') 
);