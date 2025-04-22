
import Head from "next/head";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import data from "../data/summary.json";

const brands = [...new Set(data.map((item) => item.brand || "기타"))];

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState("모그라미");

  const filteredData = data.filter(item => item.brand === selectedBrand);

  return (
    <>
      <Head><title>리뷰 분석 대시보드</title></Head>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>🎯 리뷰 분석 대시보드</h1>
        <div style={{ marginBottom: "1rem" }}>
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              style={{
                marginRight: "0.5rem",
                padding: "0.5rem 1rem",
                background: brand === selectedBrand ? "#0070f3" : "#f0f0f0",
                color: brand === selectedBrand ? "#fff" : "#333",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              {brand}
            </button>
          ))}
        </div>

        <h2>📦 상품별 리뷰 수 및 평점</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData}>
            <XAxis dataKey="product_name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="리뷰수" fill="#8884d8" />
            <Bar dataKey="평균평점" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <h2>🎭 긍/부정 리뷰 비율</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData}>
            <XAxis dataKey="product_name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="긍정비율" fill="#4CAF50" />
            <Bar dataKey="부정비율" fill="#F44336" />
          </BarChart>
        </ResponsiveContainer>
      </main>
    </>
  );
}
