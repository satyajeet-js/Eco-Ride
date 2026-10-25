function showPage(page) {

    let content = document.getElementById("content");

    // Dashboard
    if (page == "dashboard") {

        content.innerHTML = `
            <div class="page">
                <h1>Dashboard</h1>
                <p>Welcome to Eco-Ride!</p>

                <div class="cards">
                    <div class="card">
                        <h3>Total Rides</h3>
                        <h2>25</h2>
                    </div>

                    <div class="card">
                        <h3>Favourite Stations</h3>
                        <h2>5</h2>
                    </div>

                    <div class="card">
                        <h3>Total Distance</h3>
                        <h2>120 KM</h2>
                    </div>
                </div>
            </div>
        `;
    }



    // Ride History
    else if (page == "history") {

        content.innerHTML = `
            <div class="page">
                <h1>Ride History</h1>

                <table>
                    <tr>
                        <th>Date</th>
                        <th>Station</th>
                        <th>Duration</th>
                        <th>Amount</th>
                    </tr>

                    <tr>
                        <td>01 Oct 2026</td>
                        <td>Station 1</td>
                        <td>30 min</td>
                        <td>₹50</td>
                    </tr>

                    <tr>
                        <td>28 Sep 2026</td>
                        <td>Station 2</td>
                        <td>45 min</td>
                        <td>₹70</td>
                    </tr>
                </table>
            </div>
        `;
    }


    // Payment
    else if (page == "payment") {

        content.innerHTML = `
            <div class="page">
                <h1>Payment</h1>

                <div class="payment-box">
                    <h3>Payment Methods</h3>

                    <button class="payment-btn">
                        💳 Add Card
                    </button>

                    <button class="payment-btn">
                        UPI Payment
                    </button>
                </div>

                <h2>Payment History</h2>

                <p>No recent payments.</p>
            </div>
        `;
    }


    // Favourites
    else if (page == "favourites") {

        content.innerHTML = `
            <div class="page">
                <h1>Favourites</h1>

                <div class="station-box">
                    <h3>Station 1</h3>
                    <p>Near your location</p>
                    <button>View Station</button>
                </div>

                <div class="station-box">
                    <h3>Station 2</h3>
                    <p>City Center</p>
                    <button>View Station</button>
                </div>
            </div>
        `;
    }


    // Profile
    else if (page == "profile") {

        content.innerHTML = `
            <div class="page">
                <h1>My Profile</h1>

                <div class="profile-box">
                    <h3>User Profile</h3>

                    <p><b>Name:</b> User</p>
                    <p><b>Email:</b> user@example.com</p>
                    <p><b>Phone:</b> +91 XXXXX XXXXX</p>

                    <button>Edit Profile</button>
                </div>
            </div>
        `;
    }


    // Settings
    else if (page == "settings") {

        content.innerHTML = `
            <div class="page">
                <h1>Settings</h1>

                <div class="setting">
                    <label>
                        <input type="checkbox">
                        Notifications
                    </label>
                </div>

                <div class="setting">
                    <label>
                        <input type="checkbox">
                        Dark Mode
                    </label>
                </div>

                <div class="setting">
                    <label>
                        <input type="checkbox">
                        Location Services
                    </label>
                </div>
            </div>
        `;
    }
}