import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
//import ErrorHandling from "./ErrorHandling";
import SortElectronics from "./SortElectronics";
import { getElectronics } from "../../utils/utils";
import CategoriesSelect from './CategoriesSelect';
import Totop from "./Totop";
import { MdTabletMac } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { AiOutlineLaptop } from "react-icons/ai";
import Icon from './Icon';



export default function Electronics({electronicList, setElectronics}){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState("");
    const [order, setOrder] = useState("");

    const [electronicsCategory, setElectronicsCategory] = useState('')

    
    useEffect(() => {
      console.log(electronicsCategory);
      getElectronics(electronicsCategory || searchParams.get("category"), sortBy, order).then((electronics) => {

        setElectronics(electronics)
      })
    }, [searchParams, sortBy, order])

    const handleElectronicsClick = (electronics) =>{
      console.log(electronics.electronics_id);
      navigate(`/electronics/${electronics.electronics_id}`)
    };

    // const Icon = electronics.electronics_type === "Phone" ? IoPhonePortraitSharp 
    // : electronics.electronics_type === "Laptop" ?  AiOutlineLaptop
    // : electronics.electronics_type === "Smartwatch" ? BsSmartwatch
    // : MdTabletMac;
    return(

      <div className="electronics">
        <CategoriesSelect setElectronicsCategory={setElectronicsCategory} />
        <SortElectronics setSortBy={setSortBy} setOrder={setOrder} />
        {console.log(sortBy, order)}        
        <ul className="electronics-box">
        {electronicList.map((electronics) => (
            <li key={electronics.electronics_id} className="electronic-item">
              <button className='electronics_button' onClick={() => handleElectronicsClick(electronics)}>
                {/* {console.log(electronics)} */}
                <div className='electronics-epithet'>
                  <Icon props={electronics.electronics_type} className="electronics_button-icon" size={24}/>
                  <p>{electronics.name}</p>
                </div>
                <img className='electronics_img' src={electronics.img_url} alt={electronics.model} />
                <p><strong>Storage:</strong> {electronics.storage_in_gb}GB</p>
                <p><strong>£</strong>{electronics.price}</p>
                <p><strong>Seller: </strong>{electronics.username}</p>
                <p><strong>In stock:</strong> {electronics.quantity}</p>
              </button>
            </li>
          ))}
        </ul>
        <Totop/>
      </div>    
      );
}