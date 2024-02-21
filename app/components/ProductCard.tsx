import React from 'react'
import { useSearchParams } from 'next/navigation'
import Card from './Card';
import { useSelector } from 'react-redux';
import { RootState } from '../_redux/store';
import PaginationControls from './PaginationControls';
type Props = {}
interface Product {
    id?: string;
    brand?: string;
    description?:string;
    image?:string;
    model?:string;
    name?:string;
    price?:string;
  }
const ProductCard = (props: Props) => {
    const filterProduct:Product[] = useSelector((state: RootState) => state.productReducer.filterProduct);
    const filteredProductsArray = filterProduct.flatMap((innerArray:any) => innerArray);

    const searchParams = useSearchParams()
    
    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '12'
  
    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)
  
    const entries = filteredProductsArray.slice(start, end)
   

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {entries.length > 0 ?
      entries.map((item:Product,index:number)=>{
        return(
          <Card product={item}/>
        )
      }): 
      <h2 className='w-70'>product card not found</h2>
    }
    <div>

    { filteredProductsArray.length >=12 && <PaginationControls
        hasNextPage={end < filteredProductsArray.length}
        hasPrevPage={start > 0}
        totalItems={filteredProductsArray.length}
      />}
    </div>
      
    </div>
  )
}

export default ProductCard