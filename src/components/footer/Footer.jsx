import React, {useEffect} from "react";
import { styled } from "styled-components";
import { ButtonState, GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { ReactComponent as IDAOLogoIcon } from "../../assets/images/IDAO_logo.svg";
import { links } from "../../data/data";
import { useState } from "react";
import { media } from "../../styles/media";

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${colorFetch("primary")};
`;

const ContentWrapper = styled(GlobalWrapper)`
  padding-top: 95px;
  padding-bottom: 55px;

  ${media.desktop`
    padding-top: 50px;
    padding-bottom: 30px;
  `}
`;

const FirstLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.desktop`
    align-items: flex-start;
    flex-direction: column;
    gap: 50px;
  `}
`;

const Links = styled.div`
  display: flex;
  gap: 30px;

  ${media.desktop`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

  `}
`;

const Link = styled.span`
  cursor: pointer;
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
`;

const ContactForm = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colorFetch("secondary")};
  border-radius: 999px;

  ${media.desktop`
    width: 100%;
  `}
`;

const Input = styled.input`
  height: 16px;
  background-color: transparent;
  border: none;
  outline: transparent;
  margin: 10px 10px 10px 20px;
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
  color: ${colorFetch("secondary")};

  &::placeholder {
    color: ${colorFetch("secondary2")};
  }

  ${media.desktop`
    flex: 1;
  `}
`;

const Button = styled(ButtonState)`
  padding: 10px 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colorFetch("secondary")};
  margin: 125px 0 45px;

  ${media.desktop`
    margin: 50px 0 30px;
  `}
`;

const SecondLine = styled.div``;

const AuthorRights = styled.span`
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Description = styled.p`
  color: ${colorFetch("secondary2")};
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  max-width: 520px;
`;

export const Footer = () => {
  const [email, setEmail] = useState('');

  const [csrfToken, setCsrfToken] = useState(null);

  // Function to fetch CSRF token
  const fetchCsrfToken = async () => {
    try {
      const response = await fetch('api/get-csrf-token/');
      if (response.ok) {
        const data = await response.json();
        setCsrfToken(data.csrf_token);
      } else {
        console.error('Failed to fetch CSRF token');
      }
    } catch (error) {
      console.error('An error occurred while fetching CSRF token:', error);
    }
  };

  useEffect(() => {
    // Fetch CSRF token when the component mounts
    fetchCsrfToken();
  }, []);

  const onClickHandler = async () => {
    try {
      console.log(email);

      const headers = {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
      };

      const response = await fetch('api/subscribe/', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ email }), // Send email in the request body
      });

      if (response.ok) {
        setEmail('')
        console.log('Subscription successful');
      } else {
        console.error('Subscription failed');
      }
    } catch (error) {
      setEmail('')
      console.error('An error occurred:', error);
    }
  };

  return (
    <Background>
      <ContentWrapper>
        <FirstLine>
          <IDAOLogoIcon />
          <Links>
            {links.map(({ text }) => (
              <Link>{text}</Link>
            ))}
          </Links>
          <ContactForm>
            <Input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Email"
            />
            <Button className={"whiteBgc"} onClick={onClickHandler}>Подписаться</Button>
          </ContactForm>
        </FirstLine>
        <Line />
        <SecondLine>
          <AuthorRights>© 2023 IDAO Platform, Inc.</AuthorRights>
          <Description>
            IDAO Platform, Inc. — это финансовая технологическая компания, а не
            банк. Банковские услуги предоставляются банками-партнерами.
          </Description>
        </SecondLine>
      </ContentWrapper>
    </Background>
  );
};
