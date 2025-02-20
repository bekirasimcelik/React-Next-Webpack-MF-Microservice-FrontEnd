import dynamic from "next/dynamic";
import { Button, Typography, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

// Navbar'ı dinamik olarak yükle (Server-Side Rendering kapalı)
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Navbar */}
      <Navbar />

      {/* Hoş Geldiniz Bölümü (Hero Section) */}
      <div
        style={{
          background: "linear-gradient(to right, #007AFF, #00C6FF)",
          color: "#fff",
          padding: "80px 20px",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography.Title level={1} style={{ color: "#fff" }}>
          Welcome to Our Store
        </Typography.Title>
        <Typography.Text style={{ fontSize: "18px", color: "#f0f0f0" }}>
          Discover the best products at the best prices.
        </Typography.Text>

        {/* Butonlar */}
        <Space style={{ marginTop: "20px" }}>
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            onClick={() => (window.location.href = "/remote-next")}
          >
            Shop Now
          </Button>
          <Button size="large" onClick={() => (window.location.href = "/categories")}>
            Explore Categories
          </Button>
        </Space>
      </div>
    </div>
  );
}
