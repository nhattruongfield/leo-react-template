import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../sale-components/ProductCard';
import type { Product } from '../models/Product';
import HeroSection from '../sale-components/HeroSection';
// 1. Import dummy data
import { products as dummyProducts } from '../data/dummyData';
const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2. Giả lập gọi API (delay 1 giây để thấy hiệu ứng loading nếu muốn)
    const fakeApiCall = () => {
      setTimeout(() => {
        setProducts(dummyProducts);
        setIsLoading(false);
      }, 800);
    };

    fakeApiCall();
  }, []);

  const handleAddToCart = (product: Product) => {
    alert(`Đã thêm "${product.vietnameseName}" vào giỏ hàng!`);
    // Sau này sẽ thay bằng logic Redux/Context
  };

  return (
    <>
      <HeroSection />
      
      <Container className="my-5 py-5">
        <div className="text-center mb-5">
           <h2 className="display-5 fw-bold" style={{fontFamily: 'Playfair Display'}}>NEW ARRIVALS</h2>
           <p className="text-muted">Tuyệt phẩm mới nhất mùa này</p>
           {/* Trang trí gạch chân nhỏ dưới tiêu đề cho sang */}
           <div style={{width: '60px', height: '2px', background: '#c5a059', margin: '20px auto'}}></div>
        </div>

        {isLoading ? (
          <div className="text-center py-5">Loading luxury items...</div>
        ) : (
          <Row>
            {products.map(product => (
              <Col key={product.id} md={4} lg={3} sm={6} className="mb-5">
                {/* Truyền prop product vào Card */}
                <ProductCard 
                    // Adapter để khớp field name của dummy data với component card
                    product={{
                        ...product,
                        name: product.vietnameseName, // Ưu tiên hiển thị tên tiếng Việt
                        imageUrl: product.imageUrl
                    }} 
                    onAddToCart={handleAddToCart} 
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;