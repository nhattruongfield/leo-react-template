import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div 
      style={{ 
        backgroundImage: "url('/images/section_hero.png')", 
        height: '90vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Lớp phủ tối nhẹ để chữ nổi bật */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.2)' }}></div>

      <Container className="position-relative text-white text-center">
        <h1 className="display-3 fw-bold mb-4">THỜI TRANG & ĐẲNG CẤP</h1>
        <p className="lead mb-5">Bộ sưu tập Xuân Hè 2025 - Tinh tế trong từng đường nét.</p>
        <button className="btn btn-luxury text-white border-white hover-black">
          KHÁM PHÁ NGAY
        </button>
      </Container>
    </div>
  );
};

export default HeroSection;