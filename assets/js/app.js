
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');

    if (location) {
        displayHotels(location);
    } else {
        alert('No location specified');
    }
});

function displayHotels(location) {

    
    const filteredHotels = data.filter(hotel => hotel.location.toLowerCase() === location.toLowerCase());
}
const data = [
    {
        name: "The Oberoi Amarvilas",
        location: "Agra",
        Image: "https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 9500,
        description: "Luxury hotel with a view of the Taj Mahal."
    },
    {
        name: "Taj Lake Palace",
        Image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "Udaipur",
        price: 8000,
        description: "A beautiful hotel in the middle of Lake Pichola."
    },
    {
        name: "The Leela Palace",
        location: "New Delhi",
        Image: "https://images.unsplash.com/photo-1585483103289-39c79411fda9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 9000,
        description: "Lavish hotel located in the diplomatic enclave of the capital."
    },
    {
        name: "Trident Hotel",
        Image: "https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "Jaipur",
        price: 6000,
        description: "Luxury hotel with views of the Mansagar Lake."
    },
    {
        name: "Radisson Blu",
        location: "Goa",
        Image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 5000,
        description: "Beachfront hotel with a beautiful sea view."
    },
    {
        name: "ITC Maratha",
        location: "Mumbai",
        Image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 7000,
        description: "Grand hotel with traditional Indian decor."
    },
    {
        name: "The Tamara",
        location: "Coorg",
        Image: "https://images.unsplash.com/photo-1599922760936-e840fa373d8d?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 6500,
        description: "Luxury resort set amidst coffee plantations."
    },
    {
        name: "Hyatt Regency",
        location: "Chennai",
        price: 5500,
        description: "Modern hotel with luxurious amenities."
    },
    {
        name: "The Lalit Grand Palace",
        location: "Srinagar",
        price: 8500,
        description: "Heritage property set in a beautiful garden."
    },
    {
        name: "The Gateway Hotel",
        location: "Varkala",
        price: 4500,
        description: "Beachfront hotel with stunning ocean views."
    },
    {
        name: "Le Meridien",
        location: "Pune",
        price: 6000,
        description: "Upscale hotel located in the heart of the city."
    },
    {
        name: "Vivanta by Taj",
        location: "Bangalore",
        price: 7500,
        description: "Contemporary hotel with excellent service."
    },
    {
        name: "The Windflower Resort",
        location: "Mysore",
        price: 5000,
        description: "Charming resort with lush gardens."
    },
    {
        name: "The Paul",
        location: "Bangalore",
        price: 8000,
        description: "Luxury boutique hotel with spacious suites."
    },
    {
        name: "The Fern",
        location: "Ahmedabad",
        price: 4000,
        description: "Eco-friendly hotel with modern amenities."
    },
    {
        name: "Sterling Ooty Fern Hill",
        location: "Ooty",
        price: 5500,
        description: "Beautiful resort set amidst rolling hills."
    },
    {
        name: "Fairmont",
        location: "Jaipur",
        price: 8500,
        description: "Luxury hotel with royal architecture."
    },
    {
        name: "Radisson Blu",
        location: "Jammu",
        price: 5000,
        description: "Comfortable hotel with modern amenities."
    },
    {
        name: "JW Marriott",
        location: "Kolkata",
        price: 9000,
        description: "Luxury hotel with excellent facilities."
    },
    {
        name: "Novotel",
        location: "Visakhapatnam",
        price: 6000,
        description: "Beachfront hotel with modern amenities."
    },
    {
        name: "The Gateway Hotel",
        location: "Madurai",
        price: 4500,
        description: "Hotel with a view of the Meenakshi Temple."
    },
    {
        name: "The Ritz-Carlton",
        location: "Bangalore",
        price: 10000,
        description: "Luxury hotel with world-class facilities."
    },
    {
        name: "Taj Mahal Palace",
        location: "Mumbai",
        price: 9500,
        description: "Iconic hotel with a rich history."
    },
    {
        name: "Evolve Back",
        location: "Hampi",
        price: 8000,
        description: "Luxury resort with stunning views of ancient ruins."
    },
    {
        name: "The Imperial",
        location: "New Delhi",
        price: 9000,
        description: "Heritage hotel with colonial architecture."
    },
    {
        name: "Neemrana Fort Palace",
        location: "Alwar",
        price: 7000,
        description: "Historical fort turned into a luxury hotel."
    },
    {
        name: "The Leela Kovalam",
        location: "Kovalam",
        price: 7500,
        description: "Beachfront hotel with panoramic sea views."
    },
    {
        name: "The Zuri Kumarakom",
        location: "Kumarakom",
        price: 7000,
        description: "Luxury resort on the banks of Vembanad Lake."
    },
    {
        name: "Wildflower Hall",
        location: "Shimla",
        price: 8500,
        description: "Luxury resort in the Himalayas."
    },
    {
        name: "Ananda in the Himalayas",
        location: "Rishikesh",
        price: 10000,
        description: "Luxury wellness retreat in the Himalayas."
    },
    {
        name: "The Tamara Kodai",
        location: "Kodaikanal",
        price: 7500,
        description: "Luxury resort set in the hills of Kodaikanal."
    },
    {
        name: "The Oberoi Cecil",
        location: "Shimla",
        price: 8000,
        description: "Heritage hotel with colonial charm."
    },
    {
        name: "The Fern Gir Forest Resort",
        location: "Gir",
        price: 6000,
        description: "Luxury resort near Gir National Park."
    },
    {
        name: "The Gateway Hotel Beach Road",
        location: "Calicut",
        price: 5000,
        description: "Beachfront hotel with beautiful views."
    },
    {
        name: "The Westin",
        location: "Hyderabad",
        price: 7000,
        description: "Upscale hotel with modern amenities."
    },
    {
        name: "Leela Palace",
        location: "Chennai",
        price: 9000,
        description: "Luxury hotel with stunning views of the Bay of Bengal."
    },
    {
        name: "The Claridges",
        location: "New Delhi",
        price: 7500,
        description: "Elegant hotel with a blend of old-world charm and modern amenities."
    },
    {
        name: "The Oberoi Vanyavilas",
        location: "Ranthambore",
        price: 9500,
        description: "Luxury tented camp near Ranthambore National Park."
    },
    {
        name: "The Lalit Laxmi Vilas Palace",
        location: "Udaipur",
        price: 7000,
        description: "Heritage property with views of Fateh Sagar Lake."
    },
    {
        name: "The Ummed",
        location: "Jodhpur",
        price: 6000,
        description: "Elegant hotel with traditional Rajasthani decor."
    },
    {
        name: "The Park",
        location: "Kolkata",
        price: 5500,
        description: "Modern hotel located in the heart of the city."
    },
    {
        name: "The Oberoi Grand",
        location: "Kolkata",
        price: 8500,
        description: "Heritage hotel with colonial architecture."
    },
    {
        name: "The Trident",
        location: "Mumbai",
        price: 8000,
        description: "Luxury hotel with views of Marine Drive."
    },
    {
        name: "Rambagh Palace",
        location: "Jaipur",
        price: 10000,
        description: "Former royal residence turned into a luxury hotel."
    },
    {
        name: "The Taj West End",
        location: "Bangalore",
        price: 8500,
        description: "Heritage hotel set in lush gardens."
    },
    {
        name: "The Oberoi Rajvilas",
        location: "Jaipur",
        price: 9500,
        description: "Luxury resort set amidst beautiful gardens."
    },
    {
        name: "The Lalit",
        location: "Mumbai",
        price: 7000,
        description: "Upscale hotel with modern amenities."
    },
    {
        name: "The Oberoi Udaivilas",
        location: "Udaipur",
        price: 9500,
        description: "Luxury resort on the banks of Lake Pichola."
    },
    {
        name: "The Westin Sohna Resort",
        location: "Gurgaon",
        price: 6000,
        description: "Luxury resort set in a tranquil environment."
    },
    {
        name: "The Leela Ambience",
        location: "Gurgaon",
        price: 8000,
        description: "Upscale hotel with modern amenities."
    },
    {
        name: "The Lalit Ashok",
        location: "Bangalore",
        price: 7000,
        description: "Elegant hotel with a blend of traditional and modern decor."
    },
    {
        name: "ITC Mughal",
        location: "Agra",
        price: 7500,
        description: "Luxury hotel with Mughal architecture."
    },
    {
        name: "Taj Exotica",
        location: "Goa",
        price: 9500,
        description: "Luxury beachfront resort."
    },
    {
        name: "The Oberoi",
        location: "Mumbai",
        price: 9000,
        description: "Luxury hotel with stunning views of the Arabian Sea."
    },
    {
        name: "The Leela",
        location: "Goa",
        price: 8500,
        description: "Beachfront hotel with beautiful views."
    },
    {
        name: "The Oberoi",
        location: "Bangalore",
        price: 8500,
        description: "Luxury hotel set amidst beautiful gardens."
    },
    {
        name: "The Oberoi",
        location: "New Delhi",
        price: 9500,
        description: "Luxury hotel with excellent facilities."
    },
    {
        name: "The Leela",
        location: "Udaipur",
        price: 8500,
        description: "Luxury hotel with views of Lake Pichola."
    },
    {
        name: "The Gateway Hotel",
        location: "Chennai",
        price: 6000,
        description: "Upscale hotel with modern amenities."
    },
    {
        name: "The Lalit",
        location: "Jaipur",
        price: 6500,
        description: "Elegant hotel with traditional Rajasthani decor."
    },
    {
        name: "The Gateway Hotel",
        location: "Madurai",
        price: 4500,
        description: "Hotel with a view of the Meenakshi Temple."
    },
    {
        name: "The Park",
        location: "Hyderabad",
        price: 5500,
        description: "Modern hotel located in the heart of the city."
    },
    {
        name: "The Leela Palace",
        location: "New Delhi",
        price: 9000,
        description: "Lavish hotel located in the diplomatic enclave of the capital."
    },
    {
        name: "Trident Hotel",
        location: "Jaipur",
        price: 6000,
        description: "Luxury hotel with views of the Mansagar Lake."
    },
    {
        name: "The Oberoi",
        location: "Mumbai",
        price: 9000,
        description: "Luxury hotel with stunning views of the Arabian Sea."
    },
    {
        name: "The Tamara",
        location: "Coorg",
        price: 6500,
        description: "Luxury resort set amidst coffee plantations."
    },
    {
        name: "Hyatt Regency",
        location: "Chennai",
        price: 5500,
        description: "Modern hotel with luxurious amenities."
    },
    {
        name: "The Lalit Grand Palace",
        location: "Srinagar",
        price: 8500,
        description: "Heritage property set in a beautiful garden."
    },
    {
        name: "The Gateway Hotel",
        location: "Varkala",
        price: 4500,
        description: "Beachfront hotel with stunning ocean views."
    },
    {
        name: "Le Meridien",
        location: "Pune",
        price: 6000,
        description: "Upscale hotel located in the heart of the city."
    },
    {
        name: "Vivanta by Taj",
        location: "Bangalore",
        price: 7500,
        description: "Contemporary hotel with excellent service."
    },
    {
        name: "The Windflower Resort",
        location: "Mysore",
        price: 5000,
        description: "Charming resort with lush gardens."
    },
    {
        name: "The Paul",
        location: "Bangalore",
        price: 8000,
        description: "Luxury boutique hotel with spacious suites."
    },
    {
        name: "The Fern",
        location: "Ahmedabad",
        price: 4000,
        description: "Eco-friendly hotel with modern amenities."
    },
    {
        name: "Sterling Ooty Fern Hill",
        location: "Ooty",
        price: 5500,
        description: "Beautiful resort set amidst rolling hills."
    },
    {
        name: "Fairmont",
        location: "Jaipur",
        price: 8500,
        description: "Luxury hotel with royal architecture."
    },
    {
        name: "Radisson Blu",
        location: "Jammu",
        price: 5000,
        description: "Comfortable hotel with modern amenities."
    },
    {
        name: "JW Marriott",
        location: "Kolkata",
        price: 9000,
        description: "Luxury hotel with excellent facilities."
    },
    {
        name: "Novotel",
        location: "Visakhapatnam",
        price: 6000,
        description: "Beachfront hotel with modern amenities."
    },
    {
        name: "The Gateway Hotel",
        location: "Madurai",
        price: 4500,
        description: "Hotel with a view of the Meenakshi Temple."
    },
    {
        name: "The Ritz-Carlton",
        location: "Bangalore",
        price: 10000,
        description: "Luxury hotel with world-class facilities."
    },
    {
        name: "Taj Mahal Palace",
        location: "Mumbai",
        price: 9500,
        description: "Iconic hotel with a rich history."
    },
    {
        name: "Evolve Back",
        location: "Hampi",
        price: 8000,
        description: "Luxury resort with stunning views of ancient ruins."
    },
    {
        name: "The Imperial",
        location: "New Delhi",
        price: 9000,
        description: "Heritage hotel with colonial architecture."
    },
    {
        name: "Neemrana Fort Palace",
        location: "Alwar",
        price: 7000,
        description: "Historical fort turned into a luxury hotel."
    },
    {
        name: "The Leela Kovalam",
        location: "Kovalam",
        price: 7500,
        description: "Beachfront hotel with panoramic sea views."
    },
    {
        name: "The Zuri Kumarakom",
        location: "Kumarakom",
        price: 7000,
        description: "Luxury resort on the banks of Vembanad Lake."
    },
    {
        name: "Wildflower Hall",
        location: "Shimla",
        price: 8500,
        description: "Luxury resort in the Himalayas."
    },
    {
        name: "Ananda in the Himalayas",
        location: "Rishikesh",
        price: 10000,
        description: "Luxury wellness retreat in the Himalayas."
    },
    {
        name: "The Tamara Kodai",
        location: "Kodaikanal",
        price: 7500,
        description: "Luxury resort set in the hills of Kodaikanal."
    },
    {
        name: "The Oberoi Cecil",
        location: "Shimla",
        price: 8000,
        description: "Heritage hotel with colonial charm."
    },
    {
        name: "The Fern Gir Forest Resort",
        location: "Gir",
        price: 6000,
        description: "Luxury resort near Gir National Park."
    },
    {
        name: "The Gateway Hotel Beach Road",
        location: "Calicut",
        price: 5000,
        description: "Beachfront hotel with beautiful views."
    },
    {
        name: "The Westin",
        location: "Hyderabad",
        price: 7000,
        description: "Upscale hotel with modern amenities."
    },
    {
        name: "Leela Palace",
        location: "Chennai",
        price: 9000,
        description: "Luxury hotel with stunning views of the Bay of Bengal."
    },
    {
        name: "The Claridges",
        location: "New Delhi",
        price: 7500,
        description: "Elegant hotel with a blend of old-world charm and modern amenities."
    },
    {
        name: "The Oberoi Vanyavilas",
        location: "Ranthambore",
        price: 9500,
        description: "Luxury tented camp near Ranthambore National Park."
    },
    {
        name: "The Lalit Laxmi Vilas Palace",
        location: "Udaipur",
        price: 7000,
        description: "Heritage property with views of Fateh Sagar Lake."
    },
    {
        name: "The Ummed",
        location: "Jodhpur",
        price: 6000,
        description: "Elegant hotel with traditional Rajasthani decor."
    },
    {
        name: "The Park",
        location: "Kolkata",
        price: 5500,
        description: "Modern hotel located in the heart of the city."
    },
    {
        name: "The Oberoi Grand",
        location: "Kolkata",
        price: 8500,
        description: "Heritage hotel with colonial architecture."
    },
    {
        name: "The Trident",
        location: "Mumbai",
        price: 8000,
        description: "Luxury hotel with views of Marine Drive."
    },
    {
        name: "Rambagh Palace",
        location: "Jaipur",
        price: 10000,
        description: "Former royal residence turned into a luxury hotel."
    },
    {
        name: "The Taj West End",
        location: "Bangalore",
        price: 8500,
        description: "Heritage hotel set in lush gardens."
    },
    {
        name: "The Oberoi Rajvilas",
        location: "Jaipur",
        price: 9500,
        description: "Luxury resort set amidst beautiful gardens."
    },
    {
        name: "The Lalit",
        location: "Mumbai",
        price: 7000,
        description: "Upscale hotel with modern amenities."
    },
    {
        name: "The Oberoi Udaivilas",
        location: "Udaipur",
        price: 9500,
        description: "Luxury resort on the banks of Lake Pichola."
    },
    {
        name: "The Westin Sohna Resort",
        location: "Gurgaon",
        price: 6000,
        description: "Luxury resort set in a tranquil environment."
    },
    {
        name: "The Leela Ambience",
        location: "Gurgaon",
        price: 8000,
        description: "Upscale hotel with modern amenities."
    },
    {
        name: "The Lalit Ashok",
        location: "Bangalore",
        price: 7000,
        description: "Elegant hotel with a blend of traditional and modern decor."
    },
    {
        name: "ITC Mughal",
        location: "Agra",
        price: 7500,
        description: "Luxury hotel with Mughal architecture."
    },
    {
        name: "Taj Exotica",
        location: "Goa",
        price: 9500,
        description: "Luxury beachfront resort."
    },
    {
        name: "The Oberoi",
        location: "Mumbai",
        price: 9000,
        description: "Luxury hotel with stunning views of the Arabian Sea."
    },
    {
        name: "The Leela",
        location: "Goa",
        price: 8500,
        description: "Beachfront hotel with beautiful views."
    },
    {
        name: "The Oberoi",
        location: "Bangalore",
        price: 8500,
        description: "Luxury hotel set amidst beautiful gardens."
    },
    {
        name: "The Oberoi",
        location: "New Delhi",
        price: 9500,
        description: "Luxury hotel with excellent facilities."
    },
    {
        name: "The Leela",
        location: "Udaipur",
        price: 8500,
        description: "Luxury hotel with views of Lake Pichola."
    },
    {
        name: "The Gateway Hotel",
        location: "Chennai",
        price: 6000,
        description: "Upscale hotel with modern amenities."
    },
    {
        name: "The Lalit",
        location: "Jaipur",
        price: 6500,
        description: "Elegant hotel with traditional Rajasthani decor."
    },
    {
        name: "The Gateway Hotel",
        location: "Madurai",
        price: 4500,
        description: "Hotel with a view of the Meenakshi Temple."
    },
    {
        name: "The Park",
        location: "Hyderabad",
        price: 5500,
        description: "Modern hotel located in the heart of the city."
    },
    {
        name: "The Leela Palace",
        location: "New Delhi",
        price: 9000,
        description: "Lavish hotel located in the diplomatic enclave of the capital."
    },
    {
        name: "Trident Hotel",
        location: "Jaipur",
        price: 6000,
        description: "Luxury hotel with views of the Mansagar Lake."
    }
];
const content = document.getElementById('content');

const renderHotelList = () => {
    const hotelListHTML = `
            <div class="hotel-list">
                ${data.map(hotel => `
                    <div class="hotel-card" data-id="${hotel.name}">
                        <img src="${hotel.Image}" alt="${hotel.name}" style="width:100%;height:150px;object-fit:cover;border-radius:8px;">
                      <div class="hotel-title">
                        <h3>${hotel.name}</h3>
                        <p>Location: ${hotel.location}</p>
                        <p>Price: ₹${hotel.price}</p>
                        <p>${hotel.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    content.innerHTML = hotelListHTML;

    document.querySelectorAll('.hotel-card').forEach(card => {
        card.addEventListener('click', event => {
            const hotelName = event.currentTarget.getAttribute('data-id');
            console.log(hotelName)
            renderHotelDetails(hotelName);
        });
    });
};

const renderHotelDetails = (hotelName) => {
    const hotel = data.find(h => h.name == hotelName);
    const hotelDetailsHTML = `
        <div class="hotel-details active">
            <h2>${hotel.name}</h2>
            <img src="${hotel.Image}" alt="${hotel.name}" >
            <p>Location: ${hotel.location}</p>
            <p>Price: ₹${hotel.price}</p>
            <p>${hotel.description}</p>
            <button id="back-btn"  class="btn btn-secondary">Back to List</button>
            <button id="pay-page" class="btn btn-primary">payment-page</button>
        </div>
    `;
    content.innerHTML = hotelDetailsHTML;

    document.getElementById('back-btn').addEventListener('click', () => {
        renderHotelList();
    });
    document.querySelector("#pay-page").addEventListener("click", event => {
        let paymentpage = event.currentTarget.getAttribute('data-id')
        console.log(paymentpage)
        paymemtOption(paymentpage)
    })

};


let paymemtOption = (paymentpage) => {
    const pay = data.find(val => val.name == paymentpage);
    const p = `
        <div id="payment-page">
            <div class="container">
            <div class="row">
            <div class="col-md-6">
            </div>
            <div class="col-md-6" id="pay">
                <h2 class="my-4">Payment Details</h2>
              
                <form id="payment-form">
          
                    <div class="mb-3">
                        <label for="card-number" class="form-label">Card Number</label>
                        <input type="text" class="form-control" id="card-number" placeholder="Enter card number" required>
                    </div>
                    <div class="mb-3">
                        <label for="expiry-date" class="form-label">Expiry Date</label>
                        <input type="text" class="form-control" id="expiry-date" placeholder="MM/YY" required>
                    </div>
                    <div class="mb-3">
                        <label for="cvv" class="form-label">CVV</label>
                        <input type="text" class="form-control" id="cvv" placeholder="CVV" required>
                    </div>
                    <div class="mb-3">
                        <label for="card-holder" class="form-label">Card Holder Name</label>
                        <input type="text" class="form-control" id="card-holder" placeholder="Enter card holder name" required>
                    </div>
                    <div class="mb-3">
                        <label for="amount" class="form-label">Amount (₹)</label>
                        <input type="number" class="form-control" id="amount" placeholder="Enter amount" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Pay Now</button>
                    <button type="button" class="btn btn-secondary ms-2" id="back-to-hotels">Back to Hotels</button>
                </form>
            </div>
            </div>
            </div>
        </div>
    `;

    content.innerHTML = p;

    document.getElementById('back-to-hotels').addEventListener('click', () => {
        renderHotelList();
    });

    document.getElementById('payment-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Payment submitted!');
    });
};
// paymemtOption()
// Initial render
renderHotelList();