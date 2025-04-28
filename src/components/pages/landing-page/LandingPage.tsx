import React, { useEffect, useRef } from "react";
import { Button, Card, Row, Col, Divider, Statistic } from "antd";
import { useNavigate } from "react-router-dom";
import {
  FileTextOutlined,
  DownloadOutlined,
  StarOutlined,
  UserOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./LandingPage.scss";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll(".landing-section");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        // Calculate how far the section is through the viewport
        const sectionProgress =
          (scrollPosition - sectionTop + window.innerHeight) /
          (sectionHeight + window.innerHeight);

        // Apply different transformations based on scroll position
        if (sectionProgress > 0 && sectionProgress < 1) {
          // Opacity increases as we scroll into view
          sectionElement.style.opacity = Math.min(
            1,
            sectionProgress + 0.3
          ).toString();

          // Scale increases from 0.9 to 1 as we scroll
          const scale = 0.9 + 0.1 * Math.min(1, sectionProgress);
          sectionElement.style.transform = `scale(${scale})`;

          // Parallax effect for text elements
          const textElements =
            sectionElement.querySelectorAll(".parallax-text");
          textElements.forEach((text) => {
            const speed = 0.2;
            const yPos = (sectionProgress - 0.5) * speed * 100;
            (text as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set initial states

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCreateCV = () => {
    navigate("/create");
  };

  return (
    <div className="landing-page">
      <section className="landing-section hero">
        <div className="content">
          <h1 className="parallax-text">Create Your Professional CV</h1>
          <p className="parallax-text">
            Stand out from the crowd with a beautifully designed curriculum
            vitae that gets you noticed by employers
          </p>
          <div className="hero-buttons">
            <Button
              type="primary"
              size="large"
              onClick={handleCreateCV}
              className="hero-button"
              icon={<FileTextOutlined />}
            >
              Create My CV Now
            </Button>
            <Button
              size="large"
              className="hero-button secondary"
              onClick={() => navigate("/templates")}
            >
              View Templates
            </Button>
          </div>
          <div className="scroll-indicator">
            <div className="mouse"></div>
            <p>Scroll to learn more</p>
          </div>
        </div>
      </section>

      <section className="landing-section stats">
        <div className="content">
          <h2 className="parallax-text">Trusted by Thousands</h2>
          <Row gutter={[48, 24]} className="stats-row">
            <Col xs={24} sm={12} md={6}>
              <Statistic
                title="CVs Created"
                value={25000}
                prefix={<FileTextOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Statistic
                title="Downloads"
                value={18500}
                prefix={<DownloadOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Statistic
                title="Positive Reviews"
                value={4.8}
                suffix="/5"
                prefix={<StarOutlined />}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Statistic
                title="Happy Users"
                value={22000}
                prefix={<UserOutlined />}
              />
            </Col>
          </Row>
        </div>
      </section>

      <section className="landing-section features">
        <div className="content">
          <h2 className="parallax-text">Powerful Features</h2>
          <p className="parallax-text">
            Our intuitive interface makes CV creation a breeze. Just fill in
            your details and watch your professional CV come to life.
          </p>

          <Row gutter={[32, 32]} className="feature-cards">
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card">
                <ThunderboltOutlined className="feature-icon" />
                <h3>Quick Creation</h3>
                <p>
                  Create a professional CV in minutes with our streamlined
                  process
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card">
                <FileTextOutlined className="feature-icon" />
                <h3>Multiple Formats</h3>
                <p>
                  Download your CV as PDF, DOCX, or plain text to match any job
                  application requirements
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card">
                <UserOutlined className="feature-icon" />
                <h3>ATS-Friendly</h3>
                <p>
                  Our templates are optimized for applicant tracking systems to
                  maximize your chances
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card">
                <CheckCircleOutlined className="feature-icon" />
                <h3>Content Suggestions</h3>
                <p>
                  Get smart content recommendations for each section of your
                  resume
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card">
                <StarOutlined className="feature-icon" />
                <h3>Keyword Optimization</h3>
                <p>
                  Our tool helps you include relevant keywords to match job
                  descriptions
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card">
                <DownloadOutlined className="feature-icon" />
                <h3>Unlimited Downloads</h3>
                <p>
                  Create and download as many versions of your CV as you need
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <section className="landing-section templates">
        <div className="content">
          <h2 className="parallax-text">Professional Templates</h2>
          <p className="parallax-text">
            Choose from a variety of professional templates designed to impress
            recruiters and tailored for different industries and career levels.
          </p>

          <div className="template-showcase">
            <div className="template-card">
              <div className="template-preview template-1"></div>
              <h3>Professional</h3>
              <p>Clean and polished design for corporate environments</p>
            </div>
            <div className="template-card">
              <div className="template-preview template-2"></div>
              <h3>Creative</h3>
              <p>Stand out with a unique design for creative fields</p>
            </div>
            <div className="template-card">
              <div className="template-preview template-3"></div>
              <h3>Executive</h3>
              <p>Sophisticated layout for senior positions</p>
            </div>
          </div>

          <Button
            type="default"
            size="large"
            onClick={() => navigate("/templates")}
            className="view-all-button"
          >
            View All Templates
          </Button>
        </div>
      </section>

      <section className="landing-section testimonials">
        <div className="content">
          <h2 className="parallax-text">What Our Users Say</h2>
          <Row gutter={[32, 32]} className="testimonial-cards">
            <Col xs={24} md={8}>
              <Card className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  "I landed my dream job with a CV created using this tool. The
                  templates are professional and the interface is so easy to
                  use!"
                </p>
                <div className="testimonial-author">
                  <h4>Michael Johnson</h4>
                  <p>Software Developer</p>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  "The ATS optimization feature really helped my resume get
                  noticed. I got three interview calls within a week!"
                </p>
                <div className="testimonial-author">
                  <h4>Sarah Williams</h4>
                  <p>Marketing Specialist</p>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  "As a recent graduate, I didn't know where to start. This tool
                  guided me through creating a professional CV that highlighted
                  my potential."
                </p>
                <div className="testimonial-author">
                  <h4>David Chen</h4>
                  <p>Business Analyst</p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <section className="landing-section how-it-works">
        <div className="content">
          <h2 className="parallax-text">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choose a Template</h3>
              <p>
                Select from our range of professional templates designed for
                your industry
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Fill Your Details</h3>
              <p>
                Input your information with our user-friendly form and content
                suggestions
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Download & Apply</h3>
              <p>Get your perfectly formatted CV ready to send to employers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section cta">
        <div className="content">
          <h2 className="parallax-text">Ready to Create Your CV?</h2>
          <p className="parallax-text">
            Join thousands of job seekers who have successfully landed
            interviews with our CV generator
          </p>
          <Button
            type="primary"
            size="large"
            onClick={handleCreateCV}
            className="cta-button"
            icon={<FileTextOutlined />}
          >
            Create My CV Now
          </Button>
          <p className="no-credit-card">
            No credit card required. Get started in seconds.
          </p>
        </div>
      </section>

      <section className="landing-section faq">
        <div className="content">
          <h2 className="parallax-text">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is this service free?</h3>
              <p>
                Yes, our basic CV creation service is completely free. We also
                offer premium templates and features for advanced users.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I create multiple versions of my CV?</h3>
              <p>
                Absolutely! You can create unlimited versions of your CV to
                tailor for different job applications.
              </p>
            </div>
            <div className="faq-item">
              <h3>Are the templates ATS-friendly?</h3>
              <p>
                Yes, all our templates are optimized to pass through applicant
                tracking systems used by employers.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I download my CV?</h3>
              <p>
                Once you've completed your CV, simply click the download button
                and choose your preferred format (PDF, DOCX, etc).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
