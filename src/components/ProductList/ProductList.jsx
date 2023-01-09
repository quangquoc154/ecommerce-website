import ProductItem from './ProductItem/ProductItem';

function ProductList({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <ProductItem key={index} item={item} />
            ))}
        </>
    );
}

export default ProductList;
