import "./globals.css";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Community Project For Week 7",
  description: "Search for new products, buy, sell, trade. Local Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
