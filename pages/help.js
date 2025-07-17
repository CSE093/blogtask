export default function HelpPage() {
  return (
    <main
      style={{
        padding: '50px 20px',
        backgroundColor: '#fefefe',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#2c2c2c',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
        }}
      >
        <h1
          style={{
            fontSize: '38px',
            fontWeight: '600',
            marginBottom: '15px',
            textAlign: 'center',
            color: '#1b5e20',
          }}
        >
          Help & Support
        </h1>

        <p
          style={{
            textAlign: 'center',
            fontSize: '18px',
            marginBottom: '40px',
            color: '#555',
            lineHeight: '1.6',
          }}
        >
          Whether you&apos;re discovering new dishes, posting your favorite recipes,
          or following your favorite authors — we&apos;re here to make your experience
          smooth and enjoyable.
        </p>

        <section style={{ marginBottom: '50px' }}>
          <h2
            style={{
              fontSize: '24px',
              borderBottom: '2px solid green',
              paddingBottom: '10px',
              marginBottom: '25px',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ fontSize: '17px', lineHeight: '1.8' }}>
            <p>
              <strong>How can I submit my own recipe?</strong><br />
              Use the “Share Your Recipe” page in the menu. Fill in the details and
              add images — our team will review and publish it.
            </p>
            <p>
              <strong>Can I upload photos with my blog post?</strong><br />
              Yes! Simply use the image upload feature in the blog editor to showcase
              your dishes.
            </p>
            <p>
              <strong>How do I follow a chef or author?</strong><br />
              Click the author&apos;s name below a post, then click “Follow” to stay updated
              on their latest work.
            </p>
            <p>
              <strong>I&apos;m not receiving update emails. What should I do?</strong><br />
              Please check your spam folder. You can also visit your account settings
              to manage notification preferences.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2
            style={{
              fontSize: '24px',
              borderBottom: '2px solid green',
              paddingBottom: '10px',
              marginBottom: '20px',
            }}
          >
            Contact Our Team
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.6' }}>
            We&apos;re here to assist you. For support, partnership inquiries, or feedback, get
            in touch via:
          </p>
          <ul style={{ fontSize: '17px', lineHeight: '1.8', marginTop: '10px', paddingLeft: '20px' }}>
            <li>
              Email: <a href="mailto:hello@foodblogapp.com" style={{ color: '#1565c0' }}>hello@foodblogapp.com</a>
            </li>
            <li>
              Phone: <a href="tel:+919876543210" style={{ color: '#1565c0' }}>+91 98765 43210</a>
            </li>
            <li>
              Instagram: <a href="https://instagram.com/foodblogapp" target="_blank" style={{ color: '#1565c0' }}>@foodblogapp</a>
            </li>
          </ul>
        </section>

        <section>
          <h2
            style={{
              fontSize: '24px',
              borderBottom: '2px solid green',
              paddingBottom: '10px',
              marginBottom: '20px',
            }}
          >
            Feedback & Suggestions
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.6' }}>
            We&apos;re always looking to improve. If you have suggestions, feature requests, or any
            issues, feel free to reach out. Your feedback helps shape the future of this platform.
          </p>
        </section>
      </div>
    </main>
  );
}
