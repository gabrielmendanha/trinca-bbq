import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { Raleway } from "next/font/google";
import {
  AbsoluteDiv,
  Container,
  Content,
  Logo,
  Overlay,
  RelativeDiv,
  Title,
  Wrapper,
} from "@/app/styled";
import BBqTypography from "@/components/typography";
import { Providers } from "@/providers/providers";

export const metadata: Metadata = {
  title: "Agenda de Churras",
  description: "Aplicativo criado como desafio técnico da Trinca",
};

const raleway = Raleway({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={raleway.className}>
      <body>
        <Providers>
          <Wrapper>
            <AbsoluteDiv>
              <RelativeDiv>
                <Overlay />
                <Container>
                  <Content>
                    <Title>
                      <BBqTypography tag={"h1"} size={"title"}>
                        Agenda de Churras
                      </BBqTypography>
                    </Title>
                    <section>{children}</section>
                    <Logo>
                      <Image
                        src="/logo.avif"
                        width={48}
                        height={48}
                        alt="Trinca logo"
                      />
                    </Logo>
                  </Content>
                </Container>
              </RelativeDiv>
            </AbsoluteDiv>
          </Wrapper>
        </Providers>
      </body>
    </html>
  );
}
