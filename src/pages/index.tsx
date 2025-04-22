// 리뷰 분석 대시보드 메인 페이지
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head><title>Baskcation 리뷰 분석</title></Head>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>🎯 리뷰 분석 대시보드</h1>
        <p>브랜드별 리뷰 요약과 상품별 통계를 시각화합니다.</p>
      </main>
    </>
  );
}