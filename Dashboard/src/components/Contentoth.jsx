import React from 'react';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';

// Sample Data
const data = [
  { month: 'Feb', netProfit: 75, revenue: 42 },
  { month: 'Mar', netProfit: 83, revenue: 54 },
  { month: 'Apr', netProfit: 98, revenue: 61 },
  { month: 'May', netProfit: 72, revenue: 55 },
  { month: 'Jun', netProfit: 91, revenue: 60 },
  { month: 'Jul', netProfit: 102, revenue: 68 },
  { month: 'Aug', netProfit: 85, revenue: 60 },
];

// Styled Components
const DashboardSection = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
  margin-left: 30%; /* Added margin-left */
`;

const ChartContainer = styled.div`
  height: 300px;
  margin-bottom: 20px;
`;

const MetricsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MetricCard = styled.div`
  text-align: left; /* Left Align Text */
  padding: 10px;
  border-radius: 5px;
  width: 200px; /* Adjust width for alignment */
`;

const MetricTitle = styled.h4`
  font-size: 14px; /* Smaller font size */
  margin-bottom: 5px;
  color: #777;
  text-align: left; /* Left Align Text */
`;

const MetricValue = styled.p`
  font-size: 18px; /* Smaller font size */
  font-weight: bold;
  color: #333;
  text-align: left; /* Left Align Text */
  margin-bottom: 5px;
`;

const MetricChange = styled.p`
  font-size: 12px; /* Smaller font size */
  color: ${(props) => (props.positive ? 'green' : 'red')};
  display: flex;
  align-items: center;
  text-align: left; /* Left Align Text */
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TimePeriodSelector = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

const ChartControls = styled.div`
  display: flex;
  align-items: center;
`;

const ControlButton = styled.button`
  background-color: transparent;
  border: 1px solid #ccc; /* Added border */
  padding: 5px 10px; /* Adjusted padding */
  margin-left: 5px;
  cursor: pointer;
  font-size: 14px; /* Adjusted font size */
  color: #777;
  border-radius: 5px; /* Added border radius */
`;

const CustomTooltip = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ChartLegendContainer = styled.div`
  text-align: left;
  margin-bottom: 10px;
  margin-left: 30%; /* Added margin-left */
`;

const ChartLegendItem = styled.span`
  display: inline-block;
  margin-right: 20px;
  font-size: 14px;
  color: #777;
  align-items: center; /* Vertically center content */
`;

const LegendColor = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

// Custom Tooltip Component
const CustomTooltipComponent = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltip>
        <p className="label">{`Month: ${label}`}</p>
        <p className="netProfit">{`Net Profit: $${payload[0].value}`}</p>
        <p className="revenue">{`Revenue: $${payload[1].value}`}</p>
      </CustomTooltip>
    );
  }
  return null;
};

const ChartLegend = () => {
  return (
    <ChartLegendContainer>
      <ChartLegendItem>
        <LegendColor color="#4285F4" />
        Net Profit
      </ChartLegendItem>
      <ChartLegendItem>
        <LegendColor color="#90CAF9" />
        Revenue
      </ChartLegendItem>
    </ChartLegendContainer>
  );
};

// Dashboard Component
const OverviewDashboard = () => {
  return (
    <DashboardSection>
      <HeaderContainer>
        <TimePeriodSelector>
          <option>Monthly</option>
          {/* Add more options as needed */}
        </TimePeriodSelector>
        <ChartControls>
          <ControlButton>
            <Icon>↘</Icon> {/* Download Icon */}
          </ControlButton>
          <ControlButton>
            <Icon>⛶</Icon> {/* Expand Icon */}
          </ControlButton>
          <ControlButton>
            <Icon>⋮</Icon> {/* More Options Icon */}
          </ControlButton>
        </ChartControls>
      </HeaderContainer>

      <ChartLegend />

      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomTooltipComponent />} />
            <Bar dataKey="netProfit" fill="#4285F4" barSize={20} />
            <Bar dataKey="revenue" fill="#90CAF9" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <MetricsContainer>
        <MetricCard>
          <MetricTitle>Total Sales</MetricTitle>
          <MetricValue>1,800</MetricValue>
          <MetricChange positive={false}>
            <Icon>↘</Icon> -245 (30.6%)
          </MetricChange>
        </MetricCard>
        <MetricCard>
          <MetricTitle>Revenue</MetricTitle>
          <MetricValue>$5667</MetricValue>
          <MetricChange positive={true}>
            <Icon>↗</Icon> +$2100 (30.6%)
          </MetricChange>
        </MetricCard>
        <MetricCard>
          <MetricTitle>Abandon Cart</MetricTitle>
          <MetricValue>128</MetricValue>
          <MetricChange positive={false}>
            <Icon>↔</Icon> -26 (5%)
          </MetricChange>
        </MetricCard>
        <MetricCard>
          <MetricTitle>Ads Spent</MetricTitle>
          <MetricValue>$2500</MetricValue>
          <MetricChange positive={true}>
            <Icon>↗</Icon> +$200 (10.6%)
          </MetricChange>
        </MetricCard>
      </MetricsContainer>
    </DashboardSection>
  );
};

export default OverviewDashboard;
