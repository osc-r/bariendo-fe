import { Flex } from "@chakra-ui/react";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Flex minH="100vh" bg="gray.200">
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
