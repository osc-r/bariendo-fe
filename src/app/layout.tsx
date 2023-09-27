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
          <Flex h="100vh" bg="gray.50" sx={{ userSelect: "none" }}>
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
