import { Card, Button, Badge } from 'react-bootstrap';
import type { Product } from '../models/Product';

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = (props: ProductCardProps) => {
  const { product, onAddToCart } = props;
  // Logic tính toán hiển thị giá
  const hasDiscount = product.discountPercentage > 0;
  const finalPrice = hasDiscount 
    ? product.price * (1 - product.discountPercentage / 100) 
    : product.price;

  return (
    <Card className="border-0 h-100 shadow-sm" style={{ cursor: 'pointer' }}>
      <div className="position-relative overflow-hidden">
        {/* Badge Giảm giá */}
        {hasDiscount && (
          <Badge 
            className="badge-sale position-absolute top-0 start-0 m-3 p-2"
          >
            -{product.discountPercentage}%
          </Badge>
        )}
        
        {/* Ảnh sản phẩm (Nên dùng ảnh tỉ lệ 3:4) */}
        <Card.Img 
          variant="top" 
          src={product.imageUrl} 
          style={{ height: '400px', objectFit: 'cover' }} 
        />
        
        {/* Nút thêm vào giỏ hiện khi hover (xử lý bằng CSS hoặc state đơn giản) */}
        <div className="d-grid gap-2 p-2">
            <Button 
                variant="dark" 
                className="rounded-0"
                onClick={() => onAddToCart(product)}
            >
                THÊM VÀO GIỎ
            </Button>
        </div>
      </div>

      <Card.Body className="text-center">
        <Card.Title className="fs-6 text-uppercase fw-bold">{product.name}</Card.Title>
        <Card.Text>
          {hasDiscount ? (
            <>
              <span className="text-muted text-decoration-line-through me-2">
                {product.price.toLocaleString()} đ
              </span>
              <span className="text-danger fw-bold">
                {finalPrice.toLocaleString()} đ
              </span>
            </>
          ) : (
            <span className="fw-bold">{product.price.toLocaleString()} đ</span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;