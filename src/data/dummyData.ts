import type { Product } from "../models/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Silk Evening Gown",
    vietnameseName: "Đầm Dạ Hội Lụa Tơ Tằm",
    category: "clothing",
    price: 4500000,
    discountPercentage: 15, // Giảm 15%
    rating: 4.8,
    isNew: true,
    description: "Thiết kế tinh xảo từ lụa tơ tằm cao cấp, mang lại vẻ đẹp quý phái cho các buổi tiệc tối.",
    imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80" 
  },
  {
    id: 2,
    name: "Milano Leather Tote",
    vietnameseName: "Túi Tote Da Milano Cao Cấp",
    category: "bags",
    price: 8900000,
    discountPercentage: 0, // Không giảm giá
    rating: 5.0,
    isNew: false,
    description: "Được chế tác thủ công từ da bò Ý nhập khẩu, đường may tỉ mỉ, độ bền vượt thời gian.",
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Gentleman's Velvet Blazer",
    vietnameseName: "Áo Vest Nhung Đỏ Rượu",
    category: "clothing",
    price: 3200000,
    discountPercentage: 10,
    rating: 4.5,
    isNew: true,
    description: "Phong cách cổ điển pha lẫn hiện đại, chất liệu nhung mềm mại, form dáng chuẩn.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Classic Chanel Style Clutch",
    vietnameseName: "Clutch Cầm Tay Đính Đá",
    category: "bags",
    price: 2100000,
    discountPercentage: 20,
    rating: 4.7,
    isNew: false,
    description: "Phụ kiện hoàn hảo cho các quý cô, điểm nhấn lấp lánh cho mọi bộ trang phục.",
    imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Summer Linen Suit",
    vietnameseName: "Bộ Suit Linen Mùa Hè",
    category: "clothing",
    price: 5500000,
    discountPercentage: 0,
    rating: 4.9,
    isNew: true,
    description: "Thoáng mát, nhẹ nhàng nhưng vẫn giữ được sự lịch lãm cần thiết.",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Signature Crossbody Bag",
    vietnameseName: "Túi Đeo Chéo Signature",
    category: "bags",
    price: 3800000,
    discountPercentage: 5,
    rating: 4.6,
    isNew: false,
    description: "Thiết kế nhỏ gọn, tiện lợi, phù hợp cho những chuyến dạo phố cuối tuần.",
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
  }
];

export const userMock = {
  id: 101,
  name: "Nguyen Van A",
  email: "khachhangvip@example.com",
  avatar: "https://i.pravatar.cc/150?img=3",
  isAdmin: false
};

export const cartMock = [
  {
    productId: 1,
    quantity: 1,
    size: "M"
  },
  {
    productId: 4,
    quantity: 2,
    size: null
  }
];