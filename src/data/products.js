export const categories = [
  { id: 1, name: 'Mobiles', icon: 'phone', count: 1254 },
  { id: 2, name: 'Vehicles', icon: 'truck', count: 876 },
  { id: 3, name: 'Property for Sale', icon: 'house', count: 543 },
  { id: 4, name: 'Property for Rent', icon: 'key', count: 432 },
  { id: 5, name: 'Electronics & Home Appliances', icon: 'tv', count: 765 },
  { id: 6, name: 'Bikes', icon: 'bicycle', count: 234 },
  { id: 7, name: 'Business & Industrial', icon: 'briefcase', count: 123 },
  { id: 8, name: 'Services', icon: 'wrench', count: 345 },
];

export const products = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max 256GB Deep Purple',
    price: 285000,
    originalPrice: 320000,
    location: 'Lahore, Punjab',
    timePosted: '2 days ago',
    images: [
      'https://images.pexels.com/photos/17832461/pexels-photo-17832461.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/17832462/pexels-photo-17832462.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/17832463/pexels-photo-17832463.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Mobiles',
    featured: true,
    description: 'Brand new iPhone 14 Pro Max in excellent condition. Complete box with all accessories included. No scratches, perfect working condition.',
    seller: {
      name: 'Ahmad Electronics',
      memberSince: '2019',
      verified: true,
      phone: '+92 300 1234567'
    },
    specifications: {
      'Storage': '256GB',
      'Color': 'Deep Purple',
      'Condition': 'New',
      'Brand': 'Apple',
      'Model': 'iPhone 14 Pro Max'
    }
  },
  {
    id: 2,
    title: 'Honda Civic 2020 VTi Oriel',
    price: 4850000,
    location: 'Karachi, Sindh',
    timePosted: '1 hour ago',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3802509/pexels-photo-3802509.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Vehicles',
    featured: true,
    description: 'Well maintained Honda Civic 2020 VTi Oriel in excellent condition. First owner, complete service history available.',
    seller: {
      name: 'Karachi Motors',
      memberSince: '2020',
      verified: true,
      phone: '+92 300 9876543'
    },
    specifications: {
      'Year': '2020',
      'Fuel Type': 'Petrol',
      'Transmission': 'Automatic',
      'Engine': '1800cc',
      'Mileage': '35,000 km'
    }
  },
  {
    id: 3,
    title: '3 Bedroom Apartment for Rent',
    price: 65000,
    location: 'Islamabad, ICT',
    timePosted: '3 days ago',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Property for Rent',
    description: 'Beautiful 3 bedroom apartment in prime location of Islamabad. Fully furnished with modern amenities.',
    seller: {
      name: 'Capital Properties',
      memberSince: '2018',
      verified: true,
      phone: '+92 301 1111111'
    },
    specifications: {
      'Bedrooms': '3',
      'Bathrooms': '2',
      'Area': '1200 sq ft',
      'Furnished': 'Yes',
      'Floor': '5th'
    }
  },
  {
    id: 4,
    title: 'Samsung 55" 4K Smart TV',
    price: 125000,
    originalPrice: 140000,
    location: 'Lahore, Punjab',
    timePosted: '1 day ago',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics & Home Appliances',
    description: 'Brand new Samsung 55 inch 4K Smart TV with HDR support. Complete warranty available.',
    seller: {
      name: 'Tech World',
      memberSince: '2021',
      verified: false,
      phone: '+92 300 5555555'
    },
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K UHD',
      'Smart TV': 'Yes',
      'Brand': 'Samsung',
      'Condition': 'New'
    }
  },
  {
    id: 5,
    title: 'Honda CD 70 2023 Model',
    price: 115000,
    location: 'Faisalabad, Punjab',
    timePosted: '5 hours ago',
    images: [
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Bikes',
    description: 'Brand new Honda CD 70 2023 model. Excellent fuel average and reliable performance.',
    seller: {
      name: 'Bike Center',
      memberSince: '2019',
      verified: true,
      phone: '+92 300 7777777'
    },
    specifications: {
      'Year': '2023',
      'Engine': '70cc',
      'Condition': 'New',
      'Brand': 'Honda',
      'Model': 'CD 70'
    }
  },
  {
    id: 6,
    title: 'MacBook Pro 14" M2 Chip',
    price: 395000,
    location: 'Karachi, Sindh',
    timePosted: '6 hours ago',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics & Home Appliances',
    featured: true,
    description: 'Latest MacBook Pro 14 inch with M2 chip. Perfect for professional work and gaming.',
    seller: {
      name: 'Apple Store KHI',
      memberSince: '2020',
      verified: true,
      phone: '+92 300 8888888'
    },
    specifications: {
      'Processor': 'M2 Chip',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Screen': '14 inch',
      'Condition': 'New'
    }
  }
];

export const cities = [
  'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 
  'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala'
];