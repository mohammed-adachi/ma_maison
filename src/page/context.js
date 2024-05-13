import React, { Component, createContext } from "react";
import items from '../data';
const RoomContext = createContext();

class FeaturedRoom extends Component {
    state = {
        rooms:[],
        sortedRoom:[],
        featuredRoom:[],
        loading:false,
        type:[],
        capacity:1,
        minprix:0,
        maxprix:0,
        minsize:0,
        maxsize:0,
        breakfast:false
    };
    
    componentDidMount(){
        let rooms=this.formadata(items);
        let maxprix =Math.max(...rooms.map(item=>item.price)) 
        let type =(rooms.map(item=>item.type))
        let capacity=(rooms.map(item=>item.capacity))
       console.log(capacity)
        
        let maxsize =Math.max(...rooms.map(item=>item.size))   
        this.setState({rooms})
        let featuredRoom=rooms.filter(room=>room.featured===true);
        this.setState(
            {rooms,
            sortedRoom:rooms,
            featuredRoom,
            loading:false,
            price:maxprix,
           type:'',
           capacity:capacity,
            size:maxsize,
            breakfast:false

            })
            

    }
formadata(items){
    let temoitem=items.map(item=>{
        let id=item.sys.id;
        
        let images=item.fields.images.map(image=>
            image.fields.file.url
         
        )
        let room ={...item.fields,images ,id};
        return room;

    })
    return temoitem;
}
getRoom =slug =>{

let temp=[...this.state.rooms]
const room=temp.find(room=>room.slug===slug)
return room

}


handlechange=event=>{
    const type=event.target.type
    const value = event.type === "checkbox" ? event.target.checked : event.target.value;
    const name=event.target.name
  
   this.setState({
[name]:value,

},this.filterRomms)

 }
 filterRomms=()=>{
    let {rooms,type,capacity}=this.state;
    capacity=parseInt(capacity)   
    let temprooms=[...rooms];
   
console.log(temprooms)
if (capacity !==1){
    temprooms=temprooms.filter(rooms=>rooms.capacity===capacity)
    
}
else if(type!="all"){
        temprooms=temprooms.filter(room=>room.type===type) }    
    
    
    this.setState({
        sortedRoom:temprooms
        
 })
 }

    render() {
       
        return (
            <RoomContext.Provider value={{...this.state ,getRoom:this.getRoom,handlechange:this.handlechange }}>
        
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomContext, RoomConsumer, FeaturedRoom };
