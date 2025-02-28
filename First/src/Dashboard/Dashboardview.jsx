import React, { useEffect, useRef } from "react";
import '../Dashboard/Dashboard-styles/Dashview.css'
import image1 from '../assets/Images/web shopping.png'
import Chart from "chart.js/auto";

function Dashboardview() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Check if the chart already exists and destroy it
    if (chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    // Create a new chart
    chartRef.current.chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: [12000, 15000, 17000, 14000, 19000, 22000],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
          },
        ],
      },
    });
  }, []);
  const products = [
    { name: "Body Lotion", price: "$15", date: "10 Feb 2025", status: "Available" },
    { name: "Computer Gadget", price: "$250", date: "05 Jan 2025", status: "Low Stock" },
    { name: "Sports Equipment", price: "$120", date: "22 Dec 2024", status: "Available" },
    { name: "Wrist Watch", price: "$80", date: "18 Nov 2024", status: "Out of Stock" },
    { name: "Women's Clothes", price: "$45", date: "02 Oct 2024", status: "Available" },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>Welcome, Admin</h2>
          <p>Your e-commerce system is fully operational!</p>
        </div>
        <div className="dashboard-section">
          <div><img src={image1} alt='Image1' className="img1-dashboard" /></div>
          <div className="first-second">
            <div className="first-pictures">
              <div className="first">
                <div className="total-first">Total sales</div>
                <h1>4006</h1>
                <div className="percentage-first">10%(25days)</div>
              </div>
              <div className="second">
                <div className="total-second">Total order</div>
                <h1>3400</h1>
                <div className="percentage-first">20%(25days)</div>
              </div>
            </div>
            <div className="second-pictures">
              <div className="third">
                <div className="total-customers">Total customers</div>
                <h1>23003</h1>
                <div className="percentage-customers">40%(90days)</div>
              </div>
              <div className="forth">
                <div className="total-products">Total products</div>
                <h1>23003</h1>
                <div className="percentage-products">40%(90days)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-container-two">
          <div className="order-details">
            <h2>Order Summary</h2>
            <p>Track recent orders and total revenue.</p>
            <div className="stats">
              <span>Total Revenue: <strong>$45,320</strong></span>
              <span>Orders: <strong>1,250</strong></span>
              <span>Active Users: <strong>4,580</strong></span>
              <span>Downloads: <strong>15,230</strong></span>
            </div>
          </div>
          <div className="sales-report">
            <h2>Sales Performance</h2>
            <p>Visual representation of sales data.</p>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
        <div className="ecommerce-reports">
  <h2> Reports</h2>
  <p className="total-revenue">$45,320</p>
  <p>Sales Performance Overview</p>
  <p>Track revenue, orders, and returns to measure business growth and customer engagement.</p>
  <div className="report-list">
    <div className="report-item"><span>Total Orders</span><span>1,250</span></div>
    <div className="report-item"><span>Active Customers</span><span>4,580</span></div>
    <div className="report-item"><span>Returns</span><span>320</span></div>
    <div className="report-item"><span>Revenue Growth</span><span>+12%</span></div>
    <div className="report-item"><span>New Customers</span><span>540</span></div>
  </div>
</div>    
    <div class=" Product-title">
      <h2>Top products</h2></div>
      <div class="Table-container">
     <table class="Dashboard-table">
     <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.date}</td>
                <td>
                  <span className={`badge ${product.status.replace(" ", "-").toLowerCase()}`}>
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
     </table>
      </div>
      </div>
    </div>
  );
}

export default Dashboardview;
