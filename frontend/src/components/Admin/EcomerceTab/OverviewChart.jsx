import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 600 },
    { name: "Mar", value: 800 },
    { name: "Apr", value: 650 },
    { name: "May", value: 900 },
    { name: "Jun", value: 750 },
    { name: "Jul", value: 1000 },
    { name: "Aug", value: 850 },
    { name: "Sep", value: 850 },
    { name: "Nov", value: 850 },
    { name: "Dec", value: 850 },
  ];
  
  const OverviewChart = () => {
    return (
      <div className="bg-[#0E1628]  p-6  rounded-xl border border-[#334155] shadow-md w-[700px] h-[370px]">
        <h2 className="text-white text-lg font-semibold mb-4">Overview</h2>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
  
            <XAxis dataKey="name" stroke="#ffffff80" />
            <YAxis stroke="#ffffff80" />
            <CartesianGrid strokeDasharray="3 3" stroke="#1E2A47" />
            <Tooltip contentStyle={{ backgroundColor: "#151F34", borderColor: "#1E2A47", color: "#fff" }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              fillOpacity={1}
              fill="url(#colorWave)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default OverviewChart;
  