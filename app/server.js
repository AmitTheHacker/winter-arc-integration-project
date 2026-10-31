const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Home Page Endpoint 
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DevOps Winter Arc</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #0f172a;
                    color: #f8fafc;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background-color: #1e293b;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
                    text-align: center;
                    max-width: 500px;
                    border: 1px solid #334155;
                }
                h1 { color: #38bdf8; margin-bottom: 10px; }
                p { color: #94a3b8; font-size: 1.1rem; }
                .badge {
                    background-color: #0ea5e9;
                    color: white;
                    padding: 5px 12px;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    font-weight: bold;
                }
                .status-btn {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #22c55e;
                    color: white;
                    text-decoration: none;
                    border-radius: 6px;
                    font-weight: 500;
                }
                .status-btn:hover { background-color: #16a34a; }
            </style>
        </head>
        <body>
            <div class="card">
                <span class="badge">Day 30/90</span>
                <h1>DevOps Winter Arc ❄️</h1>
                <p>Integration Project Web Application is running successfully!</p>
                <p style="font-size: 0.9rem; color: #64748b;">Created by: Amit Mishra</p>
                <a href="/health" class="status-btn">Check App Health 🩺</a>
            </div>
        </body>
        </html>
    `);
});

// 2. Health Endpoint 
app.get('/health', (req, res) => {
    res.status(200).json({
        status: "UP",
        environment: "Local-Linux",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// for start the server
app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`🚀 Server is flying high on http://localhost:${PORT}`);
    console.log(`🩺 Health check route ready at http://localhost:${PORT}/health`);
    console.log(`=================================================`);
});
