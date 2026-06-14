const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Mock Database for Business Analytics
const analyticsData = {
    totalRevenue: "$1,250,000",
    activeUsers: 8430,
    monthlyGrowth: "+15%",
    revenueChart: [
        { month: "Jan", revenue: 4000 },
        { month: "Feb", revenue: 3000 },
        { month: "Mar", revenue: 5000 },
        { month: "Apr", revenue: 7000 }
    ]
};

// REST API Endpoint to get analytics
app.get('/api/analytics', (req, res) => {
    res.status(200).json({ success: true, data: analyticsData });
});

app.listen(PORT, () => {
    console.log(`Analytics Backend Server running on port ${PORT}`);
});

