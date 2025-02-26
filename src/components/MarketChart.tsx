"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    year: "2019",
    "North America": 0.4,
    "Asia Pacific": 0.2,
    Europe: 0.3,
    "Latin America": 0.1,
    "Middle East": 0.1,
  },
  {
    year: "2020",
    "North America": 0.5,
    "Asia Pacific": 0.25,
    Europe: 0.35,
    "Latin America": 0.12,
    "Middle East": 0.13,
  },
  {
    year: "2021",
    "North America": 0.6,
    "Asia Pacific": 0.3,
    Europe: 0.4,
    "Latin America": 0.15,
    "Middle East": 0.15,
  },
  {
    year: "2022",
    "North America": 0.8,
    "Asia Pacific": 0.35,
    Europe: 0.45,
    "Latin America": 0.18,
    "Middle East": 0.18,
  },
  {
    year: "2023",
    "North America": 0.9,
    "Asia Pacific": 0.4,
    Europe: 0.5,
    "Latin America": 0.2,
    "Middle East": 0.2,
  },
  {
    year: "2024",
    "North America": 1.1,
    "Asia Pacific": 0.45,
    Europe: 0.55,
    "Latin America": 0.22,
    "Middle East": 0.23,
  },
  {
    year: "2025",
    "North America": 1.3,
    "Asia Pacific": 0.5,
    Europe: 0.6,
    "Latin America": 0.25,
    "Middle East": 0.25,
  },
  {
    year: "2026",
    "North America": 1.5,
    "Asia Pacific": 0.6,
    Europe: 0.7,
    "Latin America": 0.3,
    "Middle East": 0.3,
  },
  {
    year: "2027",
    "North America": 1.8,
    "Asia Pacific": 0.7,
    Europe: 0.8,
    "Latin America": 0.35,
    "Middle East": 0.35,
  },
  {
    year: "2028",
    "North America": 2.1,
    "Asia Pacific": 0.8,
    Europe: 0.9,
    "Latin America": 0.4,
    "Middle East": 0.4,
  },
  {
    year: "2029",
    "North America": 2.5,
    "Asia Pacific": 0.9,
    Europe: 1.0,
    "Latin America": 0.45,
    "Middle East": 0.45,
  },
  {
    year: "2030",
    "North America": 2.9,
    "Asia Pacific": 1.0,
    Europe: 1.1,
    "Latin America": 0.5,
    "Middle East": 0.5,
  },
  {
    year: "2031",
    "North America": 3.4,
    "Asia Pacific": 1.2,
    Europe: 1.3,
    "Latin America": 0.6,
    "Middle East": 0.6,
  },
  {
    year: "2032",
    "North America": 4.0,
    "Asia Pacific": 1.4,
    Europe: 1.5,
    "Latin America": 0.7,
    "Middle East": 0.7,
  },
]

const colors = {
  "North America": "#64B5F6",
  "Asia Pacific": "#9E9E9E",
  Europe: "#1976D2",
  "Latin America": "#616161",
  "Middle East": "#424242",
}

export function MarketChart() {
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
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="year" stroke="#ccc" tick={{ fill: "#ccc" }} tickLine={{ stroke: "#ccc" }} />
          <YAxis
            stroke="#ccc"
            tick={{ fill: "#ccc" }}
            tickLine={{ stroke: "#ccc" }}
            label={{
              value: "USD Billion",
              angle: -90,
              position: "insideLeft",
              fill: "#ccc",
              style: { textAnchor: "middle" },
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#222",
              border: "1px solid #444",
              color: "#fff",
            }}
          />
          <Legend verticalAlign="bottom" height={36} wrapperStyle={{ paddingTop: "20px" }} />
          <Bar dataKey="North America" stackId="a" fill={colors["North America"]} />
          <Bar dataKey="Asia Pacific" stackId="a" fill={colors["Asia Pacific"]} />
          <Bar dataKey="Europe" stackId="a" fill={colors["Europe"]} />
          <Bar dataKey="Latin America" stackId="a" fill={colors["Latin America"]} />
          <Bar dataKey="Middle East" stackId="a" fill={colors["Middle East"]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

