// Enhanced Product data with more exciting products
const products = [
    {
        id: '1',
        name: 'iPhone 15 Pro Max',
        price: 189900,
        originalPrice: 219900,
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Smartphones',
        description: 'The most advanced iPhone ever with titanium design, A17 Pro chip, and revolutionary camera system with 5x telephoto zoom.',
        features: [
            'A17 Pro chip with 6-core GPU',
            'Titanium design with aerospace-grade alloy',
            'Pro camera system with 5x telephoto',
            '6.7-inch Super Retina XDR display',
            'Action Button for quick shortcuts',
            'USB-C connectivity',
            'Up to 29 hours video playback'
        ],
        rating: 4.9,
        reviews: 2847,
        inStock: true,
        badge: 'Latest'
    },
    {
        id: '2',
        name: 'MacBook Pro M3 Max',
        price: 449900,
        originalPrice: 499900,
        image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Laptops',
        description: 'Supercharged by M3 Max chip. Built for professionals who push the limits of what\'s possible.',
        features: [
            'M3 Max chip with 40-core GPU',
            '16-inch Liquid Retina XDR display',
            'Up to 128GB unified memory',
            '8TB SSD storage option',
            '22-hour battery life',
            'Six Thunderbolt 4 ports',
            'Advanced thermal design'
        ],
        rating: 4.8,
        reviews: 1456,
        inStock: true,
        badge: 'Pro'
    },
    {
        id: '3',
        name: 'Sony WH-1000XM5',
        price: 39900,
        originalPrice: 49900,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Audio',
        description: 'Industry-leading noise canceling headphones with exceptional sound quality and all-day comfort.',
        features: [
            'Industry-leading noise canceling',
            '30-hour battery life',
            'Quick Charge (3 min = 3 hours)',
            'Multipoint connection',
            'Speak-to-Chat technology',
            'Premium comfort design',
            'Hi-Res Audio certified'
        ],
        rating: 4.7,
        reviews: 3421,
        inStock: true,
        badge: 'Best Seller'
    },
    {
        id: '4',
        name: 'Apple Watch Ultra 2',
        price: 89900,
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Wearables',
        description: 'The most rugged and capable Apple Watch. Designed for endurance athletes and outdoor adventurers.',
        features: [
            'S9 SiP with Neural Engine',
            '49mm titanium case',
            'Brightest Apple display ever',
            'Up to 36 hours battery life',
            'Precision dual-frequency GPS',
            'Water resistant to 100 meters',
            'Action Button for instant control'
        ],
        rating: 4.6,
        reviews: 892,
        inStock: true,
        badge: 'Ultra'
    },
    {
        id: '5',
        name: 'Canon EOS R5 Mark II',
        price: 389900,
        image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Photography',
        description: 'Professional mirrorless camera with 45MP sensor and 8K video recording capabilities.',
        features: [
            '45MP full-frame CMOS sensor',
            '8K RAW video recording',
            'Dual Pixel CMOS AF II',
            'In-body image stabilization',
            'Weather-sealed magnesium body',
            'Dual memory card slots',
            '4K 120p video recording'
        ],
        rating: 4.9,
        reviews: 567,
        inStock: true,
        badge: 'Professional'
    },
    {
        id: '6',
        name: 'PlayStation 5 Pro',
        price: 79900,
        originalPrice: 89900,
        image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Gaming',
        description: 'The most powerful PlayStation console ever with enhanced GPU and ray tracing capabilities.',
        features: [
            'Enhanced GPU with 67% more CUs',
            'Advanced ray tracing',
            'AI-driven upscaling',
            '2TB SSD storage',
            '4K gaming at 60fps',
            'VRR and 8K output support',
            'Backwards compatibility'
        ],
        rating: 4.8,
        reviews: 2134,
        inStock: true,
        badge: 'Gaming'
    },
    {
        id: '7',
        name: 'AirPods Pro 3rd Gen',
        price: 29900,
        image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Audio',
        description: 'Next-generation AirPods Pro with adaptive audio and enhanced noise cancellation.',
        features: [
            'H2 chip for advanced audio',
            'Adaptive Audio technology',
            'Enhanced Active Noise Cancellation',
            'Transparency mode',
            'Spatial Audio with head tracking',
            'Up to 6 hours listening time',
            'MagSafe charging case'
        ],
        rating: 4.7,
        reviews: 1876,
        inStock: true,
        badge: 'New'
    },
    {
        id: '8',
        name: 'DJI Mini 4 Pro',
        price: 89900,
        originalPrice: 99900,
        image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Photography',
        description: 'Ultra-lightweight drone with 4K HDR video and omnidirectional obstacle sensing.',
        features: [
            '4K/60fps HDR video',
            'Omnidirectional obstacle sensing',
            '34-minute max flight time',
            '20km HD video transmission',
            'ActiveTrack 360°',
            'Under 249g weight',
            'Advanced return-to-home'
        ],
        rating: 4.6,
        reviews: 743,
        inStock: true,
        badge: 'Drone'
    },
    {
        id: '9',
        name: 'Samsung Galaxy S24 Ultra',
        price: 169900,
        image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Smartphones',
        description: 'The ultimate Android flagship with S Pen, 200MP camera, and Galaxy AI features.',
        features: [
            'Snapdragon 8 Gen 3 processor',
            '200MP main camera with AI zoom',
            '6.8-inch Dynamic AMOLED 2X',
            'Built-in S Pen',
            'Galaxy AI features',
            '5000mAh battery',
            'Titanium frame construction'
        ],
        rating: 4.5,
        reviews: 1923,
        inStock: true,
        badge: 'Android'
    },
    {
        id: '10',
        name: 'ASUS ROG Strix RTX 4090',
        price: 199900,
        image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Gaming',
        description: 'Ultimate gaming graphics card with Ada Lovelace architecture and 24GB GDDR6X memory.',
        features: [
            'Ada Lovelace architecture',
            '24GB GDDR6X memory',
            '2.5-slot design',
            'Axial-tech fans',
            'Auto-Extreme technology',
            'Dual BIOS switch',
            'Aura Sync RGB lighting'
        ],
        rating: 4.9,
        reviews: 456,
        inStock: true,
        badge: 'Ultimate'
    },
    {
        id: '11',
        name: 'iPad Pro M4 12.9"',
        price: 139900,
        originalPrice: 159900,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Laptops',
        description: 'The most advanced iPad ever with M4 chip and stunning Liquid Retina XDR display.',
        features: [
            'M4 chip with Neural Engine',
            '12.9-inch Liquid Retina XDR',
            'ProMotion technology',
            'Face ID authentication',
            'Thunderbolt / USB 4 support',
            'Apple Pencil Pro support',
            'All-day battery life'
        ],
        rating: 4.8,
        reviews: 1234,
        inStock: true,
        badge: 'Tablet'
    },
    {
        id: '12',
        name: 'Wireless Charging Station Pro',
        price: 8900,
        image: 'https://images.pexels.com/photos/4498891/pexels-photo-4498891.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        category: 'Accessories',
        description: '3-in-1 wireless charging station for iPhone, Apple Watch, and AirPods with fast charging.',
        features: [
            '15W fast wireless charging',
            'Charges 3 devices simultaneously',
            'MagSafe compatible',
            'Apple Watch charging dock',
            'AirPods charging spot',
            'LED charging indicators',
            'Premium aluminum design'
        ],
        rating: 4.4,
        reviews: 892,
        inStock: true,
        badge: 'Accessory'
    }
];

// Showcase products for hero section
const showcaseProducts = [
    products[0], // iPhone 15 Pro Max
    products[1], // MacBook Pro M3 Max
    products[5], // PlayStation 5 Pro
    products[4], // Canon EOS R5 Mark II
    products[2]  // Sony WH-1000XM5
];

// Global variables
let cart = [];
let currentUser = null;
let currentShowcaseIndex = 0;
let currentCheckoutStep = 1;
let selectedPaymentMethod = null;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const authModal = document.getElementById('authModal');
const productModal = document.getElementById('productModal');
const checkoutModal = document.getElementById('checkoutModal');
const successModal = document.getElementById('successModal');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    displayProducts(products);
    initializeProductShowcase();
    setupEventListeners();
    updateCartDisplay();
    
    // Load saved cart from localStorage
    loadCartFromStorage();
    
    // Initialize navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Initialize search functionality
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Initialize product showcase
function initializeProductShowcase() {
    const showcaseContainer = document.getElementById('showcaseProducts');
    const indicatorsContainer = document.getElementById('showcaseIndicators');
    
    if (!showcaseContainer || !indicatorsContainer) return;
    
    // Create showcase products
    showcaseProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = `showcase-product ${index === 0 ? 'active' : ''}`;
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="showcase-info">
                <div class="showcase-name">${product.name}</div>
                <div class="showcase-price">रू ${product.price.toLocaleString()}</div>
            </div>
        `;
        showcaseContainer.appendChild(productElement);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.onclick = () => goToProduct(index);
        indicatorsContainer.appendChild(indicator);
    });
    
    // Auto-rotate products
    setInterval(nextProduct, 4000);
}

function nextProduct() {
    currentShowcaseIndex = (currentShowcaseIndex + 1) % showcaseProducts.length;
    updateShowcase();
}

function previousProduct() {
    currentShowcaseIndex = (currentShowcaseIndex - 1 + showcaseProducts.length) % showcaseProducts.length;
    updateShowcase();
}

function goToProduct(index) {
    currentShowcaseIndex = index;
    updateShowcase();
}

function updateShowcase() {
    const products = document.querySelectorAll('.showcase-product');
    const indicators = document.querySelectorAll('.indicator');
    
    products.forEach((product, index) => {
        product.classList.remove('active');
        if (index === currentShowcaseIndex) {
            product.classList.add('active');
        }
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentShowcaseIndex);
    });
}

// Event listeners
function setupEventListeners() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });

    // Auth forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }

    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('active');
        }
    });

    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        if (cartSidebar && cartSidebar.classList.contains('open') && 
            !cartSidebar.contains(e.target) && 
            !e.target.closest('.cart-btn')) {
            toggleCart();
        }
    });
}

// Display products
function displayProducts(productsToShow) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--primary-blue); margin-bottom: 1rem;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">
                <span class="price-current">रू ${product.price.toLocaleString()}</span>
                ${product.originalPrice ? `<span class="price-original">रू ${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <div class="product-rating">
                <span class="stars">${stars}</span>
                <span class="rating-text">(${product.reviews} reviews)</span>
            </div>
            <div class="product-actions">
                <button class="btn-primary" onclick="addToCart('${product.id}')">
                    <i class="fas fa-cart-plus"></i>
                    <span>ADD TO CART</span>
                </button>
                <button class="btn-secondary" onclick="showProductDetail('${product.id}')">
                    <i class="fas fa-eye"></i>
                    <span>VIEW DETAILS</span>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Filter products
function filterProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Search functionality
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
        
        // Scroll to products section
        scrollToSection('products');
        
        showNotification(`Found ${filteredProducts.length} products for "${searchTerm}"`, 'success');
    }
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    saveCartToStorage();
    showNotification(`${product.name} added to cart!`, 'success');
    
    // Show cart briefly when item is added
    if (!cartSidebar.classList.contains('open')) {
        toggleCart();
        setTimeout(() => {
            if (cartSidebar.classList.contains('open')) {
                setTimeout(() => {
                    if (cartSidebar.classList.contains('open')) {
                        toggleCart();
                    }
                }, 3000);
            }
        }, 100);
    }
}

function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCartToStorage();
    
    if (product) {
        showNotification(`${product.name} removed from cart`, 'warning');
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
            saveCartToStorage();
        }
    }
}

function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) {
        cartTotal.textContent = total.toLocaleString();
    }
    
    // Update cart items
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--gray-600);">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p>Your cart is empty</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Add some amazing products!</p>
                </div>
            `;
            return;
        }
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">रू ${item.price.toLocaleString()}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="btn-secondary" onclick="removeFromCart('${item.id}')" style="margin-left: 1rem; padding: 0.3rem 0.8rem; font-size: 0.7rem;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
}

// Cart storage
function saveCartToStorage() {
    localStorage.setItem('techvault_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('techvault_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Modal functions
function toggleCart() {
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');
        const cartOverlay = document.getElementById('cartOverlay');
        if (cartOverlay) {
            cartOverlay.classList.toggle('active');
        }
    }
}

function toggleMobileMenu() {
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

function openAuthModal() {
    if (currentUser) {
        showNotification(`Welcome back, ${currentUser.name}!`, 'success');
        return;
    }
    
    if (authModal) {
        authModal.classList.add('active');
    }
}

function closeAuthModal() {
    if (authModal) {
        authModal.classList.remove('active');
    }
}

function showAuthForm(form) {
    document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.style.display = 'none');
    
    event.target.classList.add('active');
    const formElement = document.getElementById(form + 'Form');
    if (formElement) {
        formElement.style.display = 'flex';
    }
}

function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Simple login simulation
    if (email && password) {
        currentUser = { 
            name: email.split('@')[0], 
            email: email,
            id: 'user_' + Date.now()
        };
        closeAuthModal();
        showNotification('Login successful! Welcome back!', 'success');
        updateAuthButton();
    }
}

function handleRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    // Simple registration simulation
    if (name && email && password) {
        currentUser = { 
            name: name, 
            email: email,
            phone: phone,
            id: 'user_' + Date.now()
        };
        closeAuthModal();
        showNotification('Registration successful! Welcome!', 'success');
        updateAuthButton();
    }
}

function updateAuthButton() {
    const authBtn = document.querySelector('.auth-btn');
    if (currentUser && authBtn) {
        authBtn.innerHTML = `<i class="fas fa-user-check"></i>`;
        authBtn.title = `Logged in as ${currentUser.name}`;
    }
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productDetail = document.getElementById('productDetail');
    if (!productDetail) return;
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    productDetail.innerHTML = `
        <div class="product-detail-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image" loading="lazy">
        </div>
        <div class="product-detail-info">
            <div class="product-detail-badge">${product.category}</div>
            <h2>${product.name}</h2>
            <div class="product-detail-price">
                <span class="price-current">रू ${product.price.toLocaleString()}</span>
                ${product.originalPrice ? `<span class="price-original">रू ${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <div class="product-rating">
                <span class="stars">${stars}</span>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <p class="product-detail-description">${product.description}</p>
            <div class="product-features">
                <h4>Key Features:</h4>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                <button class="btn-primary" onclick="addToCart('${product.id}'); closeProductModal();" style="flex: 1;">
                    <i class="fas fa-cart-plus"></i>
                    <span>ADD TO CART - रू ${product.price.toLocaleString()}</span>
                </button>
                <button class="btn-secondary" onclick="addToWishlist('${product.id}')" style="padding: 1rem;">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    if (productModal) {
        productModal.classList.add('active');
    }
}

function closeProductModal() {
    if (productModal) {
        productModal.classList.remove('active');
    }
}

function addToWishlist(productId) {
    showNotification('Added to wishlist!', 'success');
}

// Checkout functions
function openCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }
    
    if (!currentUser) {
        showNotification('Please login to continue', 'warning');
        openAuthModal();
        return;
    }
    
    currentCheckoutStep = 1;
    updateCheckoutStep();
    updateOrderSummary();
    
    if (checkoutModal) {
        checkoutModal.classList.add('active');
    }
}

function closeCheckoutModal() {
    if (checkoutModal) {
        checkoutModal.classList.remove('active');
    }
}

function nextCheckoutStep() {
    if (currentCheckoutStep < 3) {
        if (currentCheckoutStep === 2 && !selectedPaymentMethod) {
            showNotification('Please select a payment method', 'warning');
            return;
        }
        
        currentCheckoutStep++;
        updateCheckoutStep();
        
        if (currentCheckoutStep === 3) {
            updateOrderSummary();
        }
    }
}

function previousCheckoutStep() {
    if (currentCheckoutStep > 1) {
        currentCheckoutStep--;
        updateCheckoutStep();
    }
}

function updateCheckoutStep() {
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index + 1 === currentCheckoutStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Show/hide step content
    document.querySelectorAll('.checkout-step').forEach((step, index) => {
        if (index + 1 === currentCheckoutStep) {
            step.style.display = 'block';
        } else {
            step.style.display = 'none';
        }
    });
    
    // Update buttons
    const backBtn = document.querySelector('.back-btn');
    const nextBtn = document.querySelector('.next-btn');
    const placeOrderBtn = document.querySelector('.place-order-btn');
    
    if (backBtn) {
        backBtn.style.display = currentCheckoutStep > 1 ? 'flex' : 'none';
    }
    
    if (nextBtn) {
        nextBtn.style.display = currentCheckoutStep < 3 ? 'flex' : 'none';
    }
    
    if (placeOrderBtn) {
        placeOrderBtn.style.display = currentCheckoutStep === 3 ? 'flex' : 'none';
    }
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    
    // Update UI
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    event.currentTarget.classList.add('selected');
    
    // Update radio button
    const radio = event.currentTarget.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
    }
}

function updateOrderSummary() {
    const summaryItems = document.getElementById('summaryItems');
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryTotal = document.getElementById('summaryTotal');
    
    if (!summaryItems) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 100; // Fixed shipping cost
    const total = subtotal + shipping;
    
    // Update summary items
    summaryItems.innerHTML = '';
    cart.forEach(item => {
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>रू ${(item.price * item.quantity).toLocaleString()}</span>
        `;
        summaryItems.appendChild(summaryItem);
    });
    
    // Update totals
    if (summarySubtotal) summarySubtotal.textContent = subtotal.toLocaleString();
    if (summaryTotal) summaryTotal.textContent = total.toLocaleString();
}

function placeOrder() {
    if (!selectedPaymentMethod) {
        showNotification('Please select a payment method', 'warning');
        return;
    }
    
    // Simulate order processing
    showNotification('Processing your order...', 'success');
    
    setTimeout(() => {
        // Generate order number
        const orderNumber = 'TV-' + new Date().getFullYear() + '-' + String(Date.now()).slice(-6);
        
        // Clear cart
        cart = [];
        updateCartDisplay();
        saveCartToStorage();
        
        // Close checkout modal
        closeCheckoutModal();
        
        // Show success modal
        document.getElementById('orderNumber').textContent = orderNumber;
        if (successModal) {
            successModal.classList.add('active');
        }
        
        showNotification('Order placed successfully! Thank you!', 'success');
    }, 2000);
}

function closeSuccessModal() {
    if (successModal) {
        successModal.classList.remove('active');
    }
}

// Admin functions
function showAddProductModal() {
    showNotification('Add Product feature coming soon!', 'success');
}

function showManageProductsModal() {
    showNotification('Manage Products feature coming soon!', 'success');
}

function showOrdersModal() {
    showNotification('Orders management feature coming soon!', 'success');
}

function showShipmentsModal() {
    showNotification('Shipments tracking feature coming soon!', 'success');
}

function showSupportModal() {
    showNotification('Support tickets feature coming soon!', 'success');
}

function showAnalyticsModal() {
    showNotification('Analytics dashboard feature coming soon!', 'success');
}

// Contact form submission
function submitContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    showNotification('Message sent successfully! We\'ll respond within 24 hours.', 'success');
    
    // Reset form
    event.target.reset();
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

function showNotification(message, type = 'success') {
    const container = document.getElementById('notificationContainer');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="${icons[type] || icons.success}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.4s ease forwards';
            setTimeout(() => {
                notification.remove();
            }, 400);
        }
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            scrollToSection(target.id);
        }
    });
});

// Performance optimization: Intersection Observer for animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.product-card, .admin-card, .feature-item, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeScrollAnimations, 1000);
});

// Add CSS for slide out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);