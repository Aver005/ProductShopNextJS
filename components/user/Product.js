import style from '@css/components/Product.module.css'

const Product = ({ data }) => 
{
    return (
        <div className={style.Product}>
            <img src={data.image_url} />
            <strong>{data.name}</strong>
            <small>{data.description}</small>
            <div className={style.ProductActionButtons}>

            </div>
        </div>
    );
}

export default Product;