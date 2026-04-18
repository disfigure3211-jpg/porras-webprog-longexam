import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-slate-900/70 bg-white p-4 shadow-sm shadow-slate-900/5 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg animate-card-pop">
      <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-slate-100">
        {product.image ? (
          <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center border-2 border-slate-300 bg-slate-100 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Item
          </div>
        )}
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-950">{product.title}</h3>
      <p className="mt-2 text-base font-bold text-slate-950">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-4">View Product</Button>
    </article>
  );
};

export default ProductCard;
