import React from "react";
import styled from 'styled-components';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import OverviewDashboard from './Dashboardview';

// Sample Data (Replace with your actual data)
const newOrdersData = [
  { name: '1', value: 25 },
  { name: '2', value: 45 },
  { name: '3', value: 75 },
  { name: '4', value: 55 },
  { name: '5', value: 90 },
  { name: '6', value: 70 },
  { name: '7', value: 50 },
  { name: '8', value: 30 },
  { name: '9', value: 40 },
  { name: '10', value: 20 },
  { name: '11', value: 35 },
  { name: '12', value: 25 },
  { name: '13', value: 30 },
  { name: '14', value: 40 },
];

const newUsersData = [
  { name: '1', value: 20 },
  { name: '2', value: 35 },
  { name: '3', value: 40 },
  { name: '4', value: 30 },
  { name: '5', value: 25 },
  { name: '6', value: 30 },
  { name: '7', value: 35 },
  { name: '8', value: 40 },
  { name: '9', value: 35 },
  { name: '10', value: 30 },
  { name: '11', value: 35 },
  { name: '12', value: 25 },
  { name: '13', value: 20 },
  { name: '14', value: 30 },
];

const visitorsData = [
  { name: '1', value: 30 },
  { name: '2', value: 25 },
  { name: '3', value: 35 },
  { name: '4', value: 30 },
  { name: '5', value: 20 },
  { name: '6', value: 25 },
  { name: '7', value: 30 },
  { name: '8', value: 35 },
  { name: '9', value: 40 },
  { name: '10', value: 35 },
  { name: '11', value: 30 },
  { name: '12', value: 25 },
  { name: '13', value: 30 },
  { name: '14', value: 35 },
];

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: #f5f8fa;
  justify-content: flex-start;
  margin-left: 30%; /* Added margin left 30% */
  width: 70%; /* Adjust the width to accommodate the margin */
  max-width: 1200px;
  margin-right: auto; /* Keep centered with the margin */
  margin-top: 0;
  margin-bottom: 0;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #333;
`;

const TimePeriodSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const TimePeriodSelect = styled.select`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

const DataVisualization = styled.div`
  height: 100px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DataValue = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const DataChange = styled.p`
  font-size: 14px;
  color: ${(props) => (props.dataChangePositive ? 'green' : 'red')};
`;

const ViewMoreButton = styled.button`
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropboxCard = styled(Card)`
  background-color: #2c3e50;
  color: white;
  position: relative;
  overflow: hidden;
`;

const DropboxCloudIcon = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.5);
`;

const DropboxStorageText = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 500;
  color: white;
  z-index: 1;
`;

const DropboxStorageValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  z-index: 1;
`;

const DropboxStorageUsage = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 15px;
  z-index: 1;
`;

const DropboxStorageBar = styled.div`
  height: 10px;
  width: 100%;
  background: linear-gradient(
    to right,
    red 20%,
    orange 30%,
    yellow 40%,
    lightblue 60%,
    green 80%
  );
  border-radius: 5px;
  z-index: 1;
`;

const DropboxGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.0) 80%
  );
  z-index: 0;
`;

const BalanceCard = styled.div`
  background-color: #3498db;
  color: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BalanceTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
  color: white;
`;

const BalanceValue = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const TransferIcon = styled.span`
  font-size: 24px;
  align-self: flex-end;
  cursor: pointer;
`;

const Dashboard = () => {
  const dashboardData = [
    {
      title: 'New Orders',
      timePeriodOptions: ['Monthly', 'Weekly', 'Daily'],
      dataValue: '$30200',
      dataChange: 30.6,
      dataChangePositive: true,
      renderChart: () => (
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={newOrdersData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" hide={true} />
            <YAxis hide={true} />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <Bar dataKey="value" fill="#64B5F6" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: 'New Users',
      timePeriodOptions: ['Monthly', 'Weekly', 'Daily'],
      dataValue: '$30200',
      dataChange: 30.6,
      dataChangePositive: true,
      renderChart: () => (
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={newUsersData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" hide={true} />
            <YAxis hide={true} />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <Line type="monotone" dataKey="value" stroke="#26A69A" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: 'Visitors',
      timePeriodOptions: ['Monthly', 'Weekly', 'Daily'],
      dataValue: '$30200',
      dataChange: 30.6,
      dataChangePositive: false,
      renderChart: () => (
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={visitorsData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" hide={true} />
            <YAxis hide={true} />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <Line type="monotone" dataKey="value" stroke="#FBC02D" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
  ];

  return (
    <div>
    <DashboardContainer>
      {dashboardData.map((item) => (
        <Card key={item.title}>
          <CardTitle>{item.title}</CardTitle>
          <TimePeriodSelector>
            <TimePeriodSelect>
              {item.timePeriodOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TimePeriodSelect>
          </TimePeriodSelector>
          <DataVisualization>{item.renderChart()}</DataVisualization>
          <DataValue>{item.dataValue}</DataValue>
          <DataChange dataChangePositive={item.dataChangePositive}>
            {item.dataChangePositive ? '↗' : '↘'} {item.dataChange}%
          </DataChange>
          <ViewMoreButton>View more</ViewMoreButton>
        </Card>
      ))}

      <DropboxCard>
        <DropboxCloudIcon>
          ☁
        </DropboxCloudIcon>
        <DropboxStorageText>Dropbox Storage</DropboxStorageText>
        <DropboxStorageValue>150GB</DropboxStorageValue>
        <DropboxStorageUsage>134,2GB of 150GB Users</DropboxStorageUsage>
        <DropboxStorageBar />
        <DropboxGradient />
      </DropboxCard>

      <BalanceCard>
        <BalanceTitle>Available Balance</BalanceTitle>
        <BalanceValue>$1,234.90</BalanceValue>
        <TransferIcon> ⇆ </TransferIcon>
      </BalanceCard>
    </DashboardContainer>
    <div>
    <OverviewDashboard/>  
    </div>
    
        
    </div>
  );
};
export default Dashboard;
