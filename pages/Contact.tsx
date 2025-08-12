import { useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

interface ContactProps {
  language: "en" | "pt";
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.section`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 80vh;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.text};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FormSection = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text}10;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 10px ${({ theme }) => theme.text}05;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ theme }) => theme.text}10;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.text}70;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  opacity: 0.9;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.text}20;
  border-radius: 8px;
  background: ${({ theme }) => theme.text}05;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.text}40;
    background: ${({ theme }) => theme.text}08;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.text}10;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text}60;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.text}20;
  border-radius: 8px;
  background: ${({ theme }) => theme.text}05;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.text}40;
    background: ${({ theme }) => theme.text}08;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.text}10;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text}60;
  }
`;

const SubmitButton = styled.button<{
  $isSubmitting: boolean;
  $isSuccess: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: ${({ theme, $isSuccess }) =>
    $isSuccess ? "#22c55e" : theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.text}30;

    &::before {
      left: 100%;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover:not(:disabled) svg {
    transform: translateX(2px);
  }
`;

const ContactCard = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text}10;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 10px ${({ theme }) => theme.text}05;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ theme }) => theme.text}10;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.text}05;
  border: 1px solid ${({ theme }) => theme.text}10;
  border-radius: 8px;
  transition: all 0.2s ease;
  animation: ${slideIn} 0.6s ease-out;

  &:hover {
    background: ${({ theme }) => theme.text}08;
    transform: translateX(5px);
  }

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text}70;
  }
`;

const ContactInfo = styled.div`
  flex: 1;

  .label {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.text}70;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  .value {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
  }
`;

const SocialSection = styled.div`
  margin-top: 1.5rem;
`;

const SocialLabel = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text}70;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.text}06;
    border: 1px solid ${({ theme }) => theme.text}12;
    border-radius: 12px;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 1.2rem;

    &[href*="github.com"] {
      &:hover {
        background: rgba(139, 92, 246, 0.1);
        border-color: rgba(139, 92, 246, 0.3);
        color: #8b5cf6;
        box-shadow: 0 6px 20px rgba(139, 92, 246, 0.2);
        transform: translateY(-3px) scale(1.05);
      }
    }

    &[href*="linkedin.com"] {
      &:hover {
        background: rgba(0, 119, 181, 0.1);
        border-color: rgba(0, 119, 181, 0.3);
        color: #0077b5;
        box-shadow: 0 6px 20px rgba(0, 119, 181, 0.2);
        transform: translateY(-3px) scale(1.05);
      }
    }

    &[href*="instagram.com"] {
      &:hover {
        background: linear-gradient(
          45deg,
          rgba(225, 48, 108, 0.1),
          rgba(255, 101, 48, 0.1)
        );
        border-color: rgba(225, 48, 108, 0.3);
        color: #e1306c;
        box-shadow: 0 6px 20px rgba(225, 48, 108, 0.2);
        transform: translateY(-3px) scale(1.05);
      }
    }

    &[href*="twitter.com"] {
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        border-color: rgba(0, 0, 0, 0.3);
        color: #333;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-3px) scale(1.05);
      }
    }
  }
`;

const StatusMessage = styled.div<{ $type: "success" | "error" }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${({ $type }) =>
    $type === "success" ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)"};
  border: 1px solid
    ${({ $type }) =>
      $type === "success"
        ? "rgba(34, 197, 94, 0.3)"
        : "rgba(239, 68, 68, 0.3)"};
  border-radius: 8px;
  color: ${({ $type }) => ($type === "success" ? "#22c55e" : "#ef4444")};
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1rem;
  animation: ${fadeIn} 0.3s ease-out;

  svg {
    font-size: 1.1rem;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const translations = {
  en: {
    title: "Contact",
    subtitle: "Let's work together",
    form: {
      title: "Send Message",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project or just say hi!",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    info: {
      title: "Get in Touch",
      email: "Email",
      phone: "Phone",
      social: "Social Media",
    },
  },
  pt: {
    title: "Contato",
    subtitle: "Vamos trabalhar juntos",
    form: {
      title: "Enviar Mensagem",
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "seu.email@exemplo.com",
      message: "Mensagem",
      messagePlaceholder: "Conte-me sobre seu projeto ou apenas diga olá!",
      submit: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Falha ao enviar mensagem. Tente novamente.",
    },
    info: {
      title: "Entre em Contato",
      email: "Email",
      phone: "Telefone",
      social: "Redes Sociais",
    },
  },
};

const EMAILJS_SERVICE_ID = "service_0kud9gk";
const EMAILJS_TEMPLATE_ID = "template_7r5lch9";
const EMAILJS_PUBLIC_KEY = "di583i_8bUipUVcUu";

emailjs.init(EMAILJS_PUBLIC_KEY);

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const t = translations[language];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const now = new Date();
      const timeFormatted = now.toLocaleString(
        language === "pt" ? "pt-BR" : "en-US",
        {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        }
      );

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: timeFormatted,
        to_name: "Leonardo",
      };

      console.log("Enviando email com parâmetros:", templateParams);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Header>
        <Title>{t.title}</Title>
        <Subtitle>{t.subtitle}</Subtitle>
      </Header>

      <Content>
        <FormSection>
          <SectionHeader>
            <FiMessageSquare />
            <h2>{t.form.title}</h2>
          </SectionHeader>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">{t.form.name}</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t.form.namePlaceholder}
                required
                disabled={isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">{t.form.email}</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.form.emailPlaceholder}
                required
                disabled={isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">{t.form.message}</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.form.messagePlaceholder}
                required
                disabled={isSubmitting}
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              $isSubmitting={isSubmitting}
              $isSuccess={status === "success"}
            >
              {isSubmitting ? (
                <>
                  <FiSend />
                  {t.form.sending}
                </>
              ) : status === "success" ? (
                <>
                  <FiCheck />
                  {t.form.success}
                </>
              ) : (
                <>
                  <FiSend />
                  {t.form.submit}
                </>
              )}
            </SubmitButton>

            {status === "success" && (
              <StatusMessage $type="success">
                <FiCheck />
                {t.form.success}
              </StatusMessage>
            )}

            {status === "error" && (
              <StatusMessage $type="error">
                <FiAlertCircle />
                {t.form.error}
              </StatusMessage>
            )}
          </Form>
        </FormSection>

        <ContactInfoSection>
          <ContactCard>
            <SectionHeader>
              <FiUser />
              <h2>{t.info.title}</h2>
            </SectionHeader>

            <ContactItem>
              <FiMail />
              <ContactInfo>
                <div className="label">{t.info.email}</div>
                <div className="value">leo11.contato@gmail.com</div>
              </ContactInfo>
            </ContactItem>

            <ContactItem>
              <FiPhone />
              <ContactInfo>
                <div className="label">{t.info.phone}</div>
                <div className="value">+55 53 9 9988-1531</div>
              </ContactInfo>
            </ContactItem>

            <SocialSection>
              <SocialLabel>{t.info.social}</SocialLabel>
              <SocialIcons>
                <a
                  href="https://github.com/leocoliveiraa"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://linkedin.com/in/leocoliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="https://twitter.com/leocoliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://instagram.com/leocoliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <FiInstagram />
                </a>
              </SocialIcons>
            </SocialSection>
          </ContactCard>
        </ContactInfoSection>
      </Content>
    </Container>
  );
};

export default Contact;
