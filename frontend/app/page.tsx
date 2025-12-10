"use client";

import { useState } from "react";

export default function Home() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const MAX_SIZE_MB = 5;

  const validateFile = (f) => {
    if (!f.name.endsWith(".mdx")) {
      alert("Only .mdx files are allowed.");
      return false;
    }
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      alert(`File too large. Max ${MAX_SIZE_MB} MB.`);
      return false;
    }
    return true;
  };

  const uploadFile = async (f) => {
    setUploading(true);

    const formData = new FormData();
    formData.append("file", f);

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      console.log("Upload response:", text);
      alert(text);
      alert("File uploaded. Agent started.");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload file");
    } finally {
      setUploading(false);
    }
  };

  const handleFile = (f) => {
    if (!validateFile(f)) return;
    setFile(f); // store the file only
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const f = e.dataTransfer?.files?.[0];
    if (f) handleFile(f);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        color: "#eee",
        padding: "2rem",
      }}
    >
      <h1 style={{ marginBottom: "2rem", fontSize: "2rem" }}>Manicule Agent</h1>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragging(false);
        }}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
        style={{
          border: "2px dashed #555",
          borderRadius: "10px",
          padding: "3rem",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
          backgroundColor: dragging ? "#333" : "#2c2c2c",
          cursor: "pointer",
        }}
      >
        {file ? <p>Selected: {file.name}</p> : <p>Drag or click to select .mdx file</p>}
      </div>

      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        accept=".mdx"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {file && (
        <>
          <p style={{ marginTop: "1rem", color: "#aaa" }}>
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>

          {/* 🔥 Note for small MDX files */}
          <p style={{ marginTop: "0.3rem", color: "#777", fontSize: "0.85rem" }}>
            Note: MDX files are usually very small, so you may see 0.00 MB.
          </p>
        </>
      )}

      {/* 🔥 Button changes color when file is selected */}
      <button
        disabled={!file || uploading}
        onClick={() => uploadFile(file)}
        style={{
          marginTop: "2rem",
          padding: "0.8rem 1.5rem",
          backgroundColor: uploading
            ? "#555"
            : file
            ? "#0077ff" // bright blue when file selected
            : "#333", // dark disabled state
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: !file || uploading ? "not-allowed" : "pointer",
          opacity: uploading ? 0.7 : 1,
          transition: "background-color 0.2s ease",
        }}
      >
        {uploading ? "Uploading..." : "Start Agent"}
      </button>
    </div>
  );
}
