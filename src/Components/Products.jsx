
import Product from "./Product"

function Products() {
    var products = [
        {title:"Arqitel",description:"Aqu Executive and its employees continue to receive orders for customers and customers that get orders for customers  ",live:true,case:false },
        {title:"TTR",description:"Aqu Executive and its employees continue to receive orders for customers and customers that get orders for customers  ",live:true,case:false },
        {title:"YIT 2022",description:"Aqu Executive and its employees continue to receive orders for customers and customers that get orders for customers  ",live:true,case:true },
        {title:"Yahoo!",description:"Aqu Executive and its employees continue to receive orders for customers and customers that get orders for customers  ",live:true,case:false },
    ]
  return (
    <div className="py-6">
        {products.map((val,index)=>(
            <Product key={index} val={val}/>
        ))}
        
        
    </div>

  )
}
export default Products