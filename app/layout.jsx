export const metadata = {
  title: "CreatorKit — AI Tools for Serious Creators",
  description:
    "Thumbnail concepts that get clicked. Scripts that retain viewers. Research briefs that inform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
