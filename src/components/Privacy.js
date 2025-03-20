import React from "react";
import logo from "../assets/logo.svg";

const PrivacyPolicy = () => {
  const styles = {
    container: {
      backgroundColor: "#1e747866",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflowY: "scroll", // Enable scrolling
      scrollbarWidth: "none", // Hide scrollbar (for Firefox)
      msOverflowStyle: "none", // Hide scrollbar (for IE/Edge)
      textShadow: "0 0 1px grey",
    },
    content: {
      maxWidth: "800px",
      lineHeight: "1.6",
    },
    heading: {
      textAlign: "center",
      fontSize: "28px",
      textShadow: "2px 2px 4px rgba(255, 255, 255, 0.2)",
      marginBottom: "20px",
    },
    sectionTitle: {
      fontSize: "22px",
      marginTop: "20px",
      textShadow: "1px 1px 3px rgba(255, 255, 255, 0.3)",
    },
    paragraph: {
      fontSize: "16px",
      textShadow: "1px 1px 2px rgba(255, 255, 255, 0.2)",
    },
    list: {
      paddingLeft: "20px",
    },
    listItem: {
      marginBottom: "8px",
    },
    contact: {
      marginTop: "20px",
      fontSize: "16px",
      fontStyle: "italic",
      textShadow: "1px 1px 2px rgba(255, 255, 255, 0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img style={{display: "block", margin: "auto", padding: "5px"}} width="60" src={logo} alt="RomeVille logo" />
        <h1 style={styles.heading}>Privacy Policy</h1>

        <p>RomeVille is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our website, services, and offers.</p>

        <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
        <p style={styles.paragraph}>
          When you engage with us (such as by filling out a form, signing up for offers, or contacting us), we may collect the following types of information:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Name, phone number, and email address</li>
          <li style={styles.listItem}>Travel preferences and interests</li>
          <li style={styles.listItem}>Any other information you voluntarily provide</li>
        </ul>

        <h2 style={styles.sectionTitle}>2. How We Use Your Information</h2>
        <p style={styles.paragraph}>We use the collected information to:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Contact you about special deals, exclusive offers, and promotions</li>
          <li style={styles.listItem}>Improve our services based on customer preferences</li>
          <li style={styles.listItem}>Provide a better user experience by understanding your travel interests</li>
        </ul>

        <h2 style={styles.sectionTitle}>3. Data Sharing & Third Parties</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>We do not sell, rent, or share your personal information with third parties for their marketing purposes.</li>
          <li style={styles.listItem}>Your information is only used internally to enhance our services.</li>
        </ul>

        <h2 style={styles.sectionTitle}>4. Data Security</h2>
        <p style={styles.paragraph}>
          We take appropriate security measures to protect your data from unauthorized access, alteration, or misuse. However, no online platform is 100% secure, and we encourage users to take precautions when sharing personal information.
        </p>

        <h2 style={styles.sectionTitle}>5. Your Choices & Rights</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>You can opt out of receiving promotional messages at any time by clicking the unsubscribe link in emails or contacting us.</li>
          <li style={styles.listItem}>You may request access to, correction of, or deletion of your data by reaching out to us.</li>
        </ul>

        <h2 style={styles.sectionTitle}>6. Cookies & Tracking Technologies</h2>
        <p style={styles.paragraph}>
          We may use cookies or tracking tools to improve our website’s performance and enhance your experience. You can manage cookie preferences in your browser settings.
        </p>

        <h2 style={styles.sectionTitle}>7. Changes to This Privacy Policy</h2>
        <p style={styles.paragraph}>
          We may update this Privacy Policy from time to time. Any changes will be reflected on this page with the updated Effective Date.
        </p>

        <h2 style={styles.sectionTitle}>8. Contact Us</h2>
        <p style={styles.contact}>
          If you have any questions or concerns about this Privacy Policy, you can reach us at:
        </p>
        <br />
        <p>hello@romeville.com</p>
        <p>+91 701-899-6363</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;