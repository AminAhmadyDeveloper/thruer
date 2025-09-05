import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  validationUrl?: string;
}

export const VerificationEmail = ({
  validationUrl,
}: VerificationEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "2.5rem",
          height: "2.5rem",
          color: "oklch(0.645 0.246 16.439)",
        }}
        fill="currentColor"
      >
        <title className="hidden">Logo</title>
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="currentColor"
            d="M254.7 32.45c-14.6 15.09-28.7 29.9-39.2 44.31-12.1 16.49-19.3 32.24-19.3 46.14 0 24.3 2.1 48.4 7.2 67.7 17.1 12 31.4 26.4 42.3 43.7v-77h18V235c12.6-17.5 27.6-31.9 44.7-44 5.1-19.4 7.3-43.7 7.3-68.2 0-13.9-7.2-29.55-19.3-46.04-10.5-14.41-26.5-29.22-41.7-44.31zM109.6 172.4c-9.79.2-21.86 2.5-34.03 6.6-17 5.7-35.64 14.6-54.58 24 9.68 18.4 19.36 36.3 29.71 50.7 11.85 18.9 24.5 30.5 38.07 34.8 24.33 7.6 45.73 12.2 65.73 13.3 18-12.5 37.4-21.6 57.3-26.5l-74.7-26 5.6-17.2 75.4 23.8c3.1-5.1 7.1-9.6 11.9-13-20.6-32.6-55.4-52.9-104.1-68.2-5-1.7-10.4-2.4-16.3-2.3zm290.8.3c-5.1.1-9.8.8-14.1 2.2-49.5 15.3-83.3 35.4-104 67.9 4.9 3.5 9.1 8 12.1 13.2l72.5-23.6 6.7 17.2-73.5 26c.1 1.5.2 2.9.2 4.4 0 4.6-.8 9.1-2.2 13.3 35.7 14.2 76.1 10.7 124.3-4.7 13.3-4.1 25.6-15.8 37.2-34.8 10.2-14.3 21.7-32.3 31.4-50.6-20.9-9.4-39.1-18.3-55.7-24-11.9-4.1-22.9-6.5-32.7-6.6zm-145.4 80c-13.8 0-24.8 13.5-24.8 27.3s11 24.8 24.8 24.8c14.4 0 27.2-11 27.2-24.8s-12.8-27.3-27.2-27.3zM214.2 293c-38 9.6-69.5 35.6-98.6 78.1-8.2 11.2-11.3 27.8-11 48 .3 17.5 3.2 37.6 6.4 60.5 20.3-3.3 40.3-6.8 57.6-11.9 21.2-8.5 36-16.6 44.2-27.8 14.4-19.9 25.5-38.9 32.7-57.6-6.7-22.3-9.7-42.3-8.3-62.7l-44.6 63.9-15.3-10.7 45.8-64.5c-4-4.3-7-9.7-8.9-15.3zm76 16.6l44 63.1-14.6 10.6-46.1-64.2c-5.9 2.4-12.3 3.7-18.5 3.7h-.1c-2.4 38.7 13.6 77 44.6 116.9 8.1 11.3 22.9 19.4 42.2 27.8 16.7 5.2 38.8 8.6 59.5 11.9 3.2-22.9 6.2-43 6.4-60.5.3-20.1-2.8-36.7-11-47.9-14.4-22.2-31.2-38.5-46.6-51.1-20.9.4-40.8-2.8-59.8-10.3z"
          ></path>
        </g>
      </svg>
      <Preview>Your login code for Thruer</Preview>
      <Container style={container}>
        <Heading style={heading}>Your login code for Thruer</Heading>
        <Section style={buttonContainer}>
          <Button style={button} href={validationUrl}>
            Activate account
          </Button>
        </Section>
        <Text style={paragraph}>
          This link and code will only be valid for the next 5 minutes. If the
          link does not work, you can use the login verification code directly:
        </Text>
      </Container>
    </Body>
  </Html>
);

VerificationEmail.PreviewProps = {
  validationCode: "123-456",
} as VerificationEmailProps;

export default VerificationEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const buttonContainer = {
  padding: "27px 0 27px",
};

const button = {
  backgroundColor: "oklch(0.645 0.246 16.439)",
  borderRadius: "3px",
  fontWeight: "600",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "11px 23px",
};
