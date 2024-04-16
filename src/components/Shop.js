
import { useEffect, useState } from 'react';
import { products } from './Assets/products';
import { BiSearch } from "react-icons/bi";
import { RiStarSFill } from "react-icons/ri";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from './Stores/Cartslice';
import { toast, ToastContainer } from 'react-toastify';
import './Stylings/Shop.css'



const Shop = () => {
  const [category, setCategory] = useState('sofa');
  const [filteredProduct, setFilteredProduct] = useState([]);
  const[search,setSearch]=useState('');

  useEffect(() => {
    const filteredProducts = products.filter(product =>(category ===''|| product.category===category)&& product.productName.toLowerCase().includes(search.toLowerCase()));
    setFilteredProduct(filteredProducts);
    
  }, [category]);
  const filterProducts = (products, searchTerm) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleFilter = (value) => {
    setCategory(value);
  };
  const [data,setData]=useState(false)
  
  const dispatch=useDispatch();
  const{id}=useParams();
  const addtocart=(item)=>{
      dispatch(add(item))
      setData(true)
      toast.success('product has been added to cart')
  }

  return (
    <div>
      <div className='banner'>
        <h1 className='product'>product</h1>

      </div>
      <div  className='container drop'>
     <div className='row '>
      <div className='col-md-4'>
      <div>
        <select onChange={e => handleFilter(e.target.value)}>
      
          <option value='sofa'>Sofa</option>
          <option value='chair'>Chair</option>
          <option value='mobile'>Mobile</option>
          <option value='wireless'>Wireless</option>
        </select>
      </div>
      </div>
      <div className=' col-md-8'>
    <span>
        <input type='search' placeholder='Search...'  onChange={e=> handleFilter(e.target.value, 'search')}   /><span className='bise'><BiSearch /></span>
    </span>
    </div>
     </div>
      <div className='row mt-5'>
        {filteredProduct.map(item => (
          <div className='col-md-4 mt-3 mb-5' key={item.id}>
            <div className='card carbody'>
              <div className='card-body'>
              <img src={item.imgUrl} alt={item.name} className='img'  />
              <h1>{item.productName}</h1>

                        <h6>{ [...Array(5)].map(star => {
                      return <RiStarSFill size={30} className="fivestar" />
                    })
                  } {item.avgRating}ratings</h6>
                    <p>     category: {item.category}</p>
                    <h4 >${item.price} <button className="button" onClick={()=>{addtocart(item)}} >+</button></h4> 
                        
                       
                </div>
              </div>
          </div>
        ))}
      </div>
      {filteredProduct.length === 0 && <h1>No products found</h1>}
      </div>
    </div>
  );
};

export default Shop;
