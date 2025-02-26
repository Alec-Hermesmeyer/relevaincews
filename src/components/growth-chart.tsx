"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    year: "Year 1",
    "Enterprise Client": 0,
    "Mid-Tier Client": 0,
    "Small Tier Client": 0,
    total: 0,
  },
  {
    year: "Year 2",
    "Enterprise Client": 5.0,
    "Mid-Tier Client": 3.3,
    "Small Tier Client": 0,
    total: 8.3,
  },
  {
    year: "Year 3",
    "Enterprise Client": 10.0,
    "Mid-Tier Client": 6.8,
    "Small Tier Client": 1.2,
    total: 18.0,
  },
  {
    year: "Year 4",
    "Enterprise Client": 14.0,
    "Mid-Tier Client": 11.0,
    "Small Tier Client": 2.3,
    total: 27.3,
  },
]

const colors = {
  "Enterprise Client": "#1a56db",
  "Mid-Tier Client": "#9ca3af",
  "Small Tier Client": "#e5e7eb",
}

export function GrowthChart() {
  return (
    <div className="w-full aspect-[16/9] mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" horizontal={true} vertical={false} />
          <XAxis
            dataKey="year"
            stroke="#ccc"
            tick={{ fill: '#ccc' }}
            tickLine={{ stroke: '#ccc' }}
          />
          <YAxis
            stroke="#ccc"
            tick={{ fill: '#ccc' }}
            tickLine={{ stroke: '#ccc' }}
            domain={[0, 30]}
            ticks={[0, 5, 10, 15, 20, 25, 30]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#222',
              border: '1px solid #444',
              color: '#fff',
            }}
            formatter={(value: number) => [`${value.toFixed(1)}`, '']}
          />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{
              paddingBottom: '20px',
            }}
          />
          <Bar
            dataKey="Enterprise Client"
            stackId="a"
            fill={colors["Enterprise Client"]}
            name="Enterprise Client ($600K/Yr)"
          />
          <Bar
            dataKey="Mid-Tier Client"
            stackId="a"
            fill={colors["Mid-Tier Client"]}
            name="Mid-Tier Client ($80K/Yr)"
          />
          <Bar
            dataKey="Small Tier Client"
            stackId="a"
            fill={colors["Small Tier Client"]}
            name="Small Tier Client ($5K/Yr)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
