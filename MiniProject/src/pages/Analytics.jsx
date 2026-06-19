import Sidebar from "../components/Sidebar";
import PageWrapper from "../components/PageWrapper";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const Analytics = () => {

  const productData = [
    {
      name: "Laptop",
      value: 40,
    },
    {
      name: "Smartphone",
      value: 25,
    },
    {
      name: "Gaming PC",
      value: 20,
    },
    {
      name: "Car",
      value: 15,
    },
  ];

  const storageData = [
    {
      storage: "128GB",
      users: 10,
    },
    {
      storage: "256GB",
      users: 20,
    },
    {
      storage: "512GB",
      users: 40,
    },
    {
      storage: "1TB",
      users: 30,
    },
  ];

  const COLORS = [
    "#6366f1",
    "#8b5cf6",
    "#06b6d4",
    "#14b8a6",
  ];

  return (
    <PageWrapper>
      <div className="flex min-h-screen bg-slate-950 text-white">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-10">
            Analytics Dashboard
          </h1>

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-6 mb-10">

            <div className="glass p-6 rounded-xl">
              <h3>Total Users</h3>

              <p className="text-3xl font-bold mt-2">
                1,250
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3>Products</h3>

              <p className="text-3xl font-bold mt-2">
                4
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3>Saved Builds</h3>

              <p className="text-3xl font-bold mt-2">
                320
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3>Revenue</h3>

              <p className="text-3xl font-bold mt-2">
                ₹18L
              </p>
            </div>

          </div>

          {/* Charts */}

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="glass p-6 rounded-xl">

              <h2 className="text-2xl font-bold mb-6">
                Product Popularity
              </h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >
                <PieChart>

                  <Pie
                    data={productData}
                    dataKey="value"
                    outerRadius={100}
                  >
                    {productData.map(
                      (entry, index) => (
                        <Cell
                          key={index}
                          fill={
                            COLORS[
                              index %
                                COLORS.length
                            ]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip />

                </PieChart>
              </ResponsiveContainer>

            </div>

            <div className="glass p-6 rounded-xl">

              <h2 className="text-2xl font-bold mb-6">
                Storage Preferences
              </h2>

              <ResponsiveContainer
                width="100%"
                height={300}
              >
                <BarChart
                  data={storageData}
                >
                  <XAxis
                    dataKey="storage"
                  />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="users"
                    fill="#6366f1"
                  />
                </BarChart>
              </ResponsiveContainer>

            </div>

          </div>

        </main>

      </div>
    </PageWrapper>
  );
};

export default Analytics;