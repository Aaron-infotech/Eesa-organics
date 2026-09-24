import { LOGO_SRC } from '../config/brand';

export default function ProductImage({
  product,
  className = '',
  imageClassName = '',
  loading = 'lazy',
  priority = false,
}) {
  const src = product.images?.[0];

  return (
    <div className={`product-image ${className}`}>
      <img
        src={src}
        alt={product.name}
        className={`product-image__photo ${imageClassName}`}
        loading={priority ? 'eager' : loading}
      />
      
    </div>
  );
}
