import "chart.js/auto";
import { Line } from "react-chartjs-2";
import moment from "moment";

const LineChart = ({ coinHistory, currentPrice, coinName, coinColor }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.length; i++) {
    coinPrice.push(coinHistory[i]?.price);
  }

  for (let i = 0; i < coinHistory?.length; i++) {
    coinTimestamp.push(
      moment(coinHistory[i]?.timestamp * 1000).format("DD/MM/YYYY")
    );
  }

  coinPrice.reverse();
  coinTimestamp.reverse();

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `${coinName} Price in USD`,
        data: coinPrice,
        fill: false,
        backgroundColor: "#ff8100",
        borderColor: "#0e0e0e",
        // backgroundColor: '#ff8100',
        // borderColor: '#0e0e0e',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="w-11/12 h-auto flex items-center justify-center mt-5">
      <Line data={data} />
    </div>
  );
};

export default LineChart;
